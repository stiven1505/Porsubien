import Subcategory from "../models/Subcategory";
import helpers from "./helpers";

const validParams = ["name"];
//middleware
function find(req, res, next) {
    Subcategory.findById(req.query.id)
    .then((subcategory) => {
      req.subcategory = subcategory;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

function index(req, res) {
  //Todos los lugares
  Subcategory.find()
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
  res.json(req.subcategory);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  Subcategory.create(params)
    .then((doc) => {
      req.subcategory = doc;
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
function destroy(req, res) {
  req.subcategory
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
  destroy,
  find,
};
