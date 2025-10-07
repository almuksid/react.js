import React from "react";
import { useState } from "react";
const TodoApp = () =>{

    const [todoTitle, setTodoTitle] = useState("")

    const [todoList, setTodoList] = useState([
        {id: "todo-1", title: "Todo 1", isComplited:false},
        {id: "todo-2", title: "Todo 2", isComplited:true}
    ])

    const submitHandler = (event) =>{
        event.preventDefault()
        if (!todoTitle.trim()) alert("Invalit text")
        const newTodo = {
            id : Date.now() + "",
            title: todoTitle,
            isComplited : false
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle("")
        
    }



    return (
        <div className="">
            <h2>Our Todo App</h2>
            <form onSubmit={submitHandler}>
                <input type="text" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)} />
                <button type="submit">Create</button>
            </form>
            <div className="">
                <ul>
                    {todoList.map((todo) => (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.isComplited} />
                            {todo.title}
                            <button type="button"> Remove Todo </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default TodoApp;