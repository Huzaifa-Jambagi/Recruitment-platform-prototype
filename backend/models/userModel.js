import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    profile: {
      fullName: { type: String, required: true },
      headline: { type: String, default: "" },
      location: { type: String, default: "" },
      about: { type: String, default: "" }
    },
    lastLogin: {
      type: Date,
      default: Date.now
    },

  }
);

export const User = mongoose.model("User", userSchema);
