import CompletedTaskList from "@/components/completed_task/CompletedTaskList";
// import DeletedTaskList from "@/components/deleted_task/DeletedTaskList";
// import Layout from "@/components/layout/Layout";
import TodayTaskList from "@/components/task_of_the_day/TodayTaskList";
import { MongoClient } from "mongodb";
// import { useState } from "react";
import Head from "next/head";



 const Home = (props) => {
    // console.log(props.myData);
     
    
    

    
    return(
        <> 
         <Head>
      <title>Home Page</title>
      <meta name="description" content="Here all the tasks completed or incompleted "/>
    </Head>
        <TodayTaskList data={props.myData.filter( val => val.label === "todaytask")}/>
        <CompletedTaskList data = {props.myData.filter( val => val.label === "completedtask")} />
        {/* <DeletedTaskList data = {props.myData.filter( val => val.label === "deletedtask")} /> */}
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

 export default Home;