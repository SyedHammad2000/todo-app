import React, { useState } from 'react'
import "./Todoform.css"


const Todoform = ({addTodo}) => {
    const [input,setinput]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(input)
        addTodo(input)
        setinput('')

    }

  return (
    <div>
        <form onSubmit={handlesubmit} className='form'>
            <input type="text"  value={input} placeholder='Enter Todo' onChange={(e)=>setinput(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form> 
    </div>
  )
}

export default Todoform