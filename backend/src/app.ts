import { config } from 'dotenv'
const express = require('express');
const cors = require('cors');
const app = express();

config();

app.use(express.json());
app.use(cors());

export default app;