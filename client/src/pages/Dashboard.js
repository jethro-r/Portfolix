import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div className="bg-white">
    <Navbar />

    <div className="relative bg-blue-300 bg-opacity-40 h-[35vh] md:h-[25vh] z-10"> 
      <div className="absolute inset-0 flex items-center justify-center">
       <div className="text-center text-zinc-800 text-4xl md:text-6xl font-normal font-['Russo One']">DASHBOARD</div>
      </div>
    </div>

    <div class="left-[1665px] top-[412px] absolute text-center text-black text-[66px] font-normal font-['Russo One']">NEW +</div>
    
    <div class="w-[1832px] h-[424px] left-[42px] top-[979px] absolute">
        <div class="w-[1828px] h-[424px] left-[4px] top-0 absolute bg-zinc-300 border border-black"></div>
        <img class="w-[672px] h-[424px] left-0 top-0 absolute border border-black" 
        src="http://localhost:3000/images/dashboard-image-1.png" 
        alt=''/>
        <div class="w-[145px] h-[63.01px] left-[1659px] top-[342px] absolute">
            <div class="w-[64.88px] h-[63.01px] left-0 top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[64.88px] h-[63.01px] left-[80.11px] top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[35.69px] h-[35.69px] left-[94.46px] top-[13.10px] absolute">
            </div>
        </div>
        <div class="left-[729px] top-[176px] absolute text-black text-3xl font-normal font-['Russo One']">A simple and minimal design created by @user</div>
        <div class="left-[729px] top-[89px] absolute text-black text-[40px] font-normal font-['Russo One']">Blue and white template</div>
    </div>
    
    <div class="w-[1832px] h-[424px] left-[46px] top-[511px] absolute">
        <div class="w-[1832px] h-[424px] left-0 top-0 absolute bg-zinc-300 border border-black"></div>
        <img class="w-[672px] h-[424px] left-0 top-0 absolute shadow" 
        src="http://localhost:3000/images/dashboard-image-2.png" 
        alt=''/>
        <div class="w-[145px] h-[63.01px] left-[1659px] top-[342px] absolute">
            <div class="w-[64.88px] h-[63.01px] left-0 top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[64.88px] h-[63.01px] left-[80.11px] top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[35.69px] h-[35.69px] left-[94.46px] top-[13.10px] absolute">
            </div>
        </div>
        <div class="left-[725px] top-[176px] absolute text-black text-3xl font-normal font-['Russo One']">A bright and colourful design created by @user</div>
        <div class="w-[483px] left-[725px] top-[95px] absolute text-black text-[40px] font-normal font-['Russo One']">Colourful template</div>
    </div>
    
    <div class="w-[1832px] h-[424px] left-[42px] top-[1447px] absolute">
        <div class="w-[1828px] h-[424px] left-[4px] top-0 absolute bg-zinc-300 border border-black"></div>
        <img class="w-[672px] h-[423px] left-0 top-[1px] absolute" 
        src="http://localhost:3000/images/dashboard-image-3.png" 
        alt=''/>
        <div class="w-[145px] h-[63.01px] left-[1659px] top-[342px] absolute">
            <div class="w-[64.88px] h-[63.01px] left-0 top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[64.88px] h-[63.01px] left-[80.11px] top-0 absolute bg-zinc-300 rounded-full border-4 border-black"></div>
            <div class="w-[35.69px] h-[35.69px] left-[94.46px] top-[13.10px] absolute">
            </div>
        </div>
        <div class="w-[483px] left-[729px] top-[95px] absolute text-black text-[40px] font-normal font-['Russo One']">Complex template</div>
        <div class="left-[729px] top-[176px] absolute text-black text-3xl font-normal font-['Russo One']">A complex design created by @user</div>
    </div>


    
    </div>
  )
}
