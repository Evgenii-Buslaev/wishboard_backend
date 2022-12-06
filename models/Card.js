import mongoose from "mongoose";

const Card = new mongoose.Schema({
  author: { type: String, require: true },
  title: { type: String, require: true },
  text: { type: String, require: true },
  picture: { type: String },
  comments: { type: Array },
});

export default mongoose.model("Card", Card);
