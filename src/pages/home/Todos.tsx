import TodoList from "@components/todo/TodoList";
import TodoHeader from "@components/todo/TodoHeader";
import ModalForm from "@components/ui/ModalForm";

export default function Todos() {
  return (
    <div className="bg-gray px-8 sm:px-16 pt-20 my-10 pb-10 rounded-lg w-full sm:w-[1000px] mx-6">
      <div className="flex flex-col gap-12 px-12 bg-white rounded-lg py-12 shadow-lg mx-auto">
        <TodoHeader />
        <TodoList />
      </div>
      <ModalForm />
    </div>
  );
}
