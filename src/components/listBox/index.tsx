import Form from "../form";
import List from "../list";

function ListBox() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: 400,
        height: 500,
        borderRadius: 20,
        backgroundColor: "white",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        padding: 17,
        gap: 16,
      }}
    >
      <Form />
      <List />
    </div>
  );
}

export default ListBox;
