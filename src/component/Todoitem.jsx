import React from 'react'
import "./Todoitem.css"
const Todoitem = ({todo,removeTodo,index}) => {
  return (
    <div>

         <div className='item'
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
            >
            {todo.text}
            <div>
                {/* <button onClick={() => completeTodo(index)}>Complete</button> */}
                <button onClick={() => removeTodo(index)} >Remove</button>
            </div>
        </div>
            </div>

  )
}

export default Todoitem