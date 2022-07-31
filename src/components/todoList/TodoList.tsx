import React from 'react'
import styles from "./todolist.module.scss"
import { TodoInterface } from '../../interface/TodoInterface'
import SingleTodo from '../singleTodo/SingleTodo'

interface TodoListProps{
    todos:TodoInterface[]
    setTodos:React.Dispatch<React.SetStateAction<TodoInterface[]>>
}

const TodoList:React.FC<TodoListProps> = ({todos,setTodos}:TodoListProps) => {

  return (
    <div className={styles.todoContainer}>
    {todos.map((item)=><SingleTodo item={item} setTodos={setTodos} todos={todos}/>)}
    </div>
  )
}

export default TodoList 