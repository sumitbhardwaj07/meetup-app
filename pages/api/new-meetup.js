import { MongoClient } from "mongodb";

async function handler(req, res) {
    console.log(req.method);
    if(req.method === 'POST') {
        try{
        const data = req.body;


        const client = await MongoClient.connect('mongodb+srv://sumitbhardwaj2019:Sumit741@cluster0.lw305mv.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);
        console.log('added data into database')

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
        }
        catch(error) {
            console.log(error);
            //res.status(400).json({ message: 'Meetup inserted!' });
        }

    }
}

export default handler;

