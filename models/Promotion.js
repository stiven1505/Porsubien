import { Schema, model, models } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const promotionSchema = new Schema(
  {
    Status: { type: String, required: true, default: "Pending" },
    interactions: [
      {
        type: Number,
        default: 0,
      },
    ],
    _plan: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    typePromotion: {
      type: String,
      required: true,
    },
    _item: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timeEnd: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

promotionSchema.plugin(mongoosePaginate);
export default models.Promotion || model("Promotion", promotionSchema);
