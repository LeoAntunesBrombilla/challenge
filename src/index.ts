import express from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Back-end Challenge 2021 🏅 - Space Flight News');
});

export default app;
