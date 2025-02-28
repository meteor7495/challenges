import React, { createContext, useContext, useReducer, useEffect } from "react";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: { title: string } }
  | { type: "REMOVE_TODO"; payload: { id: string } }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "SET_TODOS"; payload: Todo[] };

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now().toString(),
          title: action.payload.title,
          completed: false,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
}

const TodoContext = createContext<{
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}>({
  todos: initialState,
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});

const loadInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, dispatch] = useReducer(todoReducer, [], loadInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    dispatch({ type: "ADD_TODO", payload: { title } });
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};
