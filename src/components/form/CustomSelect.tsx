import { MenuItem, Select } from "@mui/material";
import { Control, Controller, useFormContext } from "react-hook-form";
import { Field } from "./CustomForm";

interface CustomSelectFieldProps {
  field: Field;
  control: Control;
  onChange?: (value: string | number) => void; 
}

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  field,
  control,
  onChange,
}) => {
  const methods = useFormContext();
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: { onChange: fieldOnChange, ...fieldProps } }) => (
        <Select
          {...fieldProps}
          fullWidth
          size="small"
          error={!!methods.formState.errors[field.name]}
          onChange={(e: any) => {
            fieldOnChange(e.target.value);
            if (onChange) onChange(e.target.value);
          }}
          value={fieldProps.value || []}
        >
          {field.options?.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default CustomSelectField;
