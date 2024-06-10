import mongoose from "mongoose";

const ProposalSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    hourlyPrice: {
      type: Number,
      required: true,
    },
    estimatedHours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Proposal = mongoose.model("Proposal", ProposalSchema);
export default Proposal;
