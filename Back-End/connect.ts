import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const URI1 = process.env.MONGODB_URI1
const URI2 = process.env.MONGODB_URI2

if (!URI1 || !URI2) {
  throw new Error("As variáveis do MongoDB não foram definidas");
}

const client1 = new MongoClient(URI1);
const client2 = new MongoClient(URI2);

await client1.connect();
await client2.connect();

export const db1 = client1.db("Artists");
export const db2 = client2.db("Songs");



