import React from "react";

export function Input({
  type = "text",
  placeholder = "Enter text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs ${className}`}
      {...props}
    />
  );
}
