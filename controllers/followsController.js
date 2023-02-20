import Follow from "../models/Follow";
import helpers from "./helpers";
import User from "../models/User";
import Blog from "../models/Blog";
import Product from "../models/Product";

const validParams = ["_userFollow"];

//middleware
function find(req, res, next) {
  Follow.findById(req.query.id)
    .then((follow) => {
      console.log(follow);
      req.follow = follow;
      req.mainObj = follow;
      next();
    })
    .catch((err) => {
      next(err);
    });
}
//middleware find _userFollow
function findUserFollow(req, res, next) {
  Follow.findOne({_userFollow: req.query.id})
    .then((follow) => {
      req.follow = follow;
      req.mainObj = follow;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

//CRUD

function index(req, res) {
  User.findOne({ _id: req.query.id })
    .then((user) => {
      user.follows.then((fav) => {
        res.json(fav);
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
}

function indexFollowers(req, res) {
  User.findOne({ _id: req.query.id })
    .then((user) => {
      Follow.find({ _userFollow: user._id }, { _user: true }).then(
        (follows) => {
          let followsIds = follows.map((follow) => follow._user);
          res.json(followsIds.length);
        }
      );
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
}

function userFollowtoOtherUser(req, res) {
  User.findOne({ _id: req.auth.id })
    .then((userFollower) => {
      User.findOne({ _id: req.query.id })
        .then((userFollow) => {
          userFollower.follows.then((fav) => {
            const id = userFollow._id.toString();
            if (fav.includes(id)) {
              res.json({
                follow: true,
              });
            } else {
              res.json({
                follow: false,
              });
            }
          });
        })
        .catch((error) => {
          console.log(error);
          res.json({ error });
        });
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
}

//concatenate json to getFollowedBlogs and getFollowedProducts in order of creation date

function getFollowed(req, res) {
  User.findOne({ _id: req.auth.id })
    .then((user) => {
      user.follows.then((fav) => {
        Promise.all([
          Product.paginate(
            { _user: { $in: fav } },
            { page: req.query.page || 1, limit: 50, sort: { _id: -1 } }
          ),
          Blog.paginate(
            { _user: { $in: fav } },
            { page: req.query.page || 1, limit: 50, sort: { _id: -1 } }
          ),
        ]).then(([products, blogs]) => {
          let all = [...products.docs, ...blogs.docs];
          all.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          res.json(all);
        });
        });
      })
    .catch((error) => {

      console.log(error);
      res.json({ error });
    });
}

function show(req, res) {
  //Busqueda individual
  res.json(req.follow);
}

function create(req, res) {
  //Crear un nuevo lugar
  const params = helpers.paramsBuilder(validParams, req.body);
  params["_user"] = req.auth.id;
  Follow.create(params)
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}
function destroy(req, res) {
  req.follow
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
  findUserFollow,
  indexFollowers,
  show,
  create,
  destroy,
  find,
  userFollowtoOtherUser,
  getFollowed,
};
