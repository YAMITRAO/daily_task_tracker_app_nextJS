import CompletedTaskList from "@/components/completed_task/CompletedTaskList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const CompletedTask = (props) => {
    console.log(props.myData);


    return(
        <>
         <Head>
      <title>Completed Tasks</title>
      <meta name="description" content="All completed tasks are here "/>
    </Head>
        <CompletedTaskList data = {props.myData.filter( val => val.label === "completedtask")} />
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



export default CompletedTask;