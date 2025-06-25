import express from "express"
import notesRouter from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js"
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
dotenv.config();

const app = express();

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json());
app.use(rateLimiter)
app.use("/api/notes", notesRouter);



connectDB().then(() => {
    app.listen(3004, () => {
        console.log("Server running  on PORT: 3004");
    });
});



