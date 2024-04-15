import React,{useState} from 'react'

function ToDoList() {

  const[tasks,setTasks]=useState([]);
  const[newTask,setNewTask]=useState("")

  function handleInput(e){
    setNewTask(e.target.value);
  }

  function addTask(){
    if(newTask.trim()!==""){
      
    setTasks(t=>[...t,newTask])
    setNewTask("")
    }
  }

  function delTask(index){
    const updatedTask=tasks.filter((_,i)=>i!==index)
    setTasks(updatedTask);
  }

  function moveTaskUp(index){
    if(index>0){
      const updatedTask=[...tasks];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]]
      setTasks(updatedTask)
    }
  }

  function moveTaskDown(index){
    if(index<tasks.length-1){
      const updatedTask=[...tasks];
      [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]]
      setTasks(updatedTask)
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input type='text' placeholder='Enter a task...' value={newTask} onChange={handleInput}/>
        <button className='add-button' onClick={addTask}>Add task</button>
      </div>
      <ol>
        {tasks.map((task,i)=>
          <li key={i}>
            <span className='text'>{task}</span>
            <button className='delete-button'
              onClick={()=>delTask(i)}>Delete
            </button>
            <button className='up-button'
              onClick={()=>moveTaskUp(i)}>Up
            </button>
            <button className='down-button'
              onClick={()=>moveTaskDown(i)}>Down
            </button>
          </li>)}
      </ol>
    </div>
  )
}

export default ToDoList