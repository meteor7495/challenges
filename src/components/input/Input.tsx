import React, { ComponentPropsWithRef, forwardRef, memo } from "react";
import { clsx } from "clsx";

import "./_input.scss";

type InputProps = ComponentPropsWithRef<"input"> & {
  Icon?: React.ReactNode;
  className?: string;
  label?: string;
  error?: { message?: string };
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(
    ({ Icon, label, className, error, ...rest }, ref) => {
      const labelClass = clsx("label", { "error-label": error });
      const inputClass = clsx("input", className, {
        "error-border": error,
      });
      const errorMessage = error?.message;

      return (
        <div id="input">
          <div className={labelClass}>{label}</div>
          <input ref={ref} type="text" className={inputClass} {...rest} />
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
      );
    },
  ),
);

Input.displayName = "Input";
