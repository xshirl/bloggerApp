const router = require("express").Router();

const postController = require("../controllers/postController");
const authController = require("../controllers/authController");
const respController = require("../controllers/respController");

router
  .route("/")
  .get(
    authController.restrict,
    postController.getPosts,
    respController.sendStatus,
    respController.sendError
  )
  .post(
    authController.restrict,
    postController.createPost,
    respController.sendStatus,
    respController.sendError
  );

router
  .route("/user/:username")
  .get(
    authController.restrict,
    postController.getPostsByUsername,
    respController.sendError,
    respController.sendStatus
  );

router
  .route("/:id")
  .get(
    authController.restrict,
    postController.getPost,
    respController.sendStatus,
    respController.sendError
  )
  .put(
    authController.restrict,
    postController.updatePost,
    respController.sendError,
    respController.sendStatus
  )
  .delete(
    authController.restrict,
    postController.deletePost,
    respController.sendStatus,
    respController.sendError
  );

module.exports = router;
