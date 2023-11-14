import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="bg-white">
      <Navbar />
      <div class="w-full mx-auto">
        <div class="flex justify-center w-full h-[calc(35vh-7rem)] sm:h-[calc(45vh-7rem)] md:h-[calc(60vh-7rem)] mdlg:h-[calc(75vh-7rem)] xl:h-[calc(100vh-7rem)] overflow-clip">
          <img
            class="scale-125 w-full h-full object-cover z-10"
            src="http://localhost:3000/images/homepage-hero.png"
            alt=""
          />
        </div>
        <div class="w-full mx-auto bg-white border-2 border-black"></div>
        <div class="w-[1600px] h-[615px] left-[101px] top-[1475px] absolute bg-cyan-900 border border-black"></div>
        <Carousel />
        <div class="w-full mx-auto h-[248px] left-0 top-[3242px] absolute"></div>
        <div class="w-[1700px] h-40 left-[20px] top-[3286px] absolute bg-cyan-900"></div>
        <div class="w-[700px] left-[1000px] top-[1548px] absolute text-white text-[30px] font-normal font-['Russo One']">
          Stand out in a competitive world. Create your portfolio with us and
          let your work speak volumes, attracting the right attention and
          opening doors to endless opportunities.
        </div>
        <img
          class="w-[131px] h-[667px] left-[1600px] top-[2446px] absolute"
          src="https://via.placeholder.com/131x667"
          alt=""
        />
        <div class="w-[1317px] left-[301px] top-[1242px] absolute text-center text-black text-[30px] font-normal font-['Russo One']">
          Your portfolio, your style!
        </div>
        <div class="w-[1379px] left-[270px] top-[2264px] absolute text-center text-black text-[30px] font-normal font-['Russo One']">
          Browse through teamplates
        </div>
        <img
          class="w-[1207px] h-[668px] left-[300px] top-[2449px] absolute border"
          src="https://via.placeholder.com/1207x668"
          alt=""
        />
        <div class="w-[483px] left-[400px] top-[3002px] absolute text-black text-[15px] font-normal font-['Russo One']">
          Black and white template
        </div>
        <div class="left-[400px] top-[3060px] absolute text-black text-xl font-normal font-['Russo One']">
          A simple and minimal design created by @user
        </div>
        <img
          class="w-[771px] h-[771px] left-[153px] top-[1396px] absolute"
          src="https://via.placeholder.com/771x771"
          alt=""
        />
      </div>
    </div>
  );
}
