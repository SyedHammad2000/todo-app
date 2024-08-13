import React from 'react'
import Todoitem from './Todoitem'

const Todolist = ({ todos, completeTodo, removeTodo}) => {
  return (
    <div>
            {todos.map((todo, index) => (
                <Todoitem 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    completeTodo={completeTodo} 
                    removeTodo={removeTodo} 
                />
            ))}
        

    </div>
  )
}

export default Todolist