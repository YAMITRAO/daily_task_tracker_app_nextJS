import { MongoClient } from "mongodb";


async function handler(req, res){

    if(req.method === "POST"){
        const data = req.body;
       const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('tasks');
       const result = await taskCollections.insertOne(data);
       client.close();
       res.status(201).json({message:"Data inserted successfully"})
    }
    else if(req.method === "PUT"){
        
    }
}

export default handler;