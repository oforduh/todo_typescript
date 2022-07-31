import React, { useState } from 'react'
import { TodoInterface } from '../../interface/TodoInterface'
import styles from "./singletodo.module.scss"
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import {MdDone} from "react-icons/md"
// import ReactTooltip from 'react-tooltip';


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


     // This functionality deletes a todo
    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>{
           return todo.id !== id
        }))
    }

    // This function edit the todo
    /*create to states
    (1) create a state to keep track of edit mode
    (2) another state to save the newly edited field
    */
   const [edit, setEdit] = useState<boolean>(false)
   const [editTodoValue, setEditTodoValue] = useState<string>(item.todo)
   const handleEdit=(id:number)=>{

    // swicthes the edit mode to true only if the edit mode is false and the task has not been completed
   if(!edit && !item.isDone){
    setEdit(!edit)
   }
    }

  return (
    <form key={item.id} className={styles.single_todo_form}>

        {edit?<input value={editTodoValue} onChange={(e)=>{
            setEditTodoValue(e.target.value)
        }} className={styles.todo_single_edit_input}/>:
        item.isDone? <s className={styles.single_todo_text}>{item.todo}</s>: <span className={styles.single_todo_text}>{item.todo}</span>
        }

      
   
    <div className={styles.iconGroup}>      
    <span className={styles.icon} onClick={()=>{
        handleEdit(item.id)
    }}>
    <AiFillEdit/>
    </span>
    <span className={styles.icon}   onClick={()=>{
        handleDelete(item.id)
    }}>
    <AiFillDelete/>
    </span>
    <span className={styles.icon} onClick={()=>{
        handleDone(item.id)
    }} >
    <MdDone/>
  
    </span>
    </div>
  
    </form>
    
  )
}

export default SingleTodo