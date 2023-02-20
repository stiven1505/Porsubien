import mongoosePaginate from "mongoose-paginate";
import uploader from "../models/uploader";
import slugify from "../plugins/slugify";
import mongoose from "mongoose";
import mongooseBcrypt from "mongoose-bcrypt";
import Follow from "./Follow";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      min: 1000000000,
      max: 9999999999,
    },
    birthDate: {
      type: String,
      required: true,
    },
    profileImage: String,
    headerImage: String,
    bio: String,
    ubication: {
      type: String,
      required: true,
    },
    categories: [String],
    verification: {
      pictureFront: { type: String },
      pictureBack: { type: String },
      status: { type: Boolean, default: false },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Instalamos mongoose-bcrypt para encriptar las contraseñas
userSchema.plugin(mongooseBcrypt);

userSchema.virtual("follows").get(function () {
  return Follow.find({ _user: this._id }, { _userFollow: true }).then(
    (follows) => {
      let followsIds = follows.map((follow) => follow._userFollow.toString());
      return followsIds;
    }
  );
});

userSchema.methods.updateImage = function (path, imageType) {
  //subir avatar
  //Guardar el lugar
  return uploader(path).then((secure_url) =>
    this.saveImageUrl(secure_url, imageType)
  );
};

userSchema.methods.saveImageUrl = function (secure_url, imageType) {
  this[imageType + "Image"] = secure_url;
  return this.save();
};

/** SEO URL CON SLUG EN USER*/

//hooks mongoose, ciclos que guarda un documento. Despues de que se guarde o antes, ejecuta una funcion
/* It's a hook that is called before the document is saved. It generates a slug for the document. */
userSchema.pre("save", function (next) {
  if (this.slug) {
    return next();
  }
  genetaresSlugAndContinue.call(this, 0, next);
});

/* It's a static method that checks if the slug is unique. */
userSchema.statics.validateSlugCount = function (slug) {
  return User.count({ slug: slug }).then((count) => {
    if (count > 0) return false;
    return true;
  });
};

userSchema.plugin(mongoosePaginate);

/**
 * It takes a title, slugifies it, checks if the slug is unique, if it's not, it adds a number to the
 * end of the slug and checks again.
 * @param count - The number of times the slug has been generated.
 * @param next - The next function to be called after the slug is generated.
 */
function genetaresSlugAndContinue(count, next) {
  this.slug = slugify(this.userName);
  if (count != 0) {
    this.slug = this.slug + "-" + count;
  }

  User.validateSlugCount(this.slug).then((isValid) => {
    if (!isValid) {
      return genetaresSlugAndContinue.call(this, count + 1, next);
    }
    next();
  });
}

let User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
