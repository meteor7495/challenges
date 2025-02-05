import { Button } from "@mantine/core";
import { UnstyledButton } from "@mantine/core";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-lg">To-Do List App</h1>
      <Button
        styles={{
          root: { color: "#ddd" },
        }}
        px={40}
        variant="filled"
        color="#5F2EEA"
        radius="lg"
      >
        Add To-Do
      </Button>
    </div>
  );
}
