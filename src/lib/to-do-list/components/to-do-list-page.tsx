'use client'

import {Container, Title, Stack, ScrollArea} from '@mantine/core';
import {TaskList, TaskForm} from "./";

export const TodoListPage = () => {
    return (
        <ScrollArea h={'100%'} pb={'sm'} scrollbars="y">
            <Container size="sm" style={{marginTop: '2rem'}}>
                <Title order={2} mb="lg">
                    لیست وظایف
                </Title>
                <Stack gap="lg">
                    <TaskForm/>
                    <TaskList/>
                </Stack>
            </Container>
        </ScrollArea>
    );
}
