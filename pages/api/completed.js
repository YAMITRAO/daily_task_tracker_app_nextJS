import { MongoClient } from "mongodb";


async function handler(req, res){

    if(req.method === "POST"){
        const data = req.body;
        // const myId = new ObjectId(data.id);
       const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const taskCollections = db.collection('task');
       const result = await taskCollections.insertOne(data);
    //    const result = await taskCollections.findOneAndDelete({_id: myId});
       client.close();
       res.status(201).json({message:"Data Completed successfully"})
    }
}

export default handler;