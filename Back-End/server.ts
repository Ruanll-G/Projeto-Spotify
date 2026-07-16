import express from 'express';
import cors from 'cors';
import { db1, db2 } from './connect.js'

const app = express();
const PORT = process.env.PORT || (3000);

app.use(cors());

app.get('/artists', async (request, response) => {
  const artist = await db1.collection("artists").find({}).toArray();
  response.send(artist);
});

app.get('/songs', async(request, response) => {
  const song = await db2.collection("songs").find({}).toArray();
  response.send(song);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na PORTA ${PORT}`);
});