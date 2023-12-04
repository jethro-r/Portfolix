import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
// for Homepage, image slider

export default function Carousel() {
  return (
    <div className="flex items-center justify-center flex-col space-y-6">
      <div className="flex items-center justify-center w-full ">
        <ChevronLeftIcon className="h-24 w-24" aria-hidden="true"/>
        <div className="w-9/12 h-[42rem] bg-carousel-image bg-center rounded-[1rem] flex flex-col justify-end p-5">
          <div className="text-black text-[15px] font-normal ">
            Black and white template
          </div>
          <div className="text-black text-xl font-normal">
            A simple and minimal design created by @user
          </div>
        </div>
        <ChevronRightIcon className="h-24 w-24" aria-hidden="true"/>
      </div>

      <div className="flex space-x-2 ">
        <div className="w-7 h-7 bg-zinc-300 rounded-full"></div>
        <div className="w-7 h-7 bg-zinc-300 rounded-full"></div>
        <div className="w-7 h-7 bg-zinc-300 rounded-full"></div>
        <div className="w-7 h-7 bg-zinc-300 rounded-full"></div>
      </div>
    </div>
    
  );
}
