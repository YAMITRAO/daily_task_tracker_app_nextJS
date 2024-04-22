import style from './TaskCard.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ContrastIcon from '@mui/icons-material/Contrast';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { useRouter } from 'next/router';
import EditCard from '../EditCard/EditCard';
import { useState } from 'react';

const TaskCard = (props) => {

  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => {
    setIsEdit(!isEdit);

  }
  
  const router = useRouter();
  const putApi = async (mydata, mylabel) =>{

    console.log(mydata);
    const response =  await fetch("/api/allpost", {
      method:"PUT",
      body:JSON.stringify(
          {   
            ...mydata,
            label:mylabel,
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
  setIsEdit(false);
  }

  const taskDeletehandler = async () => {
    await putApi(props.data, "deletedtask");
  }

  const changeHandler = () =>{
    putApi(props.data,"completedtask");
  }

  const restoreHandler = () => {
    putApi(props.data,"todaytask");
  }

  const updateHandler = (updateData) => {
    console.log(updateData);
    putApi(updateData,"todaytask");
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
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.editButton} onClick={ editHandler }><EditIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton} onClick={ taskDeletehandler }> <DeleteIcon/></button>}
            {props.isToday && props.isCompleted && !props.isDeleted && <button className={style.deleteButton} onClick={ taskDeletehandler }> <DeleteIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <AccessAlarmIcon/></button>}
            {props.isToday && !props.isCompleted && !props.isDeleted && <button className={style.deleteButton}> <ContrastIcon/></button>}
            {props.isDeleted || props.isCompleted && <button className={style.deleteButton} onClick={restoreHandler}> <SettingsBackupRestoreIcon/></button>}
            {props.isDeleted  && <button className={style.deleteButton} onClick={restoreHandler}> <SettingsBackupRestoreIcon/></button>}
        </div>
        
    </div>
    {isEdit && <EditCard data={props.data} onDataBack = {updateHandler}/>}
    </>
  )
}

export default TaskCard