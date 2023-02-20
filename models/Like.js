import { Schema, model, models } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const likeSchema = new Schema(
  {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    _item: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

likeSchema.plugin(mongoosePaginate);
export default models.Like || model("Like", likeSchema);
