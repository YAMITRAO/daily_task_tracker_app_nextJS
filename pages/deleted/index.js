import DeletedTaskList from "@/components/deleted_task/DeletedTaskList"
import { MongoClient } from "mongodb";
import Head from "next/head";


const DeletedTask = (props)=>{

    return(
        <>
         <Head>
      <title>Deleted Task</title>
      <meta name="description" content="all deleted tasks are here"/>
    </Head>
         <DeletedTaskList data = {props.myData.filter( val => val.label === "deletedtask")} />
        </>
    )
}
export async function getStaticProps(){
    const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('tasks');
       const tasks = await taskCollections.find().toArray();
       client.close();
    return {
        props:{
            
            myData : tasks.map( (val) => ({
                title: val.title,
                description:val.description,
                id: val._id.toString(),
                taskDate: val.taskDate,
                label:val.label,
            })),
        },
        revalidate:1,
    }
}

export default DeletedTask