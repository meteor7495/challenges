import MainPage from "./components/pages/mainPage/mainPage";
import { TodoProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TodoProvider>
      <MainPage />
    </TodoProvider>
  );
};

export default App;
