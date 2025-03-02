//javaScript Assincrono
//await async
// fullfilled

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://Gustavo:8fz12HD01afSSb7q@cluster0.8vnwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);