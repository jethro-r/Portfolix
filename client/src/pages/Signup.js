import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const containerStyles = 'bg-white mx-auto p-4 flex items-center justify-center h-screen';
  const inputStyles = 'w-full p-3 border-b-4 border-navy mb-4 focus:outline-none text-xl';
  const buttonStyles = 'w-full p-3 bg-navy text-white rounded mt-4 text-xl';
  
  return (
    <div className={containerStyles}>
      <div className="flex flex-col items-center justify-center md:justify-start md:flex-row md:space-x-8">
      <img
        className="w-716 h-816"
        style={{ width: '630px', height: '730px' }}
        src="http://localhost:3000/images/Signup-Image.png"
        alt="" />
  
        <div className="md:w-[580px]">
          <div className="mb-12 md:mb-0">
            <img
              className="w-full h-auto"
              src="http://localhost:3000/images/Logo.png"
              alt="" />
          </div>
  
      <form onSubmit={handleSubmit} className="md:w-full">
        
      <div className="flex flex-col items-center ml-auto space-y-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className={inputStyles}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={inputStyles}
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className={inputStyles}
        />
        <input
          type="text"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          placeholder="Email Address"
          className={inputStyles}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={inputStyles}
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className={inputStyles}
        />
      </div>

      <div className="space-y-8">
        <button 
          type="submit" 
          className={buttonStyles}>
        SIGN UP
      </button>
      
      </div>
    </form>
    </div>
    </div>
  </div>
  );
};

export default Signup;
