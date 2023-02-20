import { Schema, model, models } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const followSchema = new Schema(
  {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    _userFollow: {
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

followSchema.plugin(mongoosePaginate);
export default models.Follow || model("Follow", followSchema);
