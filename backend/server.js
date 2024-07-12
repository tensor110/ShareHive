import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import { errorResponserHandler, invalidPathHandler } from "./middleware/errorHandler.js"

import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"

dotenv.config()
connectDB();
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server is running...");
});


app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)

app.use(invalidPathHandler)
app.use(errorResponserHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running in port ${PORT}`))