import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

const PORT = process.env.PORT;
const DB_URL = `mongodb+srv://eugenebus144:${process.env.DB_PASSWORD}@cluster0.b1ljs0y.mongodb.net/wishboard?retryWrites=true&w=majority`;

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(process.env.PORT, () =>
      console.log(`Connected to DB. Server started at port ${PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
}

startApp();
