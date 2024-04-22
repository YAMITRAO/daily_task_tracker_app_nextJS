import Layout from "@/components/layout/Layout";
import TodayTaskList from "@/components/task_of_the_day/TodayTaskList";
import { MongoClient } from "mongodb";

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

 const Home = (props) => {
    console.log(props.myData);
    
    
    return(
        <> 
        <TodayTaskList data={props.myData}/>
        </>
    )
 }
 export async function getStaticProps(){
    const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('task');
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

 export default Home;