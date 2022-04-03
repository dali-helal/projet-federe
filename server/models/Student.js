import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    nom: {
      type: String,
      required: false,
    },
    cin: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("students", StudentSchema);
