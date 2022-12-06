import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String },
  age: { type: String },
});

export default mongoose.model("User", User);
