import express from "express";
import dotenv from "dotenv"
import registerRoute from "./routes/register.routes.js"
import loginRoute from "./routes/login.routes.js"
import userRoute from "./routes/user.routes.js"
import dbConnection from './config/db.js';
import authGuard from './middlewares/authentication.js';

dotenv.config();


await dbConnection()


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/register", registerRoute)
app.use("/login", loginRoute)
app.use("/user", authGuard, userRoute)

export default app