import React from "react";

type ConfirmProps = {
  w?: string | number;
  h?: string | number;
  color?: string;
};

export const Confirm: React.FC<ConfirmProps> = ({
  w = 18,
  h = 14,
  color = "white",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 18 14"
      fill="none"
    >
      <path
        d="M6.00016 11.17L1.83016 6.99997L0.410156 8.40997L6.00016 14L18.0002 1.99997L16.5902 0.589966L6.00016 11.17Z"
        fill={color}
      />
    </svg>
  );
};
