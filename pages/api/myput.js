import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";


async function handler(req, res){
    if(req.method === "POST"){
        const mydata = req.body;
       const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('tasks');
       const result = await taskCollections.insertOne(mydata);
       client.close();
       res.status(201).json({message:mydata})
    }

    if(req.method === "PUT"){
         const data = req.body
         const updatedData = {
            title:"Updated"
         }
        const myId = new ObjectId(data.id);
       const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('tasks');
    //    const result = await taskCollections.insertOne(data);
    //    const result = await taskCollections.findOneAndUpdate({_id: myId});
       const result = await taskCollections.findOneAndUpdate( { _id: myId },{ $set:{ title:"tttttttttt"}});
       client.close();
       res.status(201).json({message: myId});
    }
    if(req.method === "GET"){
        const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
        const db = client.db();
        const taskCollections = db.collection('tasks');
        const result = await taskCollections.find().toArray();
        res.status(201).json({message:result})
    }
}

export default handler;