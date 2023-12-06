import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupClick = () => {
    navigate('/Signup');
  };

  const handleLogin = () => {
    const validUsername = 'exampleUser';
    const validPassword = 'examplePassword';

    if (username === validUsername && password === validPassword) {
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const containerStyles = 'bg-white mx-auto p-4 flex items-center justify-center h-screen';
  const inputStyles = 'w-full p-3 border-b-4 border-navy mb-4 focus:outline-none text-xl';
  const buttonStyles1 = 'w-full p-3 bg-navy text-white rounded mt-4 text-xl';
  const buttonStyles2 = 'w-full p-3 bg-white text-black rounded mt-4 text-xl';

  return (
  <div className={containerStyles}>

    <div className="flex flex-col items-center justify-center md:justify-start md:flex-row md:space-x-8">
      <img
        className="w-716 h-816"
        style={{ width: '630px', height: '730px' }}
        src="http://localhost:3000/images/Signup-Image.png"
        alt="" 
        />
    
      <div className="md:w-[580px]">
        <div className="mb-12 md:mb-20">
          <img
            className="w-full h-auto"
            src="http://localhost:3000/images/Logo.png"
            alt="" 
            />
        </div>

        <div className="md:mb-20 flex flex-col items-center ml-auto space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputStyles} 
            />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyles} 
            />
        </div>

        <div className="space-y-8">
          <button
            type="submit"
            className={buttonStyles1}
            onClick={handleLogin}>
            LOGIN
          </button>
        </div>

        <div className="space-y-8 md:mb-10">
          <button
            type="submit"
            className={buttonStyles2}
            onClick={handleSignupClick}>
            Don't have an account? Click here.
          </button>
        </div>
        </div>
      </div>
      </div>
  );
}
