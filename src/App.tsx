import React, { useState } from 'react'
import styles from "./app.module.scss"
import InputField from './components/inputField/InputField'
import { TodoInterface } from './interface/TodoInterface'



const App:React.FC = () => {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<TodoInterface[]>([])
  return (
    <div className={styles.appContainer}>
      <span className={styles.heading}>
        TASKIFY
      </span>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App