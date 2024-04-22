import React, { useRef } from 'react'
import style from "./NewEntry.module.css"
import { useRouter } from 'next/router';

const NewEntry = () => {
    const taskRef = useRef();
    const descRef = useRef();

    const router = useRouter();

    const formSubmitHandler = async (e) =>{
        e.preventDefault();
        let enteredTask = taskRef.current.value
        let enteredDesc = descRef.current.value
        let taskDate = new Date();
        console.log(enteredTask,enteredDesc, taskDate);

       const response =  await fetch("/api/new-entry", {
            method:"POST",
            body:JSON.stringify(
                {
                    title:enteredTask,
                    description:enteredDesc,
                    taskDate: taskDate,
                  }
                
            ),
            headers:{
                'Content-type':"application/json"
            }
        }
        )
        const data =  await response.json();
        console.log(data);
        router.push("/");
    }
  return (
    <div className={style.container}>
        <form onSubmit={ formSubmitHandler }>
            <div className={style.title}>Task Form</div>
            <div className={style.taskentry}>
                <label>Enter Task</label>
            <input type="text" placeholder='Enter your task here' ref={taskRef} required/>
            </div>
            
            <div className={style.taskDesc}>
                <label>Description</label>
            <input type="text" placeholder='Task description' ref={descRef}/>
            </div>

            <button className={style.addButton} type="submit">Add Task</button>

        </form>
    </div>
  )
}

export default NewEntry