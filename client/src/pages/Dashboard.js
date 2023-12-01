import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const containerStyles = 'bg-white mx-auto px-4 py-8 '; 
  const rowStyles = 'bg-zinc-300 p-6 my-4 relative flex items-center justify-between shadow-xl border border-black';
  const textContainerStyles = 'flex-1 pl-6';
  const imageContainerStyles = 'flex-1 h-auto max-w-[40%]';
  const buttonStyles = 'absolute bottom-2 right-2 flex space-x-2';
  const newButtonStyles = 'absolute top-1 right-4 text-2xl text-black py-2 px-4';

  return (
    <div className="bg-white">
    <Navbar />

    <div className="relative">
        <div className="bg-blue-300 bg-opacity-40 h-[35vh] md:h-[25vh] z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-zinc-800 text-4xl md:text-6xl font-normal font-['Russo One']">
              DASHBOARD
            </div>
          </div>
        </div>
      </div>
     
      <div className="relative">
        <Link to="/templates" className={newButtonStyles}>NEW+</Link>
      </div>

      <div className={containerStyles}>
      <div className={rowStyles}>
        <div className={imageContainerStyles}>
          <img
            className="w-full h-auto"
            src="http://localhost:3000/images/dashboard-image-1.png"
            alt=""
          />
      <div className={buttonStyles}>
        <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
          <FaEdit className="text-lg md:text-xl lg:text-2xl" />
        </button>
        <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
          <FaTrash className="text-lg md:text-xl lg:text-2xl" />
        </button>
      </div>
        </div>
        <div className={textContainerStyles}>
          <h2 className="text-2xl font-bold mb-2">Colourful template</h2>
          <p className="text-lg">A bright and colourful design created by @user</p>
        </div>
      </div>
    </div>



    <div className={containerStyles}>
      <div className={rowStyles}>
        <div className={imageContainerStyles}>
          <img
            className="w-full h-auto"
            src="http://localhost:3000/images/dashboard-image-2.png"
            alt=""
          />
          <div className={buttonStyles}>
            <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
              <FaEdit className="text-2xl"/>
            </button>
            <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
              <FaTrash className="text-2xl"/>
            </button>
          </div>
        </div>
        <div className={textContainerStyles}>
          <h2 className="text-2xl font-bold mb-2">Blue and white template</h2>
          <p className="text-lg">A simple and minimal design created by @user</p>
        </div>
      </div>
    </div>

    <div className={containerStyles}>
      <div className={rowStyles}>
        <div className={imageContainerStyles}>
          <img
            className="w-full h-auto"
            src="http://localhost:3000/images/dashboard-image-3.png"
            alt=""
          />
          <div className={buttonStyles}>
            <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
              <FaEdit className="text-2xl"/>
            </button>
            <button className="bg-transparent border-2 border-black text-black rounded-full p-3 hover:bg-white-500 hover:text-white">
              <FaTrash className="text-2xl"/>
            </button>
          </div>
        </div>
        <div className={textContainerStyles}>
          <h2 className="text-2xl font-bold mb-2">Complex template</h2>
          <p className="text-lg">A complex design created by @user</p>
        </div>
      </div>
    </div>


    <Footer />
    </div>
  );
};

export default Dashboard;