import Category from "../models/Category";
import upload from "../utils/upload";
import helpers from "./helpers";

const validParams = ["name", "subcategory"];

//middleware
function find(req, res, next) {
  Category.findById(req.query.id)
    .then((category) => {
      req.category = category;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

function index(req, res) {
  //Todos los lugares
  Category.find()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function show(req, res) {
  //Busqueda individual
  res.json(req.category);
}

function create(req, res, next) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  Category.create(params)
    .then((doc) => {
      req.category = doc;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function update(req, res) {
  //Actualizar un lugar
  //Quitamos esto si usamos req.body en object.assign, pero es inseguro.

  
  const params = helpers.paramsBuilder(validParams, req.body);
  req.category = Object.assign(req.category, params);
  req.category
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function destroy(req, res) {
  req.category
    .remove()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
function multerMiddleware() {
  //si es una imagen usamos avatar, usamos fields para que nos de un array con todas las imagenes
  /* A middleware that is going to be used in the update route. It is going to be used to upload
    images. */
  return upload.fields([{ name: "category", maxCount: 1 }]);
}

function saveImage(req, res) {
  if (req.category) {
    const files = ["category"];
    const promises = [];
    files.forEach((imageType) => {
      if (req.files && req.files[imageType]) {
        // req.category.avatar = req.files.avatar[0].secure_url;
        const path = req.files[imageType][0].path;
        promises.push(req.category.updateImage(path, imageType));
      }
      // se necesita agregar la imagen de defecto  cuando no se sube.
    });
    Promise.all(promises)
      .then((results) => {
        res.json(req.category);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  } else {
    res.status(422).json({
      error: req.error || "No files were uploaded.",
    });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  find,
  multerMiddleware,
  saveImage,
};
