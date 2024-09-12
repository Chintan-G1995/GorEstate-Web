import express from "express";
import cors from "cors"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js" 
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)
app.use("/api/test",testRoute)

app.listen(5000,()=>{
    console.log("server Connected to 5000")
});