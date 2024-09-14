"use client";
import React, { ReactElement, useState } from "react";

export function Login(): ReactElement {
  const [customClass, setCustomClass] = useState(false);

  const handleClick = () => {
    setCustomClass(true);
    setTimeout(() => {
      setCustomClass(false);
    }, 150);
  };
  return (
    <div className="max-w-80 bg-rose-400  border-2 border-black shadow-md ">
      <div className="font-head text-3xl text-center px-4 py-2 my-2 ">
        Login
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="email" className="w-11/12">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="px-4 py-2 w-11/12 font-body  border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs "
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="email" className="w-11/12">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className={`px-4 py-2 w-11/12 font-body  border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs`}
          />
        </div>
        <div className="flex flex-col items-center justify-center py-4">
          <button
            onClick={handleClick}
            className={`px-6 py-2 w-1/2 text-sm font-head bg-primary-400  rounded-full border-2 border-black shadow-md  transition-all ${
              customClass ? "bg-primary-500 scale-95 shadow-xs" : ""
            }`}
          >
            submit
          </button>
          <p className="px-4 py-2 ">
            Don&apos;t have an account? <a href="/">sign-in</a>
          </p>
        </div>
      </form>
    </div>
  );
}
