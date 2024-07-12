import express from "express";
const router = express.Router();

import { createPost}from "../controllers/postControllers.js";


router.post("/", createPost);

export default router;