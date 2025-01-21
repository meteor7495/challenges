import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

interface ListProps {
  dataList: {
    id: string;
    isChecked: boolean;
    title: string;
  }[];
}

function List({ dataList }: ListProps) {
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
      {dataList.map((item) => (
        <div
          key={item.id}
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
          <Checkbox checked={item.isChecked}>{item.title}</Checkbox>
          <div>
            <Button
              type="primary"
              ghost
              shape="circle"
              icon={<EditOutlined />}
            />
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
      ))}
    </div>
  );
}

export default List;
