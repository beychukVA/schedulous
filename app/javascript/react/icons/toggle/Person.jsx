import React from "react";

export default function Person({
  color = "#936DFF",
  width = "24",
  height = "24",
  vWidth = "24",
  vHeight = "24",
  strokeWidth = "2",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${vWidth} ${vHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21v-2a3.9996 3.9996 0 0 0-1.1716-2.8284A3.9996 3.9996 0 0 0 16 15H8a3.9998 3.9998 0 0 0-4 4v2M12 11c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
