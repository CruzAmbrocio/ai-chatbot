import { config } from 'dotenv'
import morgan from 'morgan'
import appRouter from './routes';

const express = require('express');
const cors = require('cors');
const app = express();

config();

app.use(express.json());
app.use(morgan('dev'));  // TODO remove in production
app.use('/api/v1', appRouter);
app.use(cors());

export default app;