import style from "./CompletedTaskList.module.css"
import TaskCard from "../cards/TaskCard/TaskCard"

const CompletedTaskList = (props) => {
    return (
        <>
        <div className={style.task}> Completed Task</div>
        {props.data.map( (val) =>{
          return (
            <TaskCard 
        isToday = {true}
        isDeleted = {false}
        isCompleted = {true}
        data={val}
        />
          )
        })}
        
        </>
        
      )
    }

    export default CompletedTaskList;