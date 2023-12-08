import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSignupClick = () => {
    navigate('/register');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Login successful');
        navigate('/');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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
          <form onSubmit={handleLogin}>
            <div className="md:mb-20 flex flex-col items-center ml-auto space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className={inputStyles}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={inputStyles}
              />
            </div>
            <div className="space-y-8">
              <button
                type="submit"
                className={buttonStyles1}
              >
                LOGIN
              </button>
            </div>
          </form>
          <div className="space-y-8 md:mb-10">
            <button
              type="submit"
              className={buttonStyles2}
              onClick={handleSignupClick}
            >
              Don't have an account? Click here.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}