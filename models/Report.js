import { Schema, model, models } from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const reportSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    _user: {
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

reportSchema.plugin(mongoosePaginate);
export default models.Report || model("Report", reportSchema);
