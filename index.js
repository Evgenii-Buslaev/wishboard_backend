import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Connected to DB. Server started at port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
