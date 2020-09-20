const postDb = require("../models/post");

function getPosts(req, res, next) {
  postDb
    .getPosts()
    .then((data) => {
      res.locals.posts = data;
      next();
    })
    .catch(next);
}

function getPost(req, res, next) {
  postDb
    .getPost(req.params.id)
    .then((data) => {
      res.locals.posts = data;
      next();
    })
    .catch(next);
}

function getPostsByUsername(req, res, next) {
  postDb
    .getPostsByUsername(req.params.username)
    .then((data) => {
      res.locals.posts = data;
      next();
    })
    .catch(next);
}

function createPost(req, res, next) {
  postDb
    .createPost(req.body)
    .then((data) => {
      res.locals.posts = data;
      next();
    })
    .catch(next);
}

function updatePost(req, res, next) {
  req.body.id = req.params.id;
  postDb
    .updatePost(req.body)
    .then((data) => {
      console.log(data);
      res.locals.posts = data;
      next();
    })
    .catch(next);
}

function deletePost(req, res, next) {
  postDb
    .deletePost(req.params.id)
    .then(() => {
      next();
    })
    .catch(next);
}

module.exports = {
  getPosts,
  getPost,
  getPostsByUsername,
  createPost,
  updatePost,
  deletePost,
};
