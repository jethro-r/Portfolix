import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FormInput } from "../components/FormInput";
import { FormReview } from "../components/FormReview";
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

  const [page, setPage] = useState(0);
  const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <Tab0 id="0" formData={formData} />;
      case 1:
        return <Tab1 id="1" formData={formData} />;
      case 2:
        return <Tab2 id="2" formData={formData} />;
      case 3:
        return <Tab3 id="3" formData={formData} />;
      case 4:
        return <Tab4 id="4" formData={formData} />;
      case 5:
        return <Tab5 id="5" formData={formData} />;
      case 6:
        return <Tab6 id="6" formData={formData} />;
      case 7:
        return <FormReview formData={formData} />;
      default:
        return <Tab1 formData={formData} setFormData={setFormData} />;
    }
  };
  function handleSubmit() {
    setPage(page + 1);
  }

  const FormSectionHeader = (props) => {
    return (
      <div class="w-[1022px] h-[172px] flex flex-col items-center justify-center bg-cyan-900 rounded-lg">
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
      <div>
        <button onClick={handleSubmit}></button>
        {page > 0 && <button onClick={() => setPage(page - 1)}>Back</button>}

        <div class="w-[1022px] h-[22px] bg-zinc-400 rounded-[99px]">
          <div class="w-[170px] h-full bg-green-600 rounded-[99px]"></div>
        </div>
        <div class="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold">
          BACK
        </div>
        <div class="w-[126px] h-14 bg-sky-700 rounded-[10px] text-center text-white text-xl font-bold">
        {page === 0 || page === 7 ? "Next" : "Submit"}
        </div>


        <div class="w-[79px] h-8 left-[1471px] top-[983px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
          {page}/7
        </div>
      </div>
    );
  };

  const Tab0 = ({ formData, setFormData }) => {
    return (
      <div>
        <FormSectionHeader />
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
        <div class="w-[200px] h-[230px] left-[1176px] top-[428px] absolute">
          <div class="w-[200px] h-[200px] left-0 top-[30px] absolute bg-zinc-300 rounded-[400px] border border-black"></div>
          <div class="w-[200px] h-[30px] text-center text-zinc-800 text-sm font-normal">
            Profile Picture
          </div>
          <div class="w-[200px] h-[30px] left-0 top-[115px] absolute text-center text-zinc-800 text-sm font-normal">
            Upload
          </div>
        </div>
        <FormSectionFooter />
      </div>
    );
  };

  const Tab1 = ({ formData, setFormData }) => {
    return <div>Tab1</div>;
  };
  const Tab2 = ({ formData, setFormData }) => {
    return (
      <div>
        <FormInput props={{ title: "Drivers Licence" }} />
        <FormInput props={{ title: "Degree Title" }} />
        <FormInput props={{ title: "Statement", type: "box" }} />
        <FormInput props={{ title: "Career Title" }} />
      </div>
    );
  };
  const Tab3 = ({ formData, setFormData }) => {
    return <div>Tab3</div>;
  };
  const Tab4 = ({ formData, setFormData }) => {
    return <div>Tab4</div>;
  };
  const Tab5 = ({ formData, setFormData }) => {
    return <div>Tab5</div>;
  };
  const Tab6 = ({ formData, setFormData }) => {
    return <div>Tab6</div>;
  };

  return (
    <div class="w-full relative flex flex-col">
      <Navbar />
      {conditionalComponent()}
    </div>
  );
};
