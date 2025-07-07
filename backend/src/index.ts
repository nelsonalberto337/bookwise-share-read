import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import bookRoutes from "./routes/bookRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", bookRoutes);

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
