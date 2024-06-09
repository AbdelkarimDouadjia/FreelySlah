import express from "express";
import multer from "multer";
import {
  createProject,
  deleteProject,
  updateProject,
  getProject,
  getProjects,
} from "../controllers/project.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", verifyToken, upload.array("files"), createProject);
router.delete("/:id", verifyToken, deleteProject);
router.put("/:id", verifyToken, upload.array("files"), updateProject);
router.get("/single/:id", getProject);
router.get("/", getProjects);

export default router;
