import React from "react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="bg-white">
      <Navbar />

      <div class="w-full mx-auto space-y-12">
        <section>
          <div class="flex justify-center w-full h-[calc(35vh-7rem)] sm:h-[calc(45vh-7rem)] md:h-[calc(60vh-7rem)] mdlg:h-[calc(75vh-7rem)] xl:h-[calc(100vh-7rem)] overflow-clip">
            <img
              class="scale-125 w-full h-full object-cover z-10"
              src="http://localhost:3000/images/homepage-hero.png"
              alt=""
            />
          </div>
          <div class="w-full mx-auto bg-white border-2 border-black"></div>
        </section>

        <div class="w-full text-center text-black py-12 text-5xl font-extrabold">
          Your portfolio, your style!
        </div>

        <section class="w-full flex justify-center ">
          <div class="flex flex-col xl:flex-row xl:items-center object-center w-11/12  bg-cyan-900">
            <img
              class="aspect-auto self-center mt-5 sm:mt-12 w-[35rem] xl:my-12 xl:ml-24"
              src="http://localhost:3000/images/homepage-image.png"
              alt=""
            />

            <div class="h-full flex items-center justify-center text-2xl text-white xl:text-[30px]  px-12 md:px-24 p-6 font-normal">
              Stand out in a competitive world. Create your portfolio with us
              and let your work speak volumes, attracting the right attention
              and opening doors to endless opportunities.
            </div>
          </div>
        </section>
        <div class="w-full text-center text-black text-3xl font-normal">
          Browse through templates
        </div>
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
