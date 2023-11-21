import React from "react";
import Navbar from "../components/Navbar";
import { FormInput } from "../components/FormInput";

const FormHeader = (props) => {
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

export const Form = () => {
  return (
    <div class="w-full relative flex flex-col">
      <div class="w-full flex flex-col">
        <Navbar />
        <FormInput props={{ title: "First Name" }} />
        <div class="w-[200px] h-[230px] left-[1176px] top-[428px] absolute">
          <div class="w-[200px] h-[200px] left-0 top-[30px] absolute bg-zinc-300 rounded-[400px] border border-black"></div>
          <div class="w-[200px] h-[30px] left-0 top-0 absolute text-center text-zinc-800 text-sm font-normal">
            Profile Picture
          </div>
          <div class="w-[200px] h-[30px] left-0 top-[115px] absolute text-center text-zinc-800 text-sm font-normal">
            Upload
          </div>
        </div>
        <div class="w-[1920px] h-[0px] left-0 top-[1080px] absolute border border-black"></div>
        <div class="w-[1022px] h-[22px] left-[449px] top-[988px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[1022px] h-[22px] left-[450px] top-[2068px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[1022px] h-[22px] left-[450px] top-[3148px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[1022px] h-[22px] left-[450px] top-[4228px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[1022px] h-[22px] left-[450px] top-[5308px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[1022px] h-[22px] left-[450px] top-[6388px] absolute bg-zinc-400 rounded-[99px]"></div>
        <div class="w-[66px] h-[22px] left-[449px] top-[988px] absolute bg-green-600 rounded-[99px]"></div>
        <div class="w-[170px] h-[22px] left-[450px] top-[2068px] absolute bg-green-600 rounded-[99px]"></div>
        <div class="w-[340px] h-[22px] left-[450px] top-[3148px] absolute bg-green-600 rounded-[99px]"></div>
        <div class="w-[510px] h-[22px] left-[450px] top-[4228px] absolute bg-green-600 rounded-[99px]"></div>
        <div class="w-[680px] h-[22px] left-[450px] top-[5308px] absolute bg-green-600 rounded-[99px]"></div>
        <div class="w-[850px] h-[22px] left-[450px] top-[6388px] absolute bg-green-600 rounded-[99px]"></div>
        <FormInput props={{ title: "First Name" }} />
        <FormInput props={{ title: "Last Name" }} />
        <FormInput props={{ title: "Email Address" }} />
        <FormInput props={{ title: "Address" }} />
        <FormInput props={{ title: "Phone Number" }} />
        <FormInput props={{ title: "Website Link" }} />
      </div>
      <div class="w-[1920px] h-[1080px] left-0 top-[1080px] absolute">
        <FormInput props={{ title: "Drivers Licence" }} />
        <FormInput props={{ title: "Degree Title" }} />
        <FormInput props={{ title: "Statement", type: "box" }} />
        <FormInput props={{ title: "Career Title" }} />
        <div class="w-[300px] h-[45px] left-[1605px] top-[297px] absolute">
          <div class="w-[300px] h-[45px] left-0 top-0 absolute bg-pink-400"></div>
          <div class="w-[300px] h-[45px] left-0 top-0 absolute text-center text-zinc-800 text-sm font-normal">
            Template Choice
          </div>
        </div>
        <div class="w-[1920px] h-[0px] left-0 top-[1080px] absolute border border-black"></div>
        <Navbar />{" "}
      </div>
      <Navbar />{" "}
      <div class="h-[872px] left-0 top-[2368px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
      </div>
      <div class="h-[872px] left-0 top-[3448px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
      </div>
      <div class="h-[872px] left-0 top-[4528px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
      </div>
      <div class="h-[872px] left-0 top-[5608px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
      </div>
      <FormHeader />
      <FormHeader />
      <FormHeader />
      <FormHeader />
      <FormHeader />
      <FormHeader />
      <div class="w-[126px] h-14 left-[1345px] top-[913px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        NEXT
      </div>
    </div>
    <div class="w-[126px] h-14 left-[1345px] top-[1993px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        NEXT
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[1993px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[3073px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[4153px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[5233px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[6313px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[450px] top-[9518px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        BACK
      </div>
    </div>
    <div class="w-[126px] h-14 left-[1345px] top-[3073px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        NEXT
      </div>
    </div>
    <div class="w-[126px] h-14 left-[1345px] top-[4153px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        NEXT
      </div>
    </div>
    <div class="w-[126px] h-14 left-[1345px] top-[5233px] absolute">
      <div class="w-[126px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[126px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        NEXT
      </div>
    </div>
    <div class="w-[152px] h-14 left-[1316px] top-[6313px] absolute">
      <div class="w-[152px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
      <div class="w-[152px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
        REVIEW
      </div>
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[983px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      1/7
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[2063px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      2/7
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[3143px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      3/7
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[4223px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      4/7
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[5303px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      5/7
    </div>
    <div class="w-[79px] h-8 left-[1471px] top-[6383px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-[2.50px]">
      6/7
    </div>
    <div class="w-28 h-8 left-[1471px] top-[9579px] absolute text-center text-neutral-500 text-[25px] font-bold tracking-wider">
      7/7
    </div>
    
      <div class="w-[152px] h-14 left-[1319px] top-[9514px] absolute">
        <div class="w-[152px] h-14 left-0 top-0 absolute bg-sky-700 rounded-[10px]"></div>
        <div class="w-[152px] h-14 left-0 top-0 absolute text-center text-white text-xl font-bold tracking-[3px]">
          SUBMIT
        </div>
      </div>
    </div>
  );
};
