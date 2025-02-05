import { Checkbox } from "@mantine/core";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useModal } from "@contexts/ModalContext";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "@redux/todoSlice";
import { Todo } from "types/types";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap sm:justify-between items-center p-3 gap-4 border-b border-gray-300 h-full hover:bg-[#DED3FF] cursor-pointer">
        <div className="flex items-center gap-4 w-full sm:w-[60%]">
          <Checkbox
            color="#5F2EEA"
            radius="xl"
            size="sm"
            checked={todo.checked}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <p className="text-sm text-gray-700 max-w-[70%] break-all">
            {todo.title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <PencilIcon
            onClick={() => openModal("edit", todo)}
            className="cursor-pointer size-[35%]"
            color="#5F2EEA"
          />
          <Trash2Icon
            className="cursor-pointer size-[35%]"
            color="#FF3B5C"
            onClick={() => dispatch(removeTodo(todo.id))}
          />
        </div>
      </div>
    </div>
  );
}
