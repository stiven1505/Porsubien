import Like from "../models/Like";
import helpers from "./helpers";

const validParams = ["_item"];

//middleware
function find(req, res, next) {
    Like.findOne({ _item: req.query.id, _user: req.auth.id })
    .then((like) => {
      req.like = like;
      req.mainObj = like;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

//get all likes by _item
function getAll(req, res) {
    Like.find({ _item: req.query.id })
    .then((likes) => {
      res.json(likes);
    }
    ).catch((err) => {
      res.status(500).json({ message: err.message });
    }
    );
}

//Search if i like this item
function search(req, res) {
  //Like.find _item and _user
    Like.findOne({ _item: req.query.id, _user: req.auth.id })
    .then((likes) => {
      res.json(likes);
    }
    ).catch((err) => {
      res.status(500).json({ message: err.message });
    }
    );
}


//CRUD

function index(req, res) {
  let promise = null;
  if(req.blog){
    promise = req.blog.likes;
  } else if(req.product){
    promise = req.product.likes;
  } else if (req.review){
    promise = req.review.likes;
  }
  if (promise) {
    promise
      .then((likes) => {
        res.json(likes);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    res.status(404).json({});
  }
}

function show(req, res) {
  //Busqueda individual
  res.json(req.like);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Like.create(params)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

function destroy(req, res) {
  req.like
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
  getAll,
  search,
};
