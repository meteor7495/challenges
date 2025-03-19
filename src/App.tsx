import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "1200px",
      }}
    >
      <Title />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
