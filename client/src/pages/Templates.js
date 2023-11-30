import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Templates() {
  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative bg-blue-300 bg-opacity-40 h-[35vh] md:h-[25vh]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-zinc-800 text-4xl md:text-6xl font-normal font-['Russo One']">TEMPLATES</div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-9 py-8">
        <div className="flex flex-col items-center">
          <div className="relative overflow-hidden mt-8 md:mt-16">
            <img className="w-full md:w-auto h-auto border border-black" src="http://localhost:3000/images/templates-page-image-1.png" alt='' />
            <div className="absolute bottom-12 left-4 text-lg md:text-xl">Colourful template</div>
            <div className="absolute bottom-4 left-4 text-sm md:text-base">A bright and colourful design created by @user</div>
          </div>
          <div className="mt-4">
            <div className="bg-zinc-300 text-black px-4 py-2 rounded-[50px]">USE TEMPLATE</div>
          </div>


          <div className="relative overflow-hidden mt-8 md:mt-16">
            <img className="w-full md:w-auto h-auto border border-black" src="http://localhost:3000/images/templates-page-image-2.png" alt='' />
            <div className="absolute bottom-12 left-4 text-lg md:text-xl">Blue and white template</div>
            <div className="absolute bottom-4 left-4 text-sm md:text-base">A simple and minimal design created by @user</div>
            </div>
            <div className="mt-4">
            <div className="bg-zinc-300 text-black px-4 py-2 rounded-[50px]">USE TEMPLATE</div>
          </div>
          

          <div className="relative overflow-hidden mt-8 md:mt-16">
            <img className="w-full md:w-auto h-auto border border-black" src="http://localhost:3000/images/templates-page-image-3.png" alt='' />
            <div className="absolute bottom-12 left-4 text-lg md:text-xl">Complex template</div>
            <div className="absolute bottom-4 left-4 text-sm md:text-base">A complex design created by @user</div>
            </div>
            <div className="mt-4">
            <div className="bg-zinc-300 text-black px-4 py-2 rounded-[50px]">USE TEMPLATE</div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}
