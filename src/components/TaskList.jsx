import { Stack, Text } from "@mantine/core";
import TaskItem from "./TaskItem";
import { useTaskStore } from "../store";

const TaskList = () => {
  const { tasks } = useTaskStore();

  if (tasks.length === 0) {
    return (
      <Text align="center" mt={"xl"}>
        هیچ لیستی وجود ندارد.
      </Text>
    );
  }

  return (
    <Stack spacing="xs" mt="md">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Stack>
  );
};

export default TaskList;
