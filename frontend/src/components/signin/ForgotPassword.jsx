import React from "react";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-6 w-full">
      <h2 className="text-2xl font-bold">Forgot Password</h2>
      <span className="w-1/3 text-center">
        Enter your email address and we’ll send you an OTP to reset your
        password
      </span>
      <form className="flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Email"
            required
          />
        </div>
        <NavLink to="/reset-password" className="w-full flex justify-center">
          <button
            type="submit"
            className="w-full bg-primary rounded-md py-2 text-white font-semibold"
          >
            Forgot Password
          </button>
        </NavLink>
      </form>
      <span>
        Back to{" "}
        <a href="/signin" className="text-primary font-semibold cursor-pointer">
          Sign In
        </a>
      </span>
    </div>
  );
}

export default ForgotPassword;
