import express from 'express';
import cors from 'cors';
import { router } from './routes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT);