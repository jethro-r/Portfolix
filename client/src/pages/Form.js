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
        <FormInput props={{ titile: "First Name" }} />
        <FormInput props={{ titile: "Last Name" }} />
        <FormInput props={{ titile: "Email Address" }} />
        <FormInput props={{ titile: "Address" }} />
        <FormInput props={{ titile: "Phone Number" }} />
        <FormInput props={{ titile: "Website Link" }} />
      </div>
      <div class="w-[1920px] h-[1080px] left-0 top-[1080px] absolute">
        <div class="w-[400px] h-[45px] left-[660px] top-[428px] absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[195px] h-[45px] left-[449px] top-[503px] absolute text-right text-zinc-800 text-sm font-medium">
          Drivers Licence:
        </div>
        <div class="w-[195px] h-[45px] left-[449px] top-[573px] absolute text-right text-zinc-800 text-sm font-medium">
          Degree Title:
        </div>
        <div class="w-[212px] h-[45px] left-[450px] top-[651px] absolute text-zinc-800 text-2xl font-semibold">
          Statement
        </div>
        <div class="w-[195px] h-[45px] left-[449px] top-[428px] absolute text-right text-zinc-800 text-sm font-medium">
          Career Title:
        </div>
        <div class="w-[1022px] h-[178px] left-[449px] top-[696px] absolute">
          <div class="w-[1022px] h-[178px] left-0 top-0 absolute bg-zinc-300 rounded-[15px] border border-black"></div>
          <div class="w-[1022px] h-[178px] left-0 top-0 absolute text-zinc-800 text-sm font-normal">
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            feugiat ex at justo porttitor, a eleifend orci interdum. Donec ut
            nisl ac velit scelerisque interdum. Vivamus ultrices elementum
            ullamcorper. Suspendisse consequat, odio sit amet mattis venenatis,
            est purus semper turpis, tempor vestibulum dolor urna at massa.
            Aenean eleifend purus eget tincidunt posuere. Nam imperdiet, sapien
            vel lobortis efficitur, risus magna.
          </div>
        </div>
        <div class="w-[300px] h-[45px] left-[1605px] top-[297px] absolute">
          <div class="w-[300px] h-[45px] left-0 top-0 absolute bg-pink-400"></div>
          <div class="w-[300px] h-[45px] left-0 top-0 absolute text-center text-zinc-800 text-sm font-normal">
            Template Choice
          </div>
        </div>
        <div class="w-[1920px] h-[0px] left-0 top-[1080px] absolute border border-black"></div>
        <Navbar />{" "}
        <div class="w-[1022px] h-[172px] left-[449px] top-[208px] absolute bg-cyan-900"></div>
      </div>
      <Navbar />{" "}
      <div class="h-[872px] left-0 top-[2368px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
        <div class="w-[1022px] h-[172px] left-[449px] top-0 absolute bg-cyan-900"></div>
      </div>
      <div class="h-[872px] left-0 top-[3448px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
        <div class="w-[1022px] h-[172px] left-[449px] top-0 absolute bg-cyan-900"></div>
      </div>
      <div class="h-[872px] left-0 top-[4528px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
        <div class="w-[1022px] h-[172px] left-[449px] top-0 absolute bg-cyan-900"></div>
      </div>
      <div class="h-[872px] left-0 top-[5608px] absolute">
        <div class="w-[1920px] h-[0px] left-0 top-[872px] absolute border border-black"></div>
        <div class="w-[1022px] h-[172px] left-[449px] top-0 absolute bg-cyan-900"></div>
      </div>
      <div class="w-[1022px] h-[172px] left-[449px] top-[6688px] absolute bg-cyan-900"></div>
      <div class="w-[1022px] h-[22px] left-[450px] top-[9584px] absolute bg-green-600 rounded-[99px]"></div>
      <div class="w-[458px] h-[37.87px] left-[680px] top-[6896px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.69px] absolute text-zinc-800 text-sm font-normal">
          First Name
        </div>
      </div>
      <div class="w-[458px] h-[37.82px] left-[680px] top-[7020px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.63px] absolute text-zinc-800 text-sm font-normal">
          Email address
        </div>
      </div>
      <div class="w-[458px] h-[37.84px] left-[680px] top-[6958px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.66px] absolute text-zinc-800 text-sm font-normal">
          Last Name
        </div>
      </div>
      <div class="w-[458px] h-[37.76px] left-[680px] top-[7144px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.58px] absolute text-zinc-800 text-sm font-normal">
          Phone Number
        </div>
      </div>
      <div class="w-[458px] h-[37.79px] left-[680px] top-[7082px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.61px] absolute text-zinc-800 text-sm font-normal">
          Address
        </div>
      </div>
      <div class="w-[458px] h-[37.74px] left-[680px] top-[7206px] absolute">
        <div class="w-[458px] h-[37px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[37.18px] left-[20px] top-[0.55px] absolute text-zinc-800 text-sm font-normal">
          Website Link?
        </div>
      </div>
      <div class="w-[225px] h-[225px] left-[1246px] top-[6896px] absolute">
        <div class="w-[225px] h-[225px] left-0 top-0 absolute bg-zinc-300 rounded-[381px] border border-black"></div>
        <div class="w-[225px] h-[225px] left-0 top-0 absolute text-center text-zinc-800 text-sm font-normal">
          Pfp
        </div>
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[6896px] absolute text-center text-black text-sm font-normal">
        First Name:
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[6959px] absolute text-center text-black text-sm font-normal">
        Last Name:
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[7020px] absolute text-center text-black text-sm font-normal">
        Email Address:
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[7082px] absolute text-center text-black text-sm font-normal">
        Address:
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[7144px] absolute text-center text-black text-sm font-normal">
        Phone Number:
      </div>
      <div class="w-[233px] h-[38px] left-[449px] top-[7206px] absolute text-center text-black text-sm font-normal">
        Website Link?:
      </div>
      <div class="w-[458px] h-[39.01px] left-[680px] top-[7332px] absolute">
        <div class="w-[458px] h-[38px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[38.35px] left-[20px] top-[0.67px] absolute text-zinc-800 text-sm font-normal">
          Drivers Licence
        </div>
      </div>
      <div class="w-[458px] h-[38.67px] left-[680px] top-[7392px] absolute">
        <div class="w-[458px] h-[38px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[38.35px] left-[20px] top-[0.32px] absolute text-zinc-800 text-sm font-normal">
          Degree Title
        </div>
      </div>
      <div class="w-[458px] h-[39.10px] left-[680px] top-[7268px] absolute">
        <div class="w-[458px] h-[38px] left-0 top-0 absolute bg-zinc-300 rounded border border-black"></div>
        <div class="w-[438px] h-[38.35px] left-[20px] top-[0.75px] absolute text-zinc-800 text-sm font-normal">
          Career Title
        </div>
      </div>
      <div class="w-[257px] h-10 left-[449px] top-[7331px] absolute text-center text-zinc-800 text-sm font-normal">
        Drivers Licence
      </div>
      <div class="w-[257px] h-[38px] left-[449px] top-[7394px] absolute text-center text-zinc-800 text-sm font-normal">
        Degree Title
      </div>
      <div class="w-[257px] h-[38px] left-[449px] top-[7269px] absolute text-center text-zinc-800 text-sm font-normal">
        Career Title
      </div>
      <div class="w-[1022px] h-[6652px] left-[449px] top-[208px] absolute">
        <FormHeader />
        <FormHeader />
        <FormHeader />
        <FormHeader />
        <FormHeader />
        <FormHeader />
      </div>
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
      <div class="w-[15px] h-[460px] left-[1471px] top-[2581px] absolute">
        <div class="w-[460px] h-[15px] left-0 top-[460px] absolute origin-top-left -rotate-90 bg-zinc-400 rounded-[100px]"></div>
        <div class="w-[300px] h-[15px] left-0 top-[300px] absolute origin-top-left -rotate-90 bg-neutral-500 rounded-[100px]"></div>
      </div>
      <div class="w-[1016px] h-[140px] left-[449px] top-[2581px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <div class="w-[1016px] h-[140px] left-[449px] top-[2741px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          2.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <div class="w-[1016px] h-[140px] left-[449px] top-[2901px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          3.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />{" "}
      <div class="w-[15px] h-[460px] left-[1464px] top-[3661px] absolute">
        <div class="w-[460px] h-[15px] left-0 top-[460px] absolute origin-top-left -rotate-90 bg-zinc-400 rounded-[100px]"></div>
        <div class="w-[300px] h-[15px] left-0 top-[300px] absolute origin-top-left -rotate-90 bg-neutral-500 rounded-[100px]"></div>
      </div>
      <div class="w-[1016px] h-[95px] left-[442px] top-[3661px] absolute">
        <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
          Place:
        </div>
        <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
          Date:
        </div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          01/02/2003
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Degree Title:
        </div>
      </div>
      <div class="w-[1016px] h-[95px] left-[442px] top-[3766px] absolute">
        <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          2.
        </div>
        <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
          Place:
        </div>
        <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
          Date:
        </div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          01/02/2003
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Degree Title:
        </div>
      </div>
      <div class="w-[1016px] h-[95px] left-[442px] top-[3871px] absolute">
        <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          3.
        </div>
        <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
          Place:
        </div>
        <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
          Date:
        </div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          01/02/2003
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Degree Title:
        </div>
      </div>
      <div class="w-[1016px] h-[95px] left-[442px] top-[3976px] absolute">
        <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          4.
        </div>
        <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
          Place:
        </div>
        <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
          Date:
        </div>
        <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          01/02/2003
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Degree Title:
        </div>
      </div>
      <div class="w-[15px] h-[460px] left-[1464px] top-[4732px] absolute">
        <div class="w-[460px] h-[15px] left-0 top-[460px] absolute origin-top-left -rotate-90 bg-zinc-400 rounded-[100px]"></div>
        <div class="w-[300px] h-[15px] left-0 top-[300px] absolute origin-top-left -rotate-90 bg-neutral-500 rounded-[100px]"></div>
      </div>
      <div class="w-[1016px] h-[188px] left-[442px] top-[4732px] absolute">
        <div class="w-[970px] h-[188px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[188px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[96px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[42px] h-[33px] left-[64px] top-[96px] absolute text-black text-sm font-normal">
          Body:
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[50px] h-[33px] left-[56px] top-[53px] absolute text-black text-sm font-normal">
          Years:
        </div>
        <div class="w-[50px] h-[33px] left-[903px] top-[53px] absolute text-black text-sm font-normal">
          Current
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          May
        </div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2003
        </div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          June
        </div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2004
        </div>
      </div>
      <div class="w-[1016px] h-[188px] left-[441px] top-[4935px] absolute">
        <div class="w-[970px] h-[188px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[188px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          2.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[96px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[42px] h-[33px] left-[64px] top-[96px] absolute text-black text-sm font-normal">
          Body:
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[50px] h-[33px] left-[56px] top-[53px] absolute text-black text-sm font-normal">
          Years:
        </div>
        <div class="w-[50px] h-[33px] left-[903px] top-[53px] absolute text-black text-sm font-normal">
          Current
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          May
        </div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2003
        </div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          June
        </div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2004
        </div>
      </div>
      <div class="w-[15px] h-[460px] left-[1464px] top-[5812px] absolute">
        <div class="w-[460px] h-[15px] left-0 top-[460px] absolute origin-top-left -rotate-90 bg-zinc-400 rounded-[100px]"></div>
        <div class="w-[300px] h-[15px] left-0 top-[300px] absolute origin-top-left -rotate-90 bg-neutral-500 rounded-[100px]"></div>
      </div>
      <div class="w-[1016px] h-[140px] left-[442px] top-[5812px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[54px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <div class="w-[1016px] h-[140px] left-[442px] top-[5972px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          2.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <div class="w-[1016px] h-[140px] left-[442px] top-[6132px] absolute">
        <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          3.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
          Body:
        </div>
      </div>
      <div class="w-3 h-3 left-[1324px] top-[4795px] absolute bg-white"></div>
      <div class="w-[1016px] h-[460px] left-[452px] top-[7468px] absolute">
        <div class="w-[1016px] h-[140px] left-0 top-0 absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            1.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
        <div class="w-[1016px] h-[140px] left-0 top-[160px] absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            2.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
        <div class="w-[1016px] h-[140px] left-0 top-[320px] absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            3.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
      </div>
      <div class="w-[1016px] h-[410px] left-[452px] top-[7952px] absolute">
        <div class="w-[1016px] h-[95px] left-0 top-0 absolute">
          <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            1.
          </div>
          <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
            Place:
          </div>
          <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
            Date:
          </div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
            01/02/2003
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Degree Title:
          </div>
        </div>
        <div class="w-[1016px] h-[95px] left-0 top-[105px] absolute">
          <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            2.
          </div>
          <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
            Place:
          </div>
          <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
            Date:
          </div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
            01/02/2003
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Degree Title:
          </div>
        </div>
        <div class="w-[1016px] h-[95px] left-0 top-[210px] absolute">
          <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            3.
          </div>
          <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
            Place:
          </div>
          <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
            Date:
          </div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
            01/02/2003
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Degree Title:
          </div>
        </div>
        <div class="w-[1016px] h-[95px] left-0 top-[315px] absolute">
          <div class="w-[970px] h-[95px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[95px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            4.
          </div>
          <div class="w-[527px] h-[33px] left-[155px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[801px] h-[33px] left-[155px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[573px] h-[33px] left-[109px] top-[12px] absolute text-black text-sm font-normal">
            Place:
          </div>
          <div class="w-[50px] h-[33px] left-[797px] top-[12px] absolute text-black text-sm font-normal">
            Date:
          </div>
          <div class="w-[109px] h-[33px] left-[847px] top-[12px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
            01/02/2003
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Degree Title:
          </div>
        </div>
      </div>
      <div class="w-[1016px] h-[460px] left-[452px] top-[8772px] absolute">
        <div class="w-[1016px] h-[140px] left-0 top-0 absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            1.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[54px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[54px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
        <div class="w-[1016px] h-[140px] left-0 top-[160px] absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            2.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
        <div class="w-[1016px] h-[140px] left-0 top-[320px] absolute">
          <div class="w-[970px] h-[140px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
          <div class="w-[46px] h-[140px] left-0 top-0 absolute text-center text-black text-sm font-normal">
            3.
          </div>
          <div class="w-[850px] h-[33px] left-[106px] top-[11px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[850px] h-[76px] left-[106px] top-[53px] absolute bg-white rounded-[5px]"></div>
          <div class="w-[892px] h-[33px] left-[64px] top-[11px] absolute text-black text-sm font-normal">
            Title:
          </div>
          <div class="w-[892px] h-[33px] left-[64px] top-[53px] absolute text-black text-sm font-normal">
            Body:
          </div>
        </div>
      </div>
      <div class="w-[1016px] h-[188px] left-[446px] top-[8371px] absolute">
        <div class="w-[970px] h-[188px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[188px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          1.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[96px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[42px] h-[33px] left-[64px] top-[96px] absolute text-black text-sm font-normal">
          Body:
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[50px] h-[33px] left-[56px] top-[53px] absolute text-black text-sm font-normal">
          Years:
        </div>
        <div class="w-[50px] h-[33px] left-[903px] top-[53px] absolute text-black text-sm font-normal">
          Current
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          May
        </div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2003
        </div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          June
        </div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2004
        </div>
      </div>
      <div class="w-[1016px] h-[188px] left-[445px] top-[8574px] absolute">
        <div class="w-[970px] h-[188px] left-[46px] top-0 absolute bg-zinc-300 rounded-[10px] border border-black"></div>
        <div class="w-[46px] h-[188px] left-0 top-0 absolute text-center text-black text-sm font-normal">
          2.
        </div>
        <div class="w-[850px] h-[33px] left-[106px] top-[12px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[850px] h-[76px] left-[106px] top-[96px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[892px] h-[33px] left-[64px] top-[12px] absolute text-black text-sm font-normal">
          Title:
        </div>
        <div class="w-[42px] h-[33px] left-[64px] top-[96px] absolute text-black text-sm font-normal">
          Body:
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[50px] h-[33px] left-[56px] top-[53px] absolute text-black text-sm font-normal">
          Years:
        </div>
        <div class="w-[50px] h-[33px] left-[903px] top-[53px] absolute text-black text-sm font-normal">
          Current
        </div>
        <div class="w-[109px] h-[33px] left-[107px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          May
        </div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[232px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2003
        </div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[439px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          June
        </div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute bg-white rounded-[5px]"></div>
        <div class="w-[109px] h-[33px] left-[566px] top-[53px] absolute text-center text-neutral-500 text-sm font-normal tracking-wide">
          2004
        </div>
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
