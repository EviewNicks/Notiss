import React from "react";

export const SearchIcon = ({ size, color = "none", stroke = "white" }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
    />
  </svg>
);

export default SearchIcon;
