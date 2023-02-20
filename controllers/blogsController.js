import Blog from "../models/Blog";
import upload from "../utils/upload";
import helpers from "./helpers";

const validParams = ["title", "description", "categories"];

//middleware
function find(req, res, next) {
  Blog.findById(req.query.id)
    .then((blog) => {
      req.blog = blog;
      req.mainObj = blog;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

//CRUD

function index(req, res) {
  //Todos los lugares
  //En vez de usar find, usamos paginate para que nos de todos los lugares por pagina
  //En los parametros, decimos page y limit, que nos de todos los lugares por pagina, y que nos de 8 lugares por pagina damos sort por id de manera que nos de los lugares mas recientes primero
  Blog.paginate({}, { page: req.query.page || 1, limit: 100, sort: { _id: -1 } })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function ownIndex(req, res) {
  //Todos los lugares del usuario
  console.log(req.query);
  Blog.paginate(
    { _user: req.auth.id },
    { page: req.query.page || 1, limit: 100, sort: { _id: -1 } }
  )
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

/**
 * It searches for blogs that match the title or description of the blog.
 * @param req - The request object.
 * @param res - The response object.
 */
function searchblogs(req, res) {
  //Todos los lugares que coincidan con el titulo y descripción
  Blog.paginate(
    {
      $or: [
        { title: { $regex: req.query.title, $options: "i" } },
        { description: { $regex: req.query.title, $options: "i" } },
      ],
    },
    { page: req.query.page || 1, limit: 100, sort: { _id: -1 } }
  )
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
  res.json(req.blog);
}

function create(req, res, next) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Blog.create(params)
    .then((doc) => {
      req.blog = doc;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function update(req, res, next) {
  //Actualizar un lugar
  //Quitamos esto si usamos req.body en object.assign, pero es inseguro.

  //El problema de la siguiente línea es que si existe alguien malisioso que intenta tener permisos extras
  //puede mandarlo por el body y este lo aceptaría
  //req.blog = Object.assign(req.blog, req.body);

  const params = helpers.paramsBuilder(validParams, req.body);
  req.blog = Object.assign(req.blog, params);
  req.blog
    .save()
    .then((doc) => {
      req.blog = doc;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function destroy(req, res) {
  req.blog
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
  return upload.fields([{ name: "header", maxCount: 1 }]);
}

function saveImage(req, res) {
  if (req.blog) {
    const files = ["header"];
    const promises = [];
    files.forEach((imageType) => {
      if (req.files && req.files[imageType]) {
        // req.blog.avatar = req.files.avatar[0].secure_url;
        const path = req.files[imageType][0].path;
        promises.push(req.blog.updateImage(path, imageType));
      }
      // se necesita agregar la imagen de defecto  cuando no se sube.
    });
    Promise.all(promises)
      .then((results) => {
        res.json(req.blog);
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

// GET blogs and products by category
function getByCategory(req, res) {
  Blog.paginate(
    { categories: req.query.category },
    { page: req.query.page || 1, limit: 100, sort: { _id: -1 } }
  )
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
//get blogs by user
function getByUser(req, res) {
  Blog.paginate(
    { _user: req.query.user },
    { page: req.query.page || 1, limit: 100, sort: { _id: -1 } }
  )
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}


module.exports = {
  index,
  ownIndex,
  searchblogs,
  show,
  create,
  update,
  destroy,
  find,
  multerMiddleware,
  saveImage,
  getByCategory,
  getByUser,
};
