import React, { useState } from "react";

const Form = () => {
  const [isopen, setisOpen] = useState(true);

  const switchForm = () => {
    setisOpen(!isopen);
  };

  return (
    <form className="rounded-lg absolute mx-auto right-0 left-0 w-3/12 p-12 bg-black my-36 text-white bg-opacity-70">
      <h1 className="text-3xl py-4 font-bold">
        {isopen ? "Sign In" : "Sign up"}
      </h1>

      {!isopen && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />
      )}

      <input
        type="email"
        placeholder="Email address or Phone"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
        {isopen ? "Sign In" : "Sign up"}
      </button>
      <h2
        onClick={switchForm}
        className="cursor-pointer hover:text-red-600 text-center"
      >
        {isopen ? "Not a member? Sign up now" : "Already a member? Sign in now"}
      </h2>
    </form>
  );
};

export default Form;
