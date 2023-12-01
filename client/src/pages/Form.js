import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FormInput } from "../components/FormInput";
export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employment_status: null,
  });

  const handleFormState = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  function handleSubmit() {
  }

  const FormSectionHeader = (props) => {
    return (
      <div class="w-full h-[172px] flex flex-col items-center justify-center bg-cyan-900 rounded-lg">
        <div class="text-white text-[40px] font-normal">
          Template Name - Form
          <br />
        </div>
        <div class="text-white text-xl font-medium">Contact Section</div>
      </div>
    );
  };

  const FormSectionFooter = () => {
    return (
      <div className="w-full self-end">
        <div class="flex justify-between">
          <button
            onClick={() => setPage(page - 1)}
            class="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold"
          >
            Back
          </button>

          <button class="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold">
            Submit
          </button>
        </div>
      </div>
    );
  };

  const Tab2 = ({ formData, setFormData }) => {
    return <div></div>;
  };

  return (
    <div class="w-full relative flex flex-col">
      <Navbar />
      <div class="flex flex-col h-full items-center justify-between px-32">
        <FormSectionHeader />
        <div>
          <div>
            <div class="flex flex-col justify-center">
              <div>First Name: </div>
              <input
                onChange={handleFormState}
                value={formData.name}
                placeholder="John Doe"
                required
                class="w-[800px] h-[120px] bg-slate-500 rounded-[10px] border border-black"
              ></input>
            </div>
          </div>
          <FormInput
            props={{ title: "Last Name" }}
            formData={formData}
            handleFormState={handleFormState}
          />
          <FormInput
            props={{ title: "Email Address" }}
            formData={formData}
            handleFormState={handleFormState}
          />
          <FormInput
            props={{ title: "Address" }}
            formData={formData}
            handleFormState={handleFormState}
          />
          <FormInput
            props={{ title: "Phone Number" }}
            formData={formData}
            handleFormState={handleFormState}
          />
          <FormInput
            props={{ title: "Website Link" }}
            formData={formData}
            handleFormState={handleFormState}
          />
          <FormInput props={{ title: "Drivers Licence" }} />
          <FormInput props={{ title: "Degree Title" }} />
          <FormInput props={{ title: "Statement", type: "box" }} />
          <FormInput props={{ title: "Career Title" }} />

          <FormSectionFooter class="self-center" />
        </div>
      </div>
    </div>
  );
};
