import React from "react";
import {TodoProvider} from "./TodoContext";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import Header from "./Component/Header";


const App = () => {
    return(
        <TodoProvider>
                <Header/>
                <TodoForm/>
                <TodoList/>
        </TodoProvider>
    )
}

export default App;
