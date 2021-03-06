import React from "react";

export const CloseSVG = ({ ...props }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.353553"
        y1="0.646447"
        x2="9.35355"
        y2="9.64645"
        stroke="black"
      />
      <line
        x1="0.646447"
        y1="9.64645"
        x2="9.64645"
        y2="0.646447"
        stroke="black"
      />
    </svg>
  );
};
