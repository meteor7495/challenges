import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Spin } from "antd";
import { useState } from "react";
import { ActivityForm } from "../listBox/type";
import { useStyles } from "./style";

interface ListProps {
  dataList?: {
    id: string;
    isChecked: boolean;
    title: string;
  }[];
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

function List({ dataList, setDataList }: ListProps) {
  const classes = useStyles();

  const { setValue, setFocus } = ActivityForm.useFormContext();

  const [deleteModalInfo, setDeleteModalInfo] = useState<{
    isOpen: boolean;
    id?: string;
    title?: string;
  }>();

  const listEditHandler = (type: "check" | "delete", id: string) => {
    if (type === "check") {
      setDataList((prev) =>
        prev?.map((prevItem) =>
          prevItem.id === id
            ? {
                ...prevItem,
                isChecked: !prevItem.isChecked,
              }
            : prevItem,
        ),
      );
    } else if (type === "delete") {
      setDataList((prev) => prev?.filter((prevItem) => prevItem.id !== id));
      setDeleteModalInfo({
        isOpen: false,
        id: undefined,
        title: undefined,
      });
    }
  };

  return (
    <div className={classes.listContainer}>
      {dataList === undefined && <Spin style={{ top: "calc(50% - 20px)" }} />}
      {dataList?.map((item) => (
        <div key={item.id} className={classes.itemContainer}>
          <Checkbox
            checked={item.isChecked}
            onClick={() => listEditHandler("check", item.id)}
          >
            {item.title}
          </Checkbox>
          <div>
            <Button
              type="primary"
              ghost
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                setValue("editId", item.id);
                setValue("isEditMode", true);
                setValue("title", item.title);
                setFocus("title");
              }}
            />
            <Button
              type="primary"
              ghost
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              style={{ marginRight: 10 }}
              onClick={() =>
                setDeleteModalInfo({
                  id: item.id,
                  isOpen: true,
                  title: item.title,
                })
              }
            />
          </div>
        </div>
      ))}
      <Modal
        title={`آیا مطمئنید آیتم "${deleteModalInfo?.title}" حذف شود؟`}
        centered
        style={{ direction: "rtl" }}
        width={370}
        open={deleteModalInfo?.isOpen}
        onOk={() => {
          listEditHandler("delete", deleteModalInfo?.id || "");
        }}
        okText="حذف"
        okButtonProps={{ danger: true }}
        onCancel={() => {
          setDeleteModalInfo({
            isOpen: false,
            id: undefined,
            title: undefined,
          });
        }}
        cancelText="انصراف"
      ></Modal>
    </div>
  );
}

export default List;
