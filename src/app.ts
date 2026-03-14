import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SameWave API running");
});

export default app;


//UugAMco0omnOKuNx


//mongodb+srv://hmuhammed546:<db_password>@cluster0.uvxkeol.mongodb.net/?appName=Cluster0