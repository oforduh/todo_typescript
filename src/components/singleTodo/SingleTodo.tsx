import React from 'react'
import { TodoInterface } from '../../interface/TodoInterface'
import styles from "./singletodo.module.scss"
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {MdDone} from "react-icons/md"

type SingleTodoProps={
    item:TodoInterface
    todos:TodoInterface[]
    setTodos:React.Dispatch<React.SetStateAction<TodoInterface[]>>

}
const SingleTodo:React.FC<SingleTodoProps> = ({item,todos,setTodos}:SingleTodoProps) => {

    // This functionality toggles between completed and not completed
    const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>{
            return todo.id===id?{...todo,isDone:!todo.isDone}:todo
        }))
    }


     // This functionality toggles between completed and not completed
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>{
           return todo.id !== id
        }))
    }

  return (
    <form key={item.id} className={styles.single_todo_form}>

        {
            item.isDone? <s className={styles.single_todo_text}>{item.todo}</s>: <span className={styles.single_todo_text}>{item.todo}</span>
        }
   
    <div className={styles.iconGroup}>      
    <span className={styles.icon}>
    <AiFillEdit/>
    </span>
    <span className={styles.icon}   onClick={()=>{
        handleDelete(item.id)
    }}>
    <AiFillDelete/>
    </span>
    <span className={styles.icon} onClick={()=>{
        handleDone(item.id)
    }}>
    <MdDone/>
    </span>
    </div>
    
    </form>
  )
}

export default SingleTodo