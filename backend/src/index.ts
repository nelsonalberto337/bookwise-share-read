import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", bookRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
