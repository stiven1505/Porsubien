import mongoosePaginate from "mongoose-paginate";
import uploader from "../models/uploader";
import slugify from "../plugins/slugify";
import mongoose from "mongoose";
import Like from "./Like";

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      min: 1000000000,
      max: 9999999999,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    ubication: {
      type: String,
      required: true,
    },
    oneImage: String,
    twoImage: String,
    threeImage: String,
    fourImage: String,
    fiveImage: String,
    sixImage: String,
    sevenImage: String,
    eightImage: String,
    nineImage: String,
    tenImage: String,
    elevenImage: String,
    twelveImage: String,
    thirteenImage: String,
    fourteenImage: String,
    fifteenImage: String,
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

productSchema.methods.updateImage = function (path, imageType) {
  //subir avatar
  //Guardar el lugar
  return uploader(path).then((secure_url) =>
    this.saveImageUrl(secure_url, imageType)
  );
};

productSchema.virtual("likes").get(function () {
  return Like.find({ _item: this._id }).sort("-id");
});

productSchema.methods.saveImageUrl = function (secure_url, imageType) {
  this[imageType + "Image"] = secure_url;
  return this.save();
};

//hooks mongoose, ciclos que guarda un documento. Despues de que se guarde o antes, ejecuta una funcion
/* It's a hook that is called before the document is saved. It generates a slug for the document. */
productSchema.pre("save", function (next) {
  if (this.slug) {
    return next();
  }
  genetaresSlugAndContinue.call(this, 0, next);
});

/* It's a static method that checks if the slug is unique. */
productSchema.statics.validateSlugCount = function (slug) {
  return Product.count({ slug: slug }).then((count) => {
    if (count > 0) return false;
    return true;
  });
};

productSchema.plugin(mongoosePaginate);

/**
 * It takes a title, slugifies it, checks if the slug is unique, if it's not, it adds a number to the
 * end of the slug and checks again.
 * @param count - The number of times the slug has been generated.
 * @param next - The next func
 * tion to be called after the slug is generated.
 */
function genetaresSlugAndContinue(count, next) {
  this.slug = slugify(this.title);
  if (count != 0) {
    this.slug = this.slug + "-" + count;
  }

  Product.validateSlugCount(this.slug).then((isValid) => {
    if (!isValid) {
      return genetaresSlugAndContinue.call(this, count + 1, next);
    }
    next();
  });
}

let Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
