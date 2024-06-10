import Proposal from "../models/proposal.model.js";
import createError from "../utils/createError.js";

// Create a new proposal
export const createProposal = async (req, res, next) => {
  const {
    projectId,
    sellerId,
    buyerId,
    coverLetter,
    hourlyPrice,
    estimatedHours,
  } = req.body;

  try {
    // Check if a proposal from the same seller for the same project already exists
    const existingProposal = await Proposal.findOne({ projectId, sellerId });
    if (existingProposal) {
      return next(
        createError(
          400,
          "You have already submitted a proposal for this project."
        )
      );
    }

    const newProposal = new Proposal({
      projectId,
      sellerId,
      buyerId,
      coverLetter,
      hourlyPrice,
      estimatedHours,
    });

    const savedProposal = await newProposal.save();
    res.status(201).json(savedProposal);
  } catch (err) {
    next(err);
  }
};

// Delete a proposal
export const deleteProposal = async (req, res, next) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (proposal.sellerId !== req.userId && proposal.buyerId !== req.userId)
      return next(createError(403, "You can delete only your proposal!"));

    await Proposal.findByIdAndDelete(req.params.id);
    res.status(200).send("Proposal has been deleted!");
  } catch (err) {
    next(err);
  }
};

// Update a proposal
export const updateProposal = async (req, res, next) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (proposal.sellerId !== req.userId && proposal.buyerId !== req.userId)
      return next(createError(403, "You can update only your proposal!"));

    const updatedProposal = await Proposal.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).json(updatedProposal);
  } catch (err) {
    next(err);
  }
};

// Get a single proposal
export const getProposal = async (req, res, next) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) return next(createError(404, "Proposal not found!"));
    res.status(200).json(proposal);
  } catch (err) {
    next(err);
  }
};

// Get all proposals with filters
export const getProposals = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.projectId && { projectId: q.projectId }),
    ...(q.sellerId && { sellerId: q.sellerId }),
    ...(q.buyerId && { buyerId: q.buyerId }),
  };

  try {
    const proposals = await Proposal.find(filters).sort({ createdAt: -1 });
    res.status(200).json(proposals);
  } catch (err) {
    next(err);
  }
};
