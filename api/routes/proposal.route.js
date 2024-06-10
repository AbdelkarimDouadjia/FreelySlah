import express from "express";
import {
  createProposal,
  deleteProposal,
  updateProposal,
  getProposal,
  getProposals,
} from "../controllers/proposal.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createProposal);
router.delete("/:id", verifyToken, deleteProposal);
router.put("/:id", verifyToken, updateProposal);
router.get("/single/:id", getProposal);
router.get("/", getProposals);

export default router;
