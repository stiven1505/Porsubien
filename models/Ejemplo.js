import { Schema, model, models } from "mongoose";

const ejemploSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
      trim: true,
      maxlength: [50, "Name is too long"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "Email is too long"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Ejemplo || model("Ejemplo", ejemploSchema);
