import Review from "../models/Review";
import helpers from "./helpers";

const validParams = ["review", "comment", "_userReview"];

//middleware
function find(req, res, next) {
  Review.findById(req.query.id)
    .then((review) => {
      req.review = review;
      req.mainObj = review;
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
  Review.paginate(
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

function getByUser(req, res) {
  Review.paginate(
    { _userReview: req.query.id },
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
 * This function is supposed to return a paginated list of reviews that were written about the user who
 * is logged in.
 * @param req - the request object
 * @param res - the response object
 */
function reviewsToMe(req, res) {
  Review.paginate(
    { _userReview: req.auth.id },
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
  res.json(req.review);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Review.create(params)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
function update(req, res) {
  //Actualizar un lugar
  //Quitamos esto si usamos req.body en object.assign, pero es inseguro.

  const params = helpers.paramsBuilder(validParams, req.body);
  //El problema de la siguiente línea es que si existe alguien malisioso que intenta tener permisos extras
  //puede mandarlo por el body y este lo aceptaría
  //req.place = Object.assign(req.place, req.body);

  req.review = Object.assign(req.review, params);
  req.review
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
  req.review
    .remove()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
module.exports = {
  index,
  reviewsToMe,
  show,
  create,
  update,
  destroy,
  find,
  getByUser,
};
