import { MongoClient } from 'mongodb';

const hanlder = async (req,res) => {
    if(req.method === 'POST'){
        const { email, name, message } = req.body;
        const details = {
            email,
            name,
            message
        };
        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.qx9bz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

        try {
            client = await MongoClient.connect(connectionString);
            
        } catch (err) {
            res.status(400).json({ message:err.message});
            return;
        }
        const db = client.db();
        try {
           const result = await db.collection('messages').insertOne(details);
            details.id = result.insertedId;
        } catch (err) {
            res.status(500).json({ message:err.message});
            client.close();
            return;
        }
        client.close();
        
        res.status(201).json({ message:'saved', data: details});
    }else {
        res.status(500).json({ message:'Problem in DB server'})
    }
};

export default hanlder;