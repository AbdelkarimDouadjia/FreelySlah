import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    budgetType: {
      type: String,
      required: true,
      enum: ["hourly", "fixed"],
    },
    hourlyRateFrom: Number,
    hourlyRateTo: Number,
    fixedPrice: Number,
    scopeDuration: String,
    scopeLevel: String,
    scopeHiring: String,
    attachments: [
      {
        fileName: String,
        fileType: String,
        fileData: Buffer,
      },
    ],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
