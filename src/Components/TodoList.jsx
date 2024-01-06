
import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [activity, setActivity] = useState('')
  return (
    <>
    <div className='container'>
        <div className='header'>ToDo List</div>
        <input type="text" placeholder='Add Activity' value={activity}/>
    </div>
    </>
  )
}

export default TodoList
