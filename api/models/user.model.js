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
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
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
    freelancerType: {
      type: String,
      required: false,
    },
    userProfile: [
      {
        userEducation: [
          {
            school: {
              type: String,
              required: false,
            },
            degree: {
              type: String,
              required: false,
            },
            fieldOfStudy: {
              type: String,
              required: false,
            },
            startYear: {
              type: String,
              required: false,
            },
            endYear: {
              type: String,
              required: false,
            },
            description: {
              type: String,
              required: false,
            },
          },
        ],
        //user Skills (array of strings)
        userSkills: [
          {
            skill: {
              type: String,
              required: false,
            },
          },
        ],
        workExperience: [
          {
            title: {
              type: String,
              required: false,
            },
            company: {
              type: String,
              required: false,
            },
            startYear: {
              type: String,
              required: false,
            },
            endYear: {
              type: String,
              required: false,
            },
            description: {
              type: String,
              required: false,
            },
          },
        ],
        userLanguages: [
          {
            language: {
              type: String,
              required: false,
            },
            proficiency: {
              type: String,
              required: false,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);