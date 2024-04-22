import CompletedTaskList from "@/components/completed_task/CompletedTaskList";
import { MongoClient } from "mongodb";

const CompletedTask = (props) => {

    const DUMMY_DATA = [
        {
            id:"m1",
            title:"Work out",
            description:"Work out at gym",
        },
        {
            id:"m2",
            title:"Running",
            description:"2km daily running",
        }
    ]

    return(
        <>
        <CompletedTaskList data={ props.myData}/>
        </>
    )
}

export async function getStaticProps(){
    const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('completed');
       const tasks = await taskCollections.find().toArray();
       client.close();
    return {
        props:{
            // myData: DUMMY_DATA
            myData : tasks.map( (val) => ({
                title: val.title,
                description:val.description,
                id: val._id.toString(),
                taskDate: val.taskDate,
            }))
        },
        revalidate:1,
    }
}

export default CompletedTask;