import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import uploader from "../models/uploader";
import Like from "./Like";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    headerImage: String,
    categories: String,
    _user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

blogSchema.methods.updateImage = function (path, imageType) {
  //subir avatar
  //Guardar el lugar
  return uploader(path).then((secure_url) =>
    this.saveImageUrl(secure_url, imageType)
  );
};
blogSchema.virtual("likes").get(function () {
  return Like.find({ _item: this._id }).sort("-id");
});

blogSchema.methods.saveImageUrl = function (secure_url, imageType) {
  this[imageType + "Image"] = secure_url;
  return this.save();
};

blogSchema.plugin(mongoosePaginate);

let Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
