import Product from "../models/Product";
import upload from "../utils/upload";
import helpers from "./helpers";

const validParams = [
  "category",
  "subCategory",
  "title",
  "description",
  "phone",
  "price",
  "ubication",
];

//middleware
function find(req, res, next) {
  Product.findOne({ slug: req.query.id })
    .then((product) => {
      req.product = product;
      req.mainObj = product;
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
  Product.paginate(
    {},
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
function ownproducts(req, res) {
  Product.paginate(
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

function searchProducts(req, res) {
  //Todos los lugares que coincidan con el titulo y la descripcion
  Product.paginate(
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
  res.json(req.product);
}

function create(req, res, next) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Product.create(params)
    .then((doc) => {
      req.product = doc;
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
  //req.place = Object.assign(req.place, req.body);

  const params = helpers.paramsBuilder(validParams, req.body);
  req.product = Object.assign(req.product, params);
  req.product
    .save()
    .then((doc) => {
      req.product = doc;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function destroy(req, res) {
  req.product
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
    { name: "one", maxCount: 1 },
    { name: "two", maxCount: 1 },
    { name: "three", maxCount: 1 },
    { name: "four", maxCount: 1 },
    { name: "five", maxCount: 1 },
    { name: "six", maxCount: 1 },
    { name: "seven", maxCount: 1 },
    { name: "eight", maxCount: 1 },
    { name: "nine", maxCount: 1 },
    { name: "ten", maxCount: 1 },
    { name: "eleven", maxCount: 1 },
    { name: "twelve", maxCount: 1 },
    { name: "thirteen", maxCount: 1 },
    { name: "fourteen", maxCount: 1 },
    { name: "fifteen", maxCount: 1 },
  ]);
}

function saveImage(req, res) {
  if (req.product) {
    const files = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
    ];
    const promises = [];
    files.forEach((imageType) => {
      if (req.files && req.files[imageType]) {
        // req.place.avatar = req.files.avatar[0].secure_url;
        const path = req.files[imageType][0].path;
        promises.push(req.product.updateImage(path, imageType));
      }
    });
    Promise.all(promises)
      .then((results) => {
        res.json(req.product);
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

//get products by user
function getProductsByUser(req, res) {
  Product.paginate(
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
  searchProducts,
  ownproducts,
  show,
  create,
  update,
  destroy,
  find,
  multerMiddleware,
  saveImage,
  getProductsByUser,
};
