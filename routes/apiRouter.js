const apiRouter = require("express").Router();
const postRouter = require("./postRouter");
const authRouter = require("./authRouter");

apiRouter.use("/auth", authRouter);
apiRouter.use("/posts", postRouter);

module.exports = apiRouter;
