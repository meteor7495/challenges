import { ModalProvider } from "./contexts/ModalContext";
import Todos from "./pages/home/Todos";

function App() {

  return (
    <div className="flex justify-center items-center bg-linear-135 from-primary via-background1 to-background2 w-full min-h-screen">
      <ModalProvider>
        <Todos />
    
      </ModalProvider>
    </div>
  );
}

export default App;
