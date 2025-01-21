import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { ActivityForm } from "../listBox/type";

function Form() {
  const { errors } = ActivityForm.useFormState();
  const { handleSubmit, reset } = ActivityForm.useFormContext();

  const submitHandler = () => {
    reset();
  };

  return (
    <Row gutter={16} style={{ width: "100%", height: "min-content" }}>
      <Col flex="none">
        <Button
          color="magenta"
          variant="filled"
          icon={<PlusOutlined />}
          iconPosition="end"
          disabled={!!errors.title}
          onClick={handleSubmit(submitHandler)}
        >
          افزودن
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
        <p
          style={{
            direction: "rtl",
            height: 16,
            margin: 0,
            fontSize: 12,
            marginTop: 2,
            color: "red",
          }}
        >
          {!!errors.title ? errors.title?.message : ""}
        </p>
      </Col>
    </Row>
  );
}

export default Form;
