import { useState } from 'react'

import './App.css'
import AddTask from './components/AddTask'
import TaskCard from './components/TaskCard';
import CompletedTask from './components/CompletedTask';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList ] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  const handleAddTask = () => {
    
    setTodoList([...todoList, todo]);
  }

  const addToComplete = (task: string) =>{
    setCompleted([...completed, task])
    setTodoList(todoList.filter(t => t !== task))
    
  }
  
  const deleteTask = (task: string) => {
    setTodoList(todoList.filter( t => t !== task))
  }

  return (
    <>
    <h1>Task</h1>
    <AddTask todo={todo} setTodo={setTodo} handleAddTask={handleAddTask}></AddTask>
    <div className="taskContainer">
      <h1>Tasks</h1>
    <TaskCard todoList={todoList} addToComplete={addToComplete} deleteTask={deleteTask}></TaskCard>
    </div>
    <div>
      <h1>Completed</h1>
      <CompletedTask completed={completed}></CompletedTask>
    </div>
    </>
  )
}

export default App
