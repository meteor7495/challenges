import { useState } from "react";
import Form from "../form";
import List from "../list";
import { useStyles } from "./style";
import { ActivityForm } from "./type";

function ListBox() {
  const classes = useStyles();

  const [dataList, setDataList] = useState<
    {
      id: string;
      isChecked: boolean;
      title: string;
    }[]
  >([]);

  return (
    <div className={classes.listBoxContainer}>
      <Form setDataList={setDataList} />
      <List dataList={dataList} />
    </div>
  );
}

const Provider = () => {
  return (
    <ActivityForm.Provider mode="onChange">
      <ListBox />
    </ActivityForm.Provider>
  );
};

export { Provider as ListBox };
