import { Button, Checkbox, Group, Card } from "@mantine/core";
import { useTaskStore } from "../store";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <Card shadow="xs" padding="sm" withBorder>
      <Group position="apart">
        <Checkbox
          label={task.title}
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          styles={{
            label: { textDecoration: task.completed ? "line-through" : "none" },
          }}
        />
        <Button color="red" size="xs" onClick={() => deleteTask(task.id)}>
          حذف
        </Button>
      </Group>
    </Card>
  );
};

export default TaskItem;
