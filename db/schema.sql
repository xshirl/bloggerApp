\c blogs

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  pw_digest VARCHAR(255),
  username VARCHAR(255)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  img TEXT,
  title TEXT,
  post_date DATE NOT NULL DEFAULT CURRENT_DATE,
  content TEXT,
  user_id INTEGER REFERENCES users(id)
);
