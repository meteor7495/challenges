import { ListBox } from "./components/listBox";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAACA8",
        backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
        height: "100vh",
      }}
    >
      <h1 style={{ position: "fixed", top: 10, left: 50, color: "#6c5353" }}>
        Lina&apos;s To Do List
      </h1>
      <ListBox />
    </div>
  );
}

export default App;
