import React from 'react'
import { useState } from 'react'
const NewTodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    {id: 'todo-1', title: 'todo 1', isComplited:false},
    {id: 'todo-2', title: 'todo 2', isComplited:true},
  ])

  const submitHandler = (event) =>{
    event.preventDefault()
    if (!todoTitle.trim()) alert("Invalid Text")
    
    const newTodo = {
      id: Date.now() + "",
      title: todoTitle,
      isComplited: false
    }
    setTodoList([...todoList, newTodo])
  }

  return (
    <div>
      <h2>New Todo Apps</h2>
      <form action="" onSubmit={submitHandler} >
        <input type="text" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value) } />
        <button type='submit'>Create</button>
      </form>
      <ul>
        {todoList.map((todo)=>(
          <li key={todo.id}>
            <input type="checkbox" checked={todo.isComplited} />
            <span>{todo.title}</span>
            <button type='submit'>Delete Todo</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewTodoApp
