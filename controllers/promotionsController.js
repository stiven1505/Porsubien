import Promotion from "../models/Promotion";
import helpers from "./helpers";

const validParams = ["_plan", "typePromotion", "_item", "timeEnd"];

//middleware
function find(req, res, next) {
  Promotion.findById(req.query.id)
    .then((promotion) => {
      req.promotion = promotion;
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
  Promotion.paginate(
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

function show(req, res) {
  //Busqueda individual
  res.json(req.promotion);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Promotion.create(params)
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

  let attributes = ["plan", "typePromotion", "idPromotion", "idUser"];
  let promotionParams = {};
  attributes.forEach((attribute) => {
    if (Object.prototype.hasOwnProperty.call(req.body, attribute)) {
      promotionParams[attribute] = req.body[attribute];
    }
  });

  //El problema de la siguiente línea es que si existe alguien malisioso que intenta tener permisos extras
  //puede mandarlo por el body y este lo aceptaría
  //req.place = Object.assign(req.place, req.body);

  req.promotion = Object.assign(req.promotion, promotionParams);
  req.promotion
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
  req.promotion
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
  show,
  create,
  update,
  destroy,
  find,
};
