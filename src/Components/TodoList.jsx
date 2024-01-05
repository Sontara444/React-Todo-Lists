import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('')
  return (
    <div>
        <h1>To-Do List</h1>
    </div>
  )
}

export default TodoList
