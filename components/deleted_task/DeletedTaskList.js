import style from "./DeletedTaskList.module.css"
import TaskCard from "../cards/TaskCard/TaskCard"

const DeletedTaskList = (props) => {
    return (
        <>
        <div className={style.task}> Deleted Task</div>
        {props.data.map( (val) =>{
          return (
            <TaskCard 
        isToday = {false}
        isDeleted = {true}
        isCompleted = {false}
        data={val}
        />
          )
        })}
        
        </>
        
      )
    }

    export default DeletedTaskList;