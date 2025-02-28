import React from "react";

type CloseProps = {
  w?: number | string;
  h?: number | string;
  color?: string;
};

export const Close: React.FC<CloseProps> = ({
  w = 24,
  h = 24,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.0005 19.1118L18.6123 5.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.99952 5.50001L18.6113 19.1118"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
