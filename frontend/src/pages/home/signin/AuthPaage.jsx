import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8 w-full">
      <h2 className='text-2xl font-bold'>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form className='flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/4'>
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='font-medium'>Enter Username</label>
            <input type="text" name="username" className='border-1 border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter Username' required />
        </div>
        {isSignUp && (
          <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-medium'>Enter Email</label>
          <input type="email" name="email" className='border-1 border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter Email' required />
      </div>
        )}
        <div className='flex flex-col gap-2'>
            <label htmlFor="" className='font-medium'>Enter Password</label>
            <input type="password" name="password" className='border-1 border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter Password' required />
        </div>
        {isSignUp && (
          <div className='flex flex-col gap-2'>
          <label htmlFor="" className='font-medium'>Confirm Password</label>
          <input type="password" name="password" className='border-1 border-gray-400 rounded-md px-2 py-1 outline-none' placeholder='Enter Password' required />
      </div>
        )}
        {!isSignUp && (<a href="/forgot-password" className='font-medium text-sm text-primary'>Forgot Password?</a>)}
        <button type="submit" className='bg-primary rounded-md py-2 text-white font-semibold'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <button type="submit" className='bg-white rounded-md py-2 flex justify-center items-center gap-4 border-1 border-gray-400'><FcGoogle />{isSignUp ? 'Sign Up with Google' : 'Sign In with Google'}</button>
      </form>
      <span>
        {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
      <a onClick={handleToggle} className='text-primary font-semibold cursor-pointer'>
        {isSignUp ? 'Sign In' : "Sign Up"}
      </a>
      </span>
    </div>
  );
};

export default AuthPage;
