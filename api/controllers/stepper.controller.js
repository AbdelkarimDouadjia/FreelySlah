import User from "../models/user.model.js";
import createError from "../utils/createError.js";

//multi step form registration to update user information and complete some cases like display name ..Etc
export const welcome = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return next(createError(404, "User not found!"));
    //update the user information
    const updateUser = await User.findByIdAndUpdate(req.userId, {
      ...req.body,
    });
    res.status(200).send("User has been updated.");
    await updateUser.save();
  } catch (err) {
    next(err);
  }
};
