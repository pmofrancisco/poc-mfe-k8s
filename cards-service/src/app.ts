import express from 'express';
import { getCardsRouter } from './routes/get';

const app = express();

app.use(getCardsRouter);

export { app };
