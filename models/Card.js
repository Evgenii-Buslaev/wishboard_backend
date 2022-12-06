import mongoose from "mongoose";

const Card = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  picture: { type: String },
});

export default mongoose.model("Card", Card);
