import User from "../models/User";
import upload from "../utils/upload";
import { paramsBuilder } from "./helpers";
import helpers from "./helpers";

const validParams = [
  "userName",
  "email",
  "password",
  "firstName",
  "lastName",
  "phone",
  "birthDate",
  "ubication",
];
//middleware
function find(req, res, next) {
  //findOne by slug or id
  User.findOne({ slug: req.query.id }) //cambiamos el username por id, encerramos en corchetes y ponemos findOne
    .then((user) => {
      req.user = user;
      req.mainObj = user;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

//find by id 
function findById(req, res, next) {
  //findOne by slug or id
  User.findById(req.query.id) //cambiamos el username por id, encerramos en corchetes y ponemos findOne
    .then((user) => {
      req.user = user;
      req.mainObj = user;
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
  User.paginate({}, { page: req.query.page || 1, limit: 100, sort: { _id: -1 } })
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function searchUser(req, res) {
  User.paginate(
    {
      $or: [
        { userName: { $regex: req.query.search, $options: "i" } },
        { firstName: { $regex: req.query.search, $options: "i" } },
        { lastName: { $regex: req.query.search, $options: "i" } },
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
  res.json(req.user);
}

function create(req, res, next) {
  let params = paramsBuilder(validParams, req.body);
  //Crear un nuevo lugar
  User.create(params)
    .then((doc) => {
      req.user = doc;
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

  const params = helpers.paramsBuilder(validParams, req.body);

  //El problema de la siguiente línea es que si existe alguien malisioso que intenta tener permisos extras
  //puede mandarlo por el body y este lo aceptaría
  //req.place = Object.assign(req.place, req.body);

  req.user = Object.assign(req.user, params);
  req.user
    .save()
    .then((doc) => {
      req.user = doc;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function destroy(req, res) {
  req.user
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
  return upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "header", maxCount: 1 },
  ]);
}

function saveImage(req, res) {
  if (req.user) {
    const files = ["profile", "header"];
    const promises = [];
    files.forEach((imageType) => {
      const user = req.user;
      if (user && req.files[imageType]) {
        let newUser = new User(user);
        // req.user.avatar = req.files.avatar[0].secure_url;
        const path = req.files[imageType][0].path;
        promises.push(req.user.updateImage(path, imageType));
      }
      // se necesita agregar la imagen de defecto  cuando no se sube.
    });
    Promise.all(promises)
      .then((results) => {
        res.json(req.user);
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
  findById,
  show,
  create,
  update,
  destroy,
  find,
  multerMiddleware,
  saveImage,
  searchUser,
};
