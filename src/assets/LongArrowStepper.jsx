import React from "react";

export const LongArrowStepper = ({ ...props }) => {

  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 314 52" 
      width="314" 
      height="32"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M299.966 1H1L14.0339 26L1 51H299.966L313 26L299.966 1Z"
        fill="#F5F5F5"
        stroke="#E3E3E3"

      />
    </svg>
  );
};
