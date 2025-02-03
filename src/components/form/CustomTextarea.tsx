import { TextareaAutosize, styled } from "@mui/material";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { Field } from "./CustomForm";

interface CustomTextareaFieldProps {
  field: Field;
  control: Control;
}

const CustomTextarea: FC<CustomTextareaFieldProps> = ({ field, control }) => {
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    &:focus {
      box-shadow: 0 0 0 1.5px ${theme.palette.primary.main};
    }
    &:focus-visible {
      outline: 0;
    }
  `
  );

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field }) => (
        <StyledTextarea
          placeholder="متن خود را وارد کنید"
          style={{
            color: "#000",
            fontSize: "16px",
            borderRadius: "10px",
            background: "transparent",
            maxWidth: "100%",
            minWidth: "100%",
            minHeight: 90,
            fontFamily: "inherit",
            borderColor: "#C4C4C4",
          }}
          {...field}
        />
      )}
    />
  );
};

export default CustomTextarea;
