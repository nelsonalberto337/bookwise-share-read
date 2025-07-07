import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  status: { type: String, enum: ["To-Read", "Reading", "Completed"] },
  notes: String,
  imageUrl: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export const Book = mongoose.model("Book", bookSchema);
