import React from "react";

export default function Check({
  color = "#fff",
  width = "10",
  height = "10",
  strokeWidth = "1.5",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 4.5L5.99999 11.8333L2.66666 8.5"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
