import express from "express";
import { addBook, getBooks } from "../controllers/bookController";
const router = express.Router();

router.post("/books", addBook);
router.get("/books", getBooks);

export default router;
