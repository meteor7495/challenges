import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

function List() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        border: "1px solid #DEDEDE",
        borderRadius: 20,
        padding: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          direction: "rtl",
          justifyContent: "space-between",
          paddingInline: 10,
          width: "100%",
          height: 60,
          backgroundColor: "red",
          borderRadius: 16,
          backgroundImage:
            "linear-gradient(to right, #E0EAFC 0%, #CFDEF3  51%, #E0EAFC  100%)",
        }}
      >
        <Checkbox>عنوان تستی</Checkbox>
        <div>
          <Button type="primary" ghost shape="circle" icon={<EditOutlined />} />
          <Button
            type="primary"
            ghost
            danger
            shape="circle"
            icon={<DeleteOutlined />}
            style={{ marginRight: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

export default List;
