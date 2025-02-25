import { Card, Text, Container, Grid, Group, ActionIcon } from "@mantine/core";
import classes from "./index.module.css";
import { IconSquare, IconSquareCheck, IconTrash } from "@tabler/icons-react";
import useTodosStore from "../../store/todosStore";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo } = useTodosStore();

  const handleCompleteTodo = ({ id }) => toggleTodo(id);
  const handleRemoveTodo = ({ id }) => removeTodo(id);

  return (
    <Container my="md" className={classes.list_wrapper}>
      <Grid>
        {todos.map((todo) => (
          <Grid.Col key={todo.id} span={{ base: 12, xs: 4 }}>
            <Card withBorder radius="md" padding="lg" className={classes.card}>
              <Text fz="md" className={classes.title}>
                {todo.title}
              </Text>
              <Group justify="space-between" mt="md">
                <ActionIcon
                  onClick={() => handleCompleteTodo(todo)}
                  variant="default"
                  size="lg"
                  radius="md"
                >
                  {todo.isCompleted ? (
                    <IconSquareCheck size={18} />
                  ) : (
                    <IconSquare size={18} />
                  )}
                </ActionIcon>
                <ActionIcon
                  onClick={() => handleRemoveTodo(todo)}
                  variant="default"
                  size="lg"
                  radius="md"
                >
                  <IconTrash size={18} className={classes.trash_icon} />
                </ActionIcon>
              </Group>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
