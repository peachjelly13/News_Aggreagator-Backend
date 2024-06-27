import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/newsRouter.js"

dotenv.config({
    path:'.env'
})

const PORT = process.env.PORT
const API_KEY = process.env.API_KEY;
console.log(`${API_KEY}`)
fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.urlencoded({extended:true}))
app.use("/api/v1/news",router)


app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)

})



export {app}
