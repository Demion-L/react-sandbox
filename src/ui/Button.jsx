import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='mx-2 py-1 px-2 text-slate-50 border border-blue-950 rounded cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:scale-105 hover:bg-indigo-500 duration-300'>
      {children}
    </button>
  );
};

export default Button;
