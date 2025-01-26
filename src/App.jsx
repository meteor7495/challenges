import { Container } from "@mui/material";
import InputForm from "./components/input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ display: "flex", flexDirection: "column", gap: 8 }}
    >
      <InputForm />
      <TodoList />
    </Container>
  );
}

export default App;
