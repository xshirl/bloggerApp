const tokenService = require("../services/tokenService");
const authDb = require("../models/user");

function register(req, res) {
  authDb
    .register(req.body)
    .then((data) =>
      tokenService.makeToken({
        id: data.id,
        username: data.username,
        email: data.email,
      })
    )
    .then((token) => {
      res.json({
        token,
      });
    })
    .catch((err) =>
      res.json({
        message: "err.message",
      })
    );
}

function login(req, res) {
  authDb
    .login(req.body)
    .then((data) =>
      tokenService.makeToken({
        id: data.id,
        email: data.email,
      })
    )
    .then((token) => {
      res.json({
        token,
      });
    })
    .catch((err) =>
      res.json({
        status: "Error",
        message: "Email and/or password is incorrect",
      })
    );
}

function receiveToken(req, res, next) {
  if (req.headers.authorization) {
    req.authToken = req.headers.authorization.split(" ")[1];
  }
  next();
}

function restrict(req, res, next) {
  req.authToken = req.headers.authorization.split(" ")[1];
  console.log(req.authToken);
  tokenService
    .verify(req.authToken)
    .then((data) => {
      res.locals.user = data;
      next();
    })
    .catch((err) =>
      res.status(401).json({
        status: "Error",
        message: "Invalid email or password",
      })
    );
}

function updateUser(req, res, next) {
  authDb
    .updateUser(req.body)
    .then((data) =>
      tokenService.makeToken({
        id: data.id,
        username: data.username,
        email: data.email,
      })
    )
    .then((token) => {
      res.json({
        token,
      });
    })
    .catch((err) =>
      res.status(401).json({
        status: "Error",
        message: "Username and email were not updated",
      })
    );
}

const verifyUser = async (req, res) => {
  try {
    req.authToken = req.headers.authorization.split(" ")[1];
    console.log(req.authToken);
    const legit = await tokenService.verify(req.authToken);
    if (legit) {
      const user = await authDb.userProfile(legit.id);
      const profile = {
        id: user.id,
        username: user.username,
        email: user.email,
      };
      return res.status(200).json({ user: profile });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  receiveToken,
  restrict,
  updateUser,
  verifyUser,
};
