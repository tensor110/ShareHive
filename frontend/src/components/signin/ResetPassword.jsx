import React from "react";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8 w-full">
      <h2 className="text-2xl font-bold">Reset Password</h2>
      <span className="w-1/3 text-center">
        We sent you an OTP to your given email address
      </span>
      <form className="flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Username
          </label>
          <input
            type="text"
            name="username"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Username"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="password"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Password"
            required
          />
        </div>
        <NavLink to="/signin" className="w-full flex justify-center">
          <button
            type="submit"
            className="w-full bg-primary rounded-md py-2 text-white font-semibold"
          >
            Reset Password
          </button>
        </NavLink>{" "}
      </form>
    </div>
  );
}

export default ResetPassword;
