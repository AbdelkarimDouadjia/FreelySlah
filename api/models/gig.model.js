import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    } /*
    desc: {
      type: String,
      required: true,
    },*/,
    totalStars: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    } /*
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },*/,
    stars: {
      type: [String],
      required: false,
    },

    serviceSearchTags: {
      type: [String],
      required: false,
    },
    coverImage: {
      type: Number,
      required: false,
    },
    serviceDescription: {
      type: String,
      required: true,
    },
    maxProjects: {
      type: Number,
      required: true,
    },

    serviceRequirement: {
      type: [
        {
          text: String,
          typeR: String,
          mandatory: Boolean,
          choices: [String],
        },
      ],
      required: false,
    },

    pricingTiers: {
      type: [
        {
          title: String,
          description: String,
          deliveryDays: Number,
          revisions: Number,
          images: Number,
          pages: Number,
          options: {
            sourceFiles: Boolean,
            tableOfContents: Boolean,
            socialMediaKit: Boolean,
          },
          price: Number,
        },
      ],
      required: true,
    },

    serviceImages: {
      type: [String],
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

    /*shortTitle: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      required: false,
    },*/
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);
