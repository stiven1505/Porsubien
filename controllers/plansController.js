import Plan from "../models/Plan";
import helpers from "./helpers";

const validParams = ["name", "description", "price"];

//middleware
function find(req, res, next) {
  Plan.findById(req.query.id)
    .then((plan) => {
      req.plan = plan;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

function index(req, res) {
  //Todos los lugares
  Plan.find()
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
  res.json(req.plan);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  Plan.create(params)
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
  req.plan = Object.assign(req.plan, params);
  req.plan
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
  req.plan
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
