import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { username, email, password, confirmPassword } = formData;
    console.log(formData)

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const url = isSignUp ? "/api/users/register" : "/api/users/login";
      const data = isSignUp ? { name: username, email, password } : { email, password };
      const response = await axios.post(url, data);

      console.log(response.data);
    } catch (error) {
      setError("Something went wrong");
    }
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8 w-full">
      <h2 className="text-2xl font-bold">{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form action="/api/users/register" method="post" className="flex flex-col gap-4 w-1/2 md:w-1/3 lg:w-1/4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-medium">
            Enter Username
          </label>
          <input
            type="text"
            name="username"
            className="border-1 border-gray-400 rounded-md px-2 py-1 outline-none"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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
              value={formData.confirmPassword}
              onChange={handleChange}
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
    </div>
  );
};

export default AuthPage;
