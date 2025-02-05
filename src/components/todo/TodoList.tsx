import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Todo } from "types/types";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todolist.todolist);
  return (
    <div className="flex flex-col">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
