import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connection } from "./database/db.mjs";
import router from "./routes/routes.mjs";

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true 
}));
app.use("/", router); 
 
connection(username, password);
app.listen(8000, () => console.log("Server is listening on port 8000"));
