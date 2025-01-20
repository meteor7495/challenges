import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";

function Form() {
  return (
    <Row gutter={16} style={{ width: "100%", height: "min-content" }}>
      <Col flex="none">
        <Button
          color="magenta"
          variant="filled"
          icon={<PlusOutlined />}
          iconPosition="end"
        >
          افزودن
        </Button>
      </Col>
      <Col flex="auto">
        <Input
          placeholder="عنوان فعالیت"
          variant="filled"
          style={{ direction: "rtl" }}
        />
      </Col>
    </Row>
  );
}

export default Form;
