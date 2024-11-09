import React from "react";

const CancelIcon = ({ size = 24, color = "none", stroke = "white" }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 25 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.44653 18.6799L12.6895 13L17.9325 18.6799M17.9325 7.32007L12.6885 13L7.44653 7.32007"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CancelIcon;
