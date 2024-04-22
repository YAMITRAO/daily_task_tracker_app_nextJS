import TodayTaskList from "@/components/task_of_the_day/TodayTaskList";
import { MongoClient } from "mongodb";
import Head from "next/head";


const Today = (props) => {
    return(
        <>
        <Head>
      <title>Tasks of the Day</title>
      <meta name="description" content="Here all the today's tasks are present "/>
    </Head>
        <TodayTaskList data={props.myData.filter( val => val.label === "todaytask")}/>
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

export default Today;
