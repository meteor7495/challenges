import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { useStyles } from "./style";

interface ListProps {
  dataList: {
    id: string;
    isChecked: boolean;
    title: string;
  }[];
}

function List({ dataList }: ListProps) {
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      {dataList.map((item) => (
        <div key={item.id} className={classes.itemContainer}>
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
