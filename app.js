import express, { urlencoded } from "express"
import cors from "cors"


const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.urlencoded({extended:true}))


const API_KEY = process.env.API_KEY;

export {app}