import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Function to generate a unique username
const generateUsername = (name) => {
  return (
    name.split(" ").join("").toLowerCase() +
    Math.random().toString(36).slice(-8)
  );
};

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      username: generateUsername(req.body.username),
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY,
      { expiresIn: "24h" } // Add token expiration
    );

    user.isOnline = true;
    await user.save();

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 86400000, // 24 hours expiration
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    })
    .status(200)
    .send("User has been logged out.");
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // Handle login for existing user
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_KEY,
        { expiresIn: "24h" } // Add token expiration
      );
      const { password, ...rest } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Secure in production
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          maxAge: 86400000, // 24 hours expiration
        })
        .status(200)
        .send(rest);
    } else {
      // Create new user
      const generatedPassword = Math.random().toString(36).slice(-16);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const nameParts = req.body.name.trim().split(" ");
      const newUser = new User({
        username: generateUsername(req.body.name),
        fname: nameParts.length > 1 ? nameParts[0] : req.body.name,
        lname: nameParts.length > 1 ? nameParts[1] : req.body.name,
        email: req.body.email,
        password: hashedPassword,
        img: req.body.img,
        country: req.body.country,
      });
      await newUser.save();
      const token = jwt.sign(
        {
          id: newUser._id,
        },
        process.env.JWT_KEY,
        { expiresIn: "24h" } // Add token expiration
      );
      const { password, ...rest } = newUser._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", // Secure in production
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          maxAge: 86400000, // 24 hours expiration
        })
        .status(200)
        .send(rest);
    }
  } catch (err) {
    next(err);
  }
};

/*
export const googleRegister = async (req, res, next) => {
  try {
    const { name, email, img, country } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_KEY
      );

      const { password, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour

      res
        .cookie("accessToken", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .send(rest);
    } else {
      // Generate a random password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8); // 16 digits

      // Hash the generated password
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

      // Create a new user
      const newUser = new User({
        username: name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8),
        fname: name.split(" ")[0],
        lname: name.split(" ")[1],
        email,
        password: hashedPassword,
        img,
        country,
      });

      await newUser.save();

      const token = jwt.sign(
        {
          id: newUser._id,
        },
        process.env.JWT_KEY
      );

      const { password, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour

      res
        .cookie("accessToken", token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .send(rest);
    }
  } catch (err) {
    next(err);
  }
};

export const googleLogin = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );

    const { password, ...rest } = user._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: expiryDate,
      })
      .status(200)
      .send(rest);
  } catch (err) {
    next(err);
  }
};
 */
