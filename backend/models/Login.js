import mongoose from "mongoose";

const { Schema } = mongoose;

const loginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Login", loginSchema);
