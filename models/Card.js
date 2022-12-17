import mongoose from "mongoose";

const Card = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  picture: { type: String },
  likes: { type: Array },
  comments: { type: Array },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Card", Card);
