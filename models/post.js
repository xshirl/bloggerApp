const db = require("../config/connection");

function getPosts() {
  return db.any(
    `
  SELECT a.id, a.img, a.title, a.content, a.post_date, b.username FROM posts a
  JOIN users b
  ON a.user_id = b.id
  ORDER BY DATE(a.post_date, 109) DESC`
  );
}

function getPostsByUsername(username) {
  return db.any(
    `SELECT a.id, a.img, a.title, a.content, a.post_date, b.username FROM posts a
    JOIN users b
    ON a.user_id = b.id
    WHERE b.username = $1
    ORDER BY DATE(a.post_date) DESC`,
    username
  );
}

function getPost(id) {
  return db.one(
    `
  SELECT * FROM posts
  WHERE id= $1`,
    id
  );
}

function createPost(post) {
  return db.one(
    `
  INSERT INTO posts (img, title, content, user_id)
  VALUES ($/img/, $/title/, $/content/, $/user_id/)
  RETURNING *`,
    post
  );
}

function deletePost(id) {
  return db.none(
    `DELETE FROM posts
  WHERE id =$1`,
    id
  );
}

function updatePost(post) {
  return db.one(
    `
  UPDATE posts
  SET img=$/img/, title=$/title/, content=$/content/, user_id = $/user_id/
  WHERE id=$/id/
  RETURNING *`,
    post
  );
}

module.exports = {
  getPosts,
  getPost,
  getPostsByUsername,
  createPost,
  deletePost,
  updatePost,
};
