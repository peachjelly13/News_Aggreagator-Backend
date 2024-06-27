import express from 'express'
const router = express.Router();
import { getAllNews } from '../controllers/fetchNews.js';

router.route('/getallNews').get(getAllNews)



export default router