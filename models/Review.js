import { Schema, model, models } from "mongoose";
import mongoosePaginate from "mongoose-paginate";
import Like from "./Like";

const reviewSchema = new Schema(
  {
    review: {
      type: Schema.Types.Decimal128,
      required: true,
      min: 0.0,
      max: 5.0,
    },
    comment: {
      type: String,
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    _userReview: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

reviewSchema.plugin(mongoosePaginate);

reviewSchema.virtual("likes").get(function () {
  return Like.find({ _item: this._id }).sort("-id");
});


export default models.Review || model("Review", reviewSchema);
