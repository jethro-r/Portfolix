import React from "react";

// for Homepage, image slider

export default function Carousel() {
  return (
    <div class="flex justify-center">
      <div class="w-9/12 h-[36rem] bg-carousel-image bg-center">
        <div class="text-black text-[15px] font-normal">
          Black and white template
        </div>
        <div class="text-black text-xl font-normal">
          A simple and minimal design created by @user
        </div>
      </div>
      <div class="w-[30px] h-[30px] left-[813px] top-[3176px] absolute bg-zinc-300 rounded-full"></div>
      <div class="w-[30px] h-[30px] left-[813px] top-[3176px] absolute bg-zinc-300 rounded-full"></div>
      <div class="w-[30px] h-[30px] left-[813px] top-[3176px] absolute bg-zinc-300 rounded-full"></div>
      <div class="w-[30px] h-[30px] left-[813px] top-[3176px] absolute bg-zinc-300 rounded-full"></div>
    </div>
  );
}
