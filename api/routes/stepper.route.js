import express from "express";
import { welcome } from "../controllers/stepper.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/welcome", verifyToken, welcome);

export default router;
