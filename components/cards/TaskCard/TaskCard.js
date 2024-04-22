import style from './TaskCard.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ContrastIcon from '@mui/icons-material/Contrast';

const TaskCard = (props) => {
  const changeHandler = () =>{
    // console.log(props.data);
    props.onDataBack(props.data);
  }
  return (
    <>
   
    <div className={style.container} style = {props.isDeleted ? {textDecoration:"line-through"} : {}}>
        <div className={style.taskTitle}>
       {props.isToday && !props.isCompleted && !props.isDeleted && <input type="checkbox" onChange={ changeHandler } />}
        <h3>{props.data.title}</h3> 
        <div className={style.taskDescription}>{props.data.description}</div>     
        </div>
        <div className={style.buttons}>
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.editButton}><EditIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <DeleteIcon/></button>}
            {props.isToday && props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <DeleteIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <AccessAlarmIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <ContrastIcon/></button>}
        </div>
    </div>
    </>
  )
}

export default TaskCard