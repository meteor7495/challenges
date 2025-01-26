import {Task} from "../type";
import {useTaskStore} from "../stores/useTodoStore";
import {Badge, Button, Card, Grid, GridCol, Group, SimpleGrid, Stack, Text} from "@mantine/core";

export function TaskList() {
    const {tasks, toggleComplete, removeTask} = useTaskStore();

    return (
        <Stack gap="md">
            {tasks.map((task: Task) => (
                <Card key={task.id} shadow="sm" padding="lg" radius="md" withBorder>
                    <Grid justify={'end'}>
                        <GridCol span={12}>
                            <Group mb="xs">
                                <Text w={500} size="lg" c={task.completed ? "dimmed" : "dark"}>
                                    {task.title}
                                </Text>
                                <Badge color={task.completed ? "green" : "blue"}>
                                    {task.completed ? "تکمیل شده" : "در حال انجام"}
                                </Badge>
                            </Group>
                            <Text size="sm" c="dimmed" mb="xs">
                                {task.description || "بدون توضیحات"}
                            </Text>
                        </GridCol>
                        <GridCol span={24}>
                            <Group mt="md" w={'100%'} justify={'end'}>
                                <Button
                                    size="md"
                                    variant={task.completed ? "outline" : "filled"}
                                    color={task.completed ? "orange" : "green"}
                                    onClick={() => toggleComplete(task.id)}
                                >
                                    {task.completed ? "لغو تکمیل" : "تکمیل"}
                                </Button>
                                <Button size="md" color="red" variant="outline" onClick={() => removeTask(task.id)}>
                                    حذف
                                </Button>
                            </Group>
                        </GridCol>
                    </Grid>
                </Card>
            ))}
        </Stack>
    );
}
