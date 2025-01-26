import { useTodoContext } from "../context/todoContext";
import EditDialog from "./EditDialog";
import { Box, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
const TodoList = () => {
  const { todos, deleteTodo, editTodo } = useTodoContext();

  return (
    <Box
      mt={2}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
    >
      {todos.length === 0 && <Typography>تسکی وجود ندارد</Typography>}
      {todos.map((todo) => (
        <Box
          key={todo.id}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid black"}
          borderRadius={4}
          p={2}
          width={"90%"}
        >
          <Typography>{todo.task}</Typography>

          <Box className="flex space-x-2">
            <EditDialog
              task={todo.task}
              onSave={(newTask) => editTodo(todo.id, newTask)}
            />
            <IconButton
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Delete />
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TodoList;
