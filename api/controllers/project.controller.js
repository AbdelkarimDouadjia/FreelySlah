import Project from "../models/project.model.js";
import createError from "../utils/createError.js";

// Create a new project
export const createProject = async (req, res, next) => {
  const attachments = req.files
    ? req.files.map((file) => ({
        fileName: file.originalname,
        fileType: file.mimetype,
        fileData: file.buffer,
      }))
    : [];

  const newProject = new Project({
    userId: req.userId,
    ...req.body,
    ...(attachments.length > 0 && { attachments: attachments }),
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    next(err);
  }
};

// Delete a project
export const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId.toString() !== req.userId)
      return next(createError(403, "You can delete only your project!"));

    await Project.findByIdAndDelete(req.params.id);
    res.status(200).send("Project has been deleted!");
  } catch (err) {
    next(err);
  }
};

// Update a project
export const updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project.userId.toString() !== req.userId)
      return next(createError(403, "You can update only your project!"));

    const updatedData = { ...req.body };
    if (req.files) {
      updatedData.attachments = req.files.map((file) => ({
        fileName: file.originalname,
        fileType: file.mimetype,
        fileData: file.buffer,
      }));
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.status(200).json(updatedProject);
  } catch (err) {
    next(err);
  }
};

// Get a single project
export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return next(createError(404, "Project not found!"));
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

// Get all projects with filters
export const getProjects = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { category: q.cat }),
    ...(q.subCat && { subCategory: q.subCat }),
	...(q.skills && { skills: { $all: q.skills.split(",") } }),
	...(q.budgetType && { budgetType: q.budgetType }),
	...(q.scopeDuration && { scopeDuration: q.scopeDuration }),
	...(q.hourlyRateFrom && { hourlyRateFrom: { $gte: q.hourlyRateFrom } }),
	...(q.hourlyRateTo && { hourlyRateTo: { $lte: q.hourlyRateTo } }),
	...(q.fixedPriceFrom && { fixedPriceFrom: { $gte: q.fixedPriceFrom } }),
	...(q.fixedPriceTo && { fixedPriceTo: { $lte: q.fixedPriceTo } }),
	...(q.scopeLevel && { scopeLevel: q.scopeLevel }),
	...(q.scopeHiring && { scopeHiring: q.scopeHiring }),
    ...((q.min || q.max) && {
      budgetType: "hourly",
      hourlyRateFrom: {
        ...(q.min && { $gte: q.min }),
        ...(q.max && { $lte: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  try {
    const projects = await Project.find(filters).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};
