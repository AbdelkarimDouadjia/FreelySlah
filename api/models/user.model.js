import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    displayName: {
      type: String,
      required: false,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    userIdType: {
      type: String,
      required: false,
    },
    userIdNumber: {
      type: String,
      required: false,
    },
    userIssuedD: {
      type: String,
      required: false,
    },
    userExpiredD: {
      type: String,
      required: false,
    },
    userOccupation: {
      type: String,
      required: false,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
