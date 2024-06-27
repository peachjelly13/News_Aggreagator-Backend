import axios from "axios";
import { ApiResponse } from "../utils/apiResponse.js";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

const fetchNews = async (url, res) => {
    try {
        const response = await axios.get(url);
        if (response.data.totalResults > 0) {
            res.status(200).json(new ApiResponse(200, response.data, "Successfully fetched the data"));
        } else {
            res.status(200).json(new ApiResponse(200, {}, "No more data to show"));
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json(new ApiResponse(500, {}, "Internal server error"));
    }
}

const getAllNews = (req, res) => {
    const pageSize = parseInt(req.query.pageSize) || 20;
    const page = parseInt(req.query.page) || 1;
    const query = req.query.q || "latest"; // Default query or specify your search query here
    const url = `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
    fetchNews(url, res);
}

export { fetchNews, getAllNews };
