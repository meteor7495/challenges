import { useEffect, useState } from "react";
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
  >();

  useEffect(() => {
    async function asyncCall() {
      const localDataList: {
        id: string;
        isChecked: boolean;
        title: string;
      }[] = await JSON.parse(localStorage.getItem("localDataList") || "[]");

      setDataList(localDataList);
    }

    asyncCall();
  }, []);

  const stringDataList = JSON.stringify(dataList);

  useEffect(() => {
    if (dataList !== undefined) {
      localStorage.setItem("localDataList", JSON.stringify(dataList));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringDataList]);

  return (
    <div className={classes.listBoxContainer}>
      <Form setDataList={setDataList} />
      <List dataList={dataList} setDataList={setDataList} />
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
