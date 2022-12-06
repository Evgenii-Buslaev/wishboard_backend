import mongoose from "mongoose";

const User = new mongoose.Schema({
  name: { type: String, require: true },
  sex: { type: String, require: true },
  age: { type: String },
});

export default mongoose.model("User", User);
