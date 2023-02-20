import { Schema, model, models } from "mongoose";
import uploader from "../models/uploader";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryImage: String,
    subcategory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Subcategory",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

categorySchema.methods.updateImage = function (path, imageType) {
  //subir avatar
  //Guardar el lugar
  return uploader(path).then((secure_url) =>
    this.saveImageUrl(secure_url, imageType)
  );
};

categorySchema.methods.saveImageUrl = function (secure_url, imageType) {
  this[imageType + "Image"] = secure_url;
  return this.save();
};

export default models.Category || model("Category", categorySchema);
