import express from "express";
import {createNote, deleteNote, updateNotes, getAllNotes, getNoteById } from "../controllers/notesController.js"

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/",createNote);
router.put("/:id",updateNotes);
router.delete("/:id",deleteNote)

export default router;


