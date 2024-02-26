import React from "react";

function Plus({ color = "#96A3BE" }) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_349_4480)">
        <path
          d="M7.99967 1.83334L10.0597 6.00668L14.6663 6.68001L11.333 9.92668L12.1197 14.5133L7.99967 12.3467L3.87967 14.5133L4.66634 9.92668L1.33301 6.68001L5.93967 6.00668L7.99967 1.83334Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_349_4480">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Plus;
