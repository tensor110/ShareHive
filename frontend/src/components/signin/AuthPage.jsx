import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../../utils/toast";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [signinData, setSigninData] = useState({
    username: "",
    password: "",
  })
  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };
  const handleSignupChange = (e) =>{
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  }
  const handleSigninChange = (e) =>{
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  }
  console.log(signupData)

  const handleSignup = async (e) =>{
    e.preventDefault();
    const { username, email, password, confirmPassword } = signupData
    if(!username || !email || !password || !confirmPassword){
      return handleError("Username, Email ,Password required")
    }
    if (password !== confirmPassword) {
      return handleError("Passwords do not match");
    }
    try {
      const url = `http://localhost:5000/api/users/register`;
      const { confirmPassword, ...dataToSend } = signupData;
      const response = await fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
          handleSuccess(message);
          setTimeout(() => {
              navigate('/signin')
          }, 1000)
      } else if (error) {
          const details = error?.details[0].message;
          handleError(details);
      } else if (!success) {
          handleError(message);
      }
      console.log(result);
  } catch (err) {
      handleError(err);
  }
  }
  const handleSignin = async (e) =>{
    e.preventDefault();
    const { username, password } = signinData;
    if (!username || !password) {
      return handleError("Username, Password required");
    }
    try {
      const url = `http://localhost:5000/api/users/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinData),
      });
      const result = await response.json();
      const { success, message, jwtToken, username, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', username)
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8 w-full">
      <h2 className="text-2xl font-bold">{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form action="" className="flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/4" onSubmit={isSignUp ? handleSignup : handleSignin}>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Username
          </label>
          <input
            type="text"
            name="username"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Username"
            value = {isSignUp ? signupData.username : signinData.username}
            onChange={isSignUp ? handleSignupChange : handleSigninChange}
            required
          />
        </div>
        {isSignUp && (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium">
              Enter Email
            </label>
            <input
              type="email"
              name="email"
              className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
              placeholder="Enter Email"
              value={signupData.email}
              onChange={isSignUp ? handleSignupChange : handleSigninChange}
              required
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Password"
            value = {isSignUp ? signupData.password : signinData.password}
            onChange={isSignUp ? handleSignupChange : handleSigninChange}
            required
          />
        </div>
        {isSignUp && (
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
              placeholder="Enter Password"
              value={signupData.confirmPassword}
              onChange={isSignUp ? handleSignupChange : handleSigninChange}
              required
            />
          </div>
        )}
        {!isSignUp && (
          <a
            href="/forgot-password"
            className="font-medium text-sm text-primary"
          >
            Forgot Password?
          </a>
        )}
        <button
          type="submit"
          className="bg-primary rounded-md py-2 text-white font-semibold"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button
          type="button"
          className="bg-white rounded-md py-2 flex justify-center items-center gap-4 border-1 border-gray-400"
        >
          <FcGoogle />
          {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
        </button>
      </form>
      <span>
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
        <a
          onClick={handleToggle}
          className="text-primary font-semibold cursor-pointer"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </a>
      </span>
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
