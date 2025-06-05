import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: " ",
    password: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <div className="register-wrapper flex justify-center items-center h-screen">
      <div className="contents-wrapper shadow-lg px-8 py-5 border w-[50%]">
        <h2 className="title text-lg font-bold mb-4">Register</h2>
        <form className="register-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username..."
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email..."
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password..."
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="profile_image">Profile Image</label>
            <input type="file" name="profile_image" />
          </div>
          <button className="w-full bg-green-600 text-white py-2">
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account?</span>
          <Link to="/login" className="text-blue-500">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
