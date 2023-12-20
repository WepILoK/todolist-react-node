import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import './src/core/db';
import router from "./src/router";

const app = express()
const PORT = process.env.PORT || 8888

dotenv.config()
app.use(express.json())
app.use(cors())

app.use("/api", router);

app.listen(PORT, () => {
    console.log('Server start')
})