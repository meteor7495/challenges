import React, { HTMLAttributes, PropsWithChildren } from "react";
import style from "./_iconButton.module.scss";
import clsx from "clsx";
type IconButtonProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    variant: "success" | "error";
  };

const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant,
  ...rest
}) => {
  return (
    <div className={clsx(style.iconButton, style[variant])} {...rest}>
      {children}
    </div>
  );
};

export default IconButton;
