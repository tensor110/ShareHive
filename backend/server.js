import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import connectDB from "./config/db.js";
import cors from "cors";
import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler.js";

import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js"

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.use('/api/users', userRoutes);
// app.use('/api/posts',postRoutes)

app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
