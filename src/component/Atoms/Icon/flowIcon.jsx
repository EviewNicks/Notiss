import React from "react";

export const FlowIcon = ({
  size = 24,
  color = "none",
  stroke = "currentColor",
  className = "w-4 h-4",
}) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    stroke={stroke}
    className={className}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
    />
  </svg>
);

export default FlowIcon;
