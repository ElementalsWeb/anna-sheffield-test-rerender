import React from "react";

export const DropAHint = ({ ...props }) => {
  return (
    <svg
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.316 1L20.25 9.25L0.749998 9.25L10.316 1Z"
        stroke="black"
        strokeWidth="0.8" 
        strokeLinejoin="round"
      />
      <path
        d="M10.684 17.5L0.75 9.25L20.25 9.25L10.684 17.5Z"
        stroke="black"
        strokeWidth="0.8" 
        strokeLinejoin="round"
      />
      <path
        d="M0.75 9.25V19C0.75 20.6569 2.09315 22 3.75 22H17.25C18.9069 22 20.25 20.6569 20.25 19V9.25"
        stroke="black"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M1.5 21.25L7.5 15.25"
        stroke="black"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M19.5 21.25L13.5 15.25"
        stroke="black"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M10.5 14.5C15.175 10.8201 14.9991 9.51962 14.9991 8.5C14.9991 7.48037 14.1556 6.25 12.7496 6.25C11.3436 6.25 10.5 7.75 10.5 7.75C10.5 7.75 9.65641 6.25 8.25043 6.25C6.84445 6.25 6.00086 7.48037 6.00086 8.5C6.00086 9.51962 5.82502 10.8205 10.5 14.5Z"
        fill="black"
      />
    </svg>
  );
};
