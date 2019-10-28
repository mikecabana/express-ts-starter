import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', async (req, res) => {

    // simulate a slow response
    const pause = new Promise((resolve) => {
        setTimeout(() => resolve(), 2000);
    });
    await pause;

    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Express Typescript starter listening on port ${PORT}...`);
});