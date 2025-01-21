import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { v4 as uuidv4 } from "uuid";
import { ActivityForm } from "../listBox/type";
import { useStyles } from "./style";

interface FormProps {
  setDataList: React.Dispatch<
    React.SetStateAction<
      | {
          id: string;
          isChecked: boolean;
          title: string;
        }[]
      | undefined
    >
  >;
}

function Form({ setDataList }: FormProps) {
  const classes = useStyles();

  const { errors } = ActivityForm.useFormState();
  const { handleSubmit, reset, getValues } = ActivityForm.useFormContext();
  const { isEditMode } = ActivityForm.useWatch();

  const submitHandler = () => {
    const { title, editId } = getValues();

    if (isEditMode) {
      setDataList((prev) =>
        prev?.map((item) =>
          item.id === editId
            ? {
                ...item,
                title: title,
              }
            : item,
        ),
      );
    } else {
      setDataList((prev) => [
        ...(prev || []),
        { id: uuidv4(), isChecked: false, title: title },
      ]);
    }

    reset();
  };

  return (
    <Row gutter={16} style={{ width: "100%", height: "min-content" }}>
      <Col flex="none">
        <Button
          color="magenta"
          variant="filled"
          icon={isEditMode ? <SaveOutlined /> : <PlusOutlined />}
          iconPosition="end"
          disabled={!!errors.title}
          onClick={handleSubmit(submitHandler)}
        >
          {isEditMode ? "ذخیره" : "افزودن"}
        </Button>
      </Col>
      <Col flex="auto">
        <ActivityForm.Controller
          name="title"
          rules={{
            required: {
              value: true,
              message: "فیلد الزامیست.",
            },
            validate(value) {
              // Regex to match Persian characters
              const persianRegex = /^[\u0600-\u06FF0-9\s]+$/;
              if (!persianRegex.test(value)) {
                return "لطفا زبان کیبورد را به فارسی تغییر دهید.";
              }
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="عنوان فعالیت"
              variant="filled"
              status={errors.title ? "error" : undefined}
              style={{ direction: "rtl" }}
            />
          )}
        />
        <p className={classes.errorLabel}>
          {!!errors.title ? errors.title?.message : ""}
        </p>
      </Col>
    </Row>
  );
}

export default Form;
