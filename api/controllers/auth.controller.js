import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      //make the username unique
      username: req.body.username + Math.random().toString(36).slice(-5),
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
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
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
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

export const google = async (req, res, next) => {
  try {
    // login with google

    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    

    if (user) {
      //handle login user
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
      // create new user

      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8); // 16 digits
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-8),
        fname: req.body.name.split(" ")[0],
        lname: req.body.name.split(" ")[1],
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
