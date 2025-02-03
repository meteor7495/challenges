import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid} from "@mui/material";
import React, { ReactNode, useCallback, useEffect } from "react";
import { Control, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import CustomSelectField from "./CustomSelect";
import CustomTextarea from "./CustomTextarea";
import CustomTextField from "./CustomTextField";

export interface FormData {
  [key: string]: any;
}

interface SelectField {
  options?: { label: string; value: string | number }[];
  multiple?: boolean;
}

interface SwitchField {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Field extends SelectField, SwitchField {
  label?: string;
  name: string;
  type?: string;
  col?: number;
  tab?: string;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  sx?: any;
  isRequiredLogin?: boolean;
}

interface FormProps {
  allowAccess?: boolean;
  fields?: Field[];
  onSubmit: SubmitHandler<FormData>;
  validationSchema?: yup.ObjectSchema<any> | yup.Lazy<any>;
  data?: FormData | null;
  txtButton?: string;
  widthButton?: string;
  children?: ReactNode;
  buttons?: ReactNode;
}

const CustomForm: React.FC<FormProps> = ({
  fields = [],
  validationSchema,
  onSubmit,
  data = {},
  txtButton = "افزودن",
  widthButton = "100%",
  children,
}) => {
  const methods = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

  const renderField = (field: Field, control: Control) => {
    switch (field.type) {
      case "select":
        return (
          <CustomSelectField
            field={field}
            control={control}
            onChange={field.onChange}
          />
        );

      case "textarea":
        return <CustomTextarea field={field} control={control} />;

      default:
        return <CustomTextField field={field} />;
    }
  };
  const setFormValues = useCallback(() => {
    if (data) {
      Object.entries(data).forEach(([name, value]) => {
        methods.setValue(name, value);
      });
    }
  }, [data, methods]);
  useEffect(() => {
    setFormValues();
  }, [setFormValues]);

  const handleFormSubmit: SubmitHandler<FormData> = (data) => {

    const filteredData = Object.keys(data)
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {} as FormData);

    onSubmit(filteredData);
    methods.reset();
    Object.entries(filteredData).forEach(([name, _]) => {
      methods.setValue(name, "");
    });
  };
  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleFormSubmit)}
          autoComplete="off"
        >
          <>
            <Grid
              container
              spacing={1}
              sx={{ alignItems: "flex-end", justifyContent: "space-between" }}
            >
              {fields.map((field, index) => (
                <Grid item xs={field.col || 12} key={index}>
                    {field.label}
                  {renderField(field, methods.control)}
                </Grid>
              ))}
              <Box>{children}</Box>
            </Grid>
          </>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2rem",
              gap: 2,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: widthButton }}
            >
              {txtButton}
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default CustomForm;
