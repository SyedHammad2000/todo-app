import React, { useState } from 'react'
import Todoform from './component/Todoform'
import Todolist from './component/Todolist'
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

  return (
    <div>
      <h1>Todo List</h1>
      <Todoform addTodo={addTodo}/>
      <Todolist todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>

  )
}

export default App