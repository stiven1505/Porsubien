import { Schema, model, models } from "mongoose";

const subcategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default models.Subcategory || model("Subcategory", subcategorySchema);
