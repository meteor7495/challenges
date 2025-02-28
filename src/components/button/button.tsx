import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import style from "./_button.module.scss";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className={style.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
