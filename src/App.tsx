import React, { useState } from 'react'
import styles from "./app.module.scss"
import InputField from './components/inputField/InputField'
import TodoList from './components/todoList/TodoList'
import { TodoInterface } from './interface/TodoInterface'




const App:React.FC = () => {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<TodoInterface[]>([])

    // a function that adds new todo
    const handleAddTodo=(e: React.FormEvent)=>{
      e.preventDefault()
      if(todo){
        setTodos([...todos,{  id:Date.now(),
          todo:todo,
          isDone:false}])
          setTodo("")
      }
      }

      console.log(todos)
  return (
    <div className={styles.appContainer}>
      <span className={styles.heading}>
        TASKIFY
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} setTodos={setTodos} />
   
    </div>
  )
}

export default App