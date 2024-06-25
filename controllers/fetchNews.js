import axios from "axios";
import { ApiResponse } from "../utils/apiResponse.js";

const fetchNews = (url,res)=>{
    try {
        axios.get(url).then(response=>{
            if(response.data.totalResults>0){
                res.status(200).json(new ApiResponse(200,response.data,"successfully fetched the data"))
            }
            else{
                res.status(200).json(new ApiResponse(200,{},"no more data to show"))
            }
        })
    } catch (error) {
        res.status(500).json(new ApiResponse(500,{},"internal server error"))
        
    }
}

const getAllNews = (req,res)=>{
    
}




export {fetchNews,getAllNews}