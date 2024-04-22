import { useState } from "react"
import style from "./EditCard.module.css"

const EditCard = (props) => {
    const [title, setTitle] = useState(props.data.title);
    const [desc, setDesc] = useState(props.data.description);
    const updateHandler = (e) => {
        e.preventDefault();
        //  console.log(props.data);
        let myData = {
            ...props.data,
            title: title,
            description: desc,
        }
        // console.log(myData);
        props.onDataBack(myData);
    }
  return (
    <div className={style.myContainer}>
        <form onSubmit={ updateHandler }>
            <div className={style.input}>
                <label>Task Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <label>Description</label>
                <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} />
            </div>
            <button className={style.updateButton} type="submit">Update</button>

        </form>
    </div>
  )
}

export default EditCard