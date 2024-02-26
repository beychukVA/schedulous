import React from "react";
import colors from "~/utils/colors";

export default function LeftChevron({ color = colors.primary }) {
  return (
    <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m10 12.5-4-4 4-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
