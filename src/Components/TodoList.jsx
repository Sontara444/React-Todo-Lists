
import { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [activity, setActivity] = useState('')
  const [listData, setListData] = useState([])

  function addActivity(){
        setListData([...listData, activity])
        console.log(listData)
  }
  return (
    <>
    <div className='container'>
        <div className='header'>ToDo List</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={(addActivity)}>Add</button>
    </div>
    </>
  )
}

export default TodoList
