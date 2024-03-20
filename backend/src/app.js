import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true
}))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'50mb'}))
app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

import dataRouter from './routes/data.route.js'

app.use("/api/v1", dataRouter)


export default app

