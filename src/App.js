import React, {useState} from 'react'
import './App.css'
import {v4 as id } from 'uuid'
import {FaTrash} from 'react-icons/fa'

const App = () => {
  const [val , setVal ] = useState()
  const [todo ,setTodo] = useState([])

  //getTodos function 
  const getTodo = () =>{
    const taskManager ={
      list:val , 
      id:id()
    }
    if(val.length === 0){
    return <h1>Invalid </h1>
    }  else {
      setTodo([...todo , taskManager])
    }
    setVal('')
  }

//Removing tasks 
  const RemoveTask = id=>{
  const deletable= [...todo]
  let deletedTodos = deletable.findIndex(elem => elem.id === id)
  deletable.splice(deletedTodos, 1 )
  setTodo(deletable)
  }

  

  return (
    <div className='App'>
      <input type="text" className="box"onChange={e=>setVal(e.target.value)} value={val} />
      <button onClick={getTodo}>Add</button>
      <div className="container">
    {todo.map(task =>
       <div key={task.id} >
        <h4 key={task.id}>{task.list}</h4> 
        <button onClick={()=>RemoveTask(task.id)}>Delete<FaTrash/></button>
        <br />
        <br />
       </div >
      )}
      </div> 
    </div>
  )
}

export default App