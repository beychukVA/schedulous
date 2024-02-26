import React from "react";

function WristWatch({ color = "#718096" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_153_7123)">
        <path
          d="M7.99967 12.6668C10.577 12.6668 12.6663 10.5775 12.6663 8.00016C12.6663 5.42283 10.577 3.3335 7.99967 3.3335C5.42235 3.3335 3.33301 5.42283 3.33301 8.00016C3.33301 10.5775 5.42235 12.6668 7.99967 12.6668Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 6V8L9 9"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.0063 11.5665L10.773 14.1198C10.743 14.4523 10.5893 14.7614 10.3425 14.986C10.0956 15.2107 9.77344 15.3345 9.43966 15.3332H6.55299C6.21921 15.3345 5.89707 15.2107 5.6502 14.986C5.40333 14.7614 5.2497 14.4523 5.21966 14.1198L4.98633 11.5665M4.99299 4.43318L5.22633 1.87985C5.25626 1.54857 5.40895 1.24044 5.6544 1.01595C5.89986 0.791462 6.22036 0.666828 6.55299 0.666515H9.453C9.78678 0.665161 10.1089 0.789047 10.3558 1.0137C10.6027 1.23835 10.7563 1.54742 10.7863 1.87985L11.0197 4.43318"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_153_7123">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default WristWatch;
