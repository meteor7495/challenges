import { FormHelperText, TextField } from "@mui/material";
import React from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Field } from "./CustomForm";

interface CustomTextFieldProps {
  field: Field;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ field }) => {
  const methods = useFormContext();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (
      field.type === "number" &&
      (event.key === "e" || event.key === "E" || event.key === ".")
    ) {
      event.preventDefault();
    }
  };

  return (
    <>
      <TextField
        sx={{width: "100%", ...field.sx }}
        onKeyDown={handleKeyDown}
        fullWidth
        type={field.type}
        variant="outlined"
        {...methods.register(field.name as keyof FieldValues, {
          valueAsNumber: field.type === "number",
        })}
        placeholder={field.placeholder || "این فیلد را پر نمایید"}
        error={!!methods.formState.errors[field.name]}      />
      {methods.formState.errors[field.name] && (
        <FormHelperText sx={{ textAlign: "right", direction: "rtl", color: "red" }}>
          {String(methods.formState.errors[field.name]?.message)}
        </FormHelperText>
      )}
    </>
  );
};

export default CustomTextField;
