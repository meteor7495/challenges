
/* This file creates a context for managing the todo list state. It uses `localStorage` to persist the todos. */


import React, {useState, useEffect, createContext} from "react";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    })
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const addTodo = (title) => {
        setTodos([...todos, {id: todos.length + 1,title, completed: false}]);
    };
    const toggleComplete = (todoId) => {
        const newTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const removeTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    }

    return(
        <TodoContext.Provider value={{todos, addTodo, toggleComplete, removeTodo}}>
            {children}
        </TodoContext.Provider>
    )
}



