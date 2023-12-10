import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaTrash, FaPlus, FaArrowRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  const initialFormState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    careerTitle: "",
    driversLicence: "",
    degreeTitle: "",
    statement: "",
    templateName: "",
    userID: JSON.parse(localStorage.getItem("user")),
    accomplishments: [
      {
        title: "",
        body: "",
      },
    ],
    education: [
      {
        title: "",
        location: "",
        completionDate: "",
      },
    ],
    skills: [
      {
        title: "",
        body: "",
      },
    ],
    experience: [
      {
        title: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        body: "",
      },
    ],
  };

  const [portfolioFormState, setPortfolioFormState] =
    useState(initialFormState);

  const handleFormSubmit = async () => {
      try {
        const createRes = await fetch(
          `http://localhost:5001/api/portfolio/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(portfolioFormState),
          }
        );
        if (createRes.ok) {
          console.log("Portfolio creation successful");
          navigate('/dashboard');
        } else {
          throw new Error("Portfolio creation failed");
        }
      } catch (error) {
        console.error("Error creating portfolio: ", error);
      }
  };

  const handleFormState = (field, e) => {
    setPortfolioFormState({ ...portfolioFormState, [field]: e.target.value });
    console.log(portfolioFormState);
  };
  const handleNestedFormState = (category, index, field, e) => {
    setPortfolioFormState({
      ...portfolioFormState,
      [category]: portfolioFormState[category].map((item, i) =>
        i === index ? { ...item, [field]: e.target.value } : item
      ),
    });

    console.log(portfolioFormState);
  };
  const handleDelete = (category, index) => {
    setPortfolioFormState({
      ...portfolioFormState,
      [category]: [...portfolioFormState[category]].splice(index, 1),
    });
  };
  const handleAddAccomplishment = () => {
    setPortfolioFormState({
      ...portfolioFormState,
      accomplishments: [
        ...portfolioFormState.accomplishments,
        {
          title: "",
          body: "",
        },
      ],
    });
  };
  const handleAddEducation = () => {
    setPortfolioFormState({
      ...portfolioFormState,
      education: [
        ...portfolioFormState.education,
        {
          title: "",
          location: "",
          completionDate: "",
        },
      ],
    });
  };
  const handleAddExperience = () => {
    setPortfolioFormState({
      ...portfolioFormState,
      experience: [
        ...portfolioFormState.experience,
        {
          title: "",
          startMonth: "",
          startYear: "",
          endMonth: "",
          endYear: "",
          body: "",
        },
      ],
    });
  };
  const handleAddSkill = () => {
    setPortfolioFormState({
      ...portfolioFormState,
      skills: [
        ...portfolioFormState.skills,
        {
          title: "",
          body: "",
        },
      ],
    });
    console.log(portfolioFormState);
  };

  const FormHeader = (props) => {
    return (
      <div className="w-full h-[172px] mt-12 flex flex-col items-center justify-center bg-cyan-900 rounded-lg">
        <div className="text-white text-[40px] font-normal">
          Template Name - Form
          <br />
        </div>
      </div>
    );
  };

  const FormSectionHeader = (props) => {
    return (
      <div className="w-full h-16 flex flex-col mb-5 items-center justify-center bg-sky-700 rounded-lg">
        <div className="text-white text-xl font-medium">{props.title}</div>
      </div>
    );
  };

  const FormFooter = () => {
    return (
      <div className="w-full self-end">
        <div className="flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold"
          >
            Back
          </button>

          <button
            onClick={() => handleFormSubmit()}
            className="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative flex flex-col">
      <Navbar />
      <div className="flex flex-col h-full items-center justify-between px-8 lg:px-32 gap-12">
        <FormHeader />
        <section id="contact" className="w-11/12">
          <FormSectionHeader title="Contact Section" />
          <div className="flex gap-4">
            <div className="flex flex-col align-middle justify-center ">
              <div className="flex m-2 h-12 items-center">First Name: </div>
              <div className="flex m-2 h-12 items-center">Last Name: </div>
              <div className="flex m-2 h-12 items-center">Email Address: </div>
              <div className="flex m-2 h-12 items-center">Address: </div>
              <div className="flex m-2 h-12 items-center">Phone Number: </div>
            </div>

            <div className="flex flex-col ">
              <input
                onChange={(e) => handleFormState("firstName", e)}
                value={portfolioFormState.firstName}
                placeholder="John"
                className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
              />
              <input
                onChange={(e) => handleFormState("lastName", e)}
                value={portfolioFormState.lastName}
                placeholder="Doe"
                className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
              />
              <input
                onChange={(e) => handleFormState("emailAddress", e)}
                value={portfolioFormState.emailAddress}
                placeholder="johndoe@gmail.com"
                className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
              />
              <input
                onChange={(e) => handleFormState("address", e)}
                value={portfolioFormState.address}
                placeholder="123 Driveway Lane"
                className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
              />
              <input
                onChange={(e) => handleFormState("phoneNumber", e)}
                value={portfolioFormState.phoneNumber}
                placeholder="+123456789"
                className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center">
              <div className="flex mx-2 h-12 items-end ">Statement: </div>
              <textarea
                rows={4}
                cols={4}
                onChange={(e) => handleFormState("statement", e)}
                value={portfolioFormState.statement}
                placeholder="Personal Statement"
                multiple
                className="w-full h-28 m-2 p-2 bg-zinc-300 rounded-[10px] border border-black"
              />
            </div>
            <div className="flex justify-evenly items-center w-full">
              <select className="w-48 h-16 m-2 border border-black bg-zinc-300 text-black p-2 rounded-md mb-5">
                <option className=" bg-cyan-900 text-white" value="none">
                  None
                </option>
                <option className="bg-cyan-900 text-white" value="learners">
                  Learners
                </option>
                <option className="bg-cyan-900 text-white" value="restricted">
                  Restricted
                </option>
                <option className="bg-cyan-900 text-white" value="full">
                  Full
                </option>
              </select>
              <div className="flex">
                <div className="flex flex-col align-middle justify-center items-end">
                  <div className="flex m-2 h-12 items-center">
                    Degree Title:
                  </div>
                  <div className="flex m-2 h-12 items-center">
                    Career Title:
                  </div>
                </div>
                <div className="flex flex-col ">
                  <input
                    onChange={(e) => handleFormState("degreeTitle", e)}
                    value={portfolioFormState.degreeTitle}
                    placeholder="xxx"
                    className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
                  />
                  <input
                    onChange={(e) => handleFormState("careerTitle", e)}
                    value={portfolioFormState.careerTitle}
                    placeholder="xxx"
                    className="w-[400px] h-12 bg-zinc-300 m-2 p-2 rounded-[10px] border border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="accomplishment" className="w-11/12 mt-5">
          <FormSectionHeader title="Accomplishment Section" />
          <ol className="list-decimal list-outside ml-3 flex flex-col gap-4 ">
            {portfolioFormState.accomplishments.map(
              (accomplishments, index) => (
                <li
                  key={index}
                  className=" border border-black bg-zinc-300 rounded-md"
                >
                  <div className="flex ">
                    <div className="flex flex-col justify-center items-end mx-2">
                      <div className="flex m-1 h-12 items-center">Title:</div>
                      <div className="flex m-1 h-12 items-center">Body:</div>
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "accomplishments",
                            index,
                            "title",
                            e
                          )
                        }
                        value={portfolioFormState.accomplishments.title}
                        placeholder="xxx"
                        className=" h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "accomplishments",
                            index,
                            "body",
                            e
                          )
                        }
                        value={portfolioFormState.accomplishments.body}
                        placeholder="xxx"
                        className="h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                    <FaTrash
                      onClick={() => handleDelete("accomplishments", index)}
                      className="cursor-pointer self-center fill-red-600 m-2 text-xl md:text-2xl lg:text-3xl"
                    />
                  </div>
                </li>
              )
            )}
          </ol>
          <FaPlus
            onClick={handleAddAccomplishment}
            className=" cursor-pointer w-full flex justify-self-center fill-zinc-600 m-2 text-2xl md:text-3xl lg:text-3xl"
          />
        </section>
        <section id="education" className="w-11/12 mt-5">
          <FormSectionHeader title="Education Section" />
          <ol className="list-decimal list-outside ml-3 flex flex-col gap-4 ">
            {portfolioFormState.education.map((education, index) => (
              <li
                key={index}
                className="border border-black bg-zinc-300 rounded-md"
              >
                <div className="flex ">
                  <div className="flex flex-col justify-center items-end ml-2">
                    <div className="flex m-1 h-12 items-center">Location:</div>
                    <div className="flex m-1 h-12 items-center">
                      Degree Title:
                    </div>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="flex">
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "education",
                            index,
                            "location",
                            e
                          )
                        }
                        value={portfolioFormState.education.location}
                        placeholder="xxx"
                        className="flex-grow h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                      <div className="flex m-1 h-12 items-center">Date:</div>
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "education",
                            index,
                            "completionDate",
                            e
                          )
                        }
                        value={portfolioFormState.education.completionDate}
                        placeholder="xxx"
                        className="h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                    <div className="flex">
                      <input
                        onChange={(e) =>
                          handleNestedFormState("education", index, "title", e)
                        }
                        value={portfolioFormState.education.title}
                        placeholder="xxx"
                        className="flex-grow h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                  </div>
                  <FaTrash
                    onClick={() => handleDelete("education", index)}
                    className="cursor-pointer self-center fill-red-600 m-2 text-xl md:text-2xl lg:text-3xl"
                  />
                </div>
              </li>
            ))}
          </ol>
          <FaPlus
            onClick={handleAddEducation}
            className=" cursor-pointer w-full flex justify-self-center fill-zinc-600 m-2 text-2xl md:text-3xl lg:text-3xl"
          />
        </section>
        <section id="experience" className="w-11/12 mt-5">
          <FormSectionHeader title="Experience Section" />
          <ol className="list-decimal list-outside ml-3 flex flex-col gap-4 ">
            {portfolioFormState.experience.map((experience, index) => (
              <li
                key={index}
                className="border border-black bg-zinc-300 rounded-md"
              >
                <div className="flex">
                  <div className="flex flex-col justify-start items-end ml-2">
                    <div className="flex m-1 h-12 items-center">Title:</div>
                    <div className="flex m-1 h-12 items-center">Years:</div>
                    <div className="flex m-1 h-12 items-center">Body:</div>
                  </div>
                  <div className="flex flex-col justify-center w-full">
                    <div className="flex">
                      <input
                        onChange={(e) =>
                          handleNestedFormState("experience", index, "title", e)
                        }
                        value={portfolioFormState.experience.title}
                        placeholder="xxx"
                        className="flex-grow h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                    <div className="flex">
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "experience",
                            index,
                            "startMonth",
                            e
                          )
                        }
                        value={portfolioFormState.experience.startMonth}
                        placeholder="xxx"
                        className="w-24 h-9 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "experience",
                            index,
                            "startYear",
                            e
                          )
                        }
                        value={portfolioFormState.experience.startYear}
                        placeholder="xxx"
                        className="w-24 h-9 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                      <span className="flex self-center mx-6 fill-red-600 font-bold text-4xl md:text-4xl lg:text-4xl">
                        &#10230;
                      </span>
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "experience",
                            index,
                            "endMonth",
                            e
                          )
                        }
                        value={portfolioFormState.experience.endMonth}
                        placeholder="xxx"
                        className="w-24 h-9 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                      <input
                        onChange={(e) =>
                          handleNestedFormState(
                            "experience",
                            index,
                            "endYear",
                            e
                          )
                        }
                        value={portfolioFormState.experience.endYear}
                        placeholder="xxx"
                        className="w-24 h-9 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                    <div className="flex">
                      <textarea
                        onChange={(e) =>
                          handleNestedFormState("experience", index, "body", e)
                        }
                        value={portfolioFormState.experience.body}
                        placeholder="xxx"
                        className="flex-grow max-w-2xl h-24 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                      />
                    </div>
                  </div>
                  <FaTrash
                    onClick={() => handleDelete("experience", index)}
                    className="cursor-pointer self-center fill-red-600 m-2 text-xl md:text-2xl lg:text-3xl"
                  />
                </div>
              </li>
            ))}
          </ol>
          <FaPlus
            onClick={handleAddExperience}
            className=" cursor-pointer w-full flex justify-self-center fill-zinc-600 m-2 text-2xl md:text-3xl lg:text-3xl"
          />
        </section>
        <section id="skills" className="w-11/12 mt-5">
          <FormSectionHeader title="Skills Section" />
          <ol className="list-decimal list-outside ml-3 flex flex-col gap-4 ">
            {portfolioFormState.skills.map((skills, index) => (
              <li
                key={index}
                className="border border-black bg-zinc-300 rounded-md"
              >
                <div className="flex">
                  <div className="flex flex-col justify-center items-end mx-2">
                    <div className="flex m-1 h-12 items-center">Title:</div>
                    <div className="flex m-1 h-12 items-center">Body:</div>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <input
                      onChange={(e) =>
                        handleNestedFormState("skills", index, "title", e)
                      }
                      value={portfolioFormState.skills.title}
                      placeholder="xxx"
                      className=" h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                    />
                    <input
                      onChange={(e) =>
                        handleNestedFormState("skills", index, "body", e)
                      }
                      value={portfolioFormState.skills.body}
                      placeholder="xxx"
                      className="h-12 bg-zinc-100 m-1 p-2 rounded-[10px] border border-black"
                    />
                  </div>
                  <FaTrash
                    onClick={() => handleDelete("skills", index)}
                    className="cursor-pointer self-center fill-red-600 m-2 text-xl md:text-2xl lg:text-3xl"
                  />
                </div>
              </li>
            ))}
          </ol>
          <FaPlus
            onClick={handleAddSkill}
            className=" cursor-pointer w-full flex justify-self-center fill-zinc-600 m-2 text-2xl md:text-3xl lg:text-3xl"
          />
        </section>
        <FormFooter className="self-center" />
      </div>
    </div>
  );
};
