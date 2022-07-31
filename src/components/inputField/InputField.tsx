import React from 'react'
import styles from "./input.module.scss"


interface InputFiledProps{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
}

const InputField:React.FC<InputFiledProps> = ({todo,setTodo}:InputFiledProps) => {
  return (
    <form className={styles.input}>
        <input type="input" placeholder='Enter a task' className={styles.input_box} 
        value={todo}
        onChange={(e)=>{
            setTodo(e.target.value)
        }}
        />
        <button type='submit' className={styles.input_submit}>Go</button>
    </form>
  )
}

export default InputField 