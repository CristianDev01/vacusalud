/* eslint-disable react/display-name */
import React, { useState } from "react";

const InputPassword = React.forwardRef((props, ref) => {

  const [mostrarPassword, setMostrarPassword] = useState(false);

  const passwordVisible = () => {
    setMostrarPassword(!mostrarPassword);
  };

  return(

    <div className="relative w-full">

      <input
        ref={ref}
        {...props}
        type={mostrarPassword ? "text" : "password"}

        className="h-[32px] px-2 w-full text-neutral-900/75 placeholder:text-neutral-900/75 text-[11px] rounded-sm outline-none previo-sm:h-[42px] previo-sm:text-[14px] previo-sm:px-3 ring-1 ring-neutral-300 focus:ring-cyan-800 valid:ring-cyan-500 valid:focus:ring-cyan-500"
      />
      
      <button
        type="button"
        onClick={passwordVisible}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-neutral-900/65 outline-none"
      >
        {mostrarPassword ? (
          <svg xmlns="http://www.w3.org/2000/svg" 
            width={24} height={24} viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            strokeWidth={2} strokeLinecap="round" 
            strokeLinejoin="round" 
            className="size-[21px]">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>

        ) : (

          <svg xmlns="http://www.w3.org/2000/svg" 
            width={24} height={24} viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" 
            strokeWidth={2} strokeLinecap="round" 
            strokeLinejoin="round" 
            className="size-[21px]">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
            <path d="M3 3l18 18" />
          </svg>
        )}
      </button>

    </div>

  );
});

export default InputPassword;

