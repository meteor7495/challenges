import React from "react";
import TodoListHolder from "../components/todo/TodoListHolder";
import TaskList from "../components/todo/TodoList";
import Header from "../components/todo/Header";

export default function TodoList() {
  return (
    <TodoListHolder>
      <div className="flex flex-col w-[500px] gap-4 px-4 bg-white rounded-lg py-12">
        <Header />
        <TaskList />
      </div>
    </TodoListHolder>
  );
}
