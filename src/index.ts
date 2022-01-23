import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';
import connect from './database/connect';
import { router } from './routes';

const db = process.env.DB_URL;

const app = express();

if (!db) {
  process.exit(1);
}

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

connect({ db });

app.get('/', (req, res) => {
  res.send('Back-end Challenge 2021 🏅 - Space Flight News');
});

export default app;
