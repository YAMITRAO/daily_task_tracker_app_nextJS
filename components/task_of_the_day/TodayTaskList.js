import TaskCard from "../cards/TaskCard/TaskCard"
import style from "./TodayTaskList.module.css"


const TodayTaskList = (props) => { 
  return (
    <>
     <div className={style.task}> Today's Task</div>
    { props.data.length>0 &&  props.data.map( (val) =>{
      return (
        <TaskCard key={val.id}
    isToday = {true}
    isDeleted = {false}
    isCompleted = {false}
    data={val}
    />
      )
    }) }
    
    </>
    
  )
}

export default TodayTaskList