import TaskCard from "../cards/TaskCard/TaskCard"
import style from "./TodayTaskList.module.css"


const TodayTaskList = (props) => {
  const completedData = async (mydata) => {
     console.log(mydata);

     
     
     const response =  await fetch("/api/completed", {
      method:"POST",
      body:JSON.stringify(
          {
              title:mydata.title,
              description:mydata.description,
              taskDate: new Date(),
            }
          
      ),
      headers:{
          'Content-type':"application/json"
      }
  }
  )
  const data =  await response.json();
  console.log(data);
  }
  return (
    <>
    <div className={style.task}> Today's Task</div>
    {props.data.map( (val) =>{
      return (
        <TaskCard key={val.id}
        onDataBack = { completedData }
    isToday = {true}
    isDeleted = {false}
    isCompleted = {false}
    data={val}
    />
      )
    })}
    
    </>
    
  )
}

export default TodayTaskList