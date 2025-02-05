import { Button } from "@mantine/core";
import { useModal } from "@contexts/ModalContext";

export default function Header() {
  const { openModal } = useModal();
 
  return (
    <div className="flex sm:justify-between justify-center items-center flex-wrap sm:gap-0 gap-2">
      <h1 className="font-bold text-2xl text-center sm:text-left w-full sm:w-auto">
        To-Do List
      </h1>
      <Button
        styles={{
          root: { color: "#ddd" },
        }}
        px={40}
        variant="filled"
        color="#5F2EEA"
        radius="lg"
        onClick={() => openModal("add")} 
      >
        Add To-Do
      </Button>
    </div>
  );
}
