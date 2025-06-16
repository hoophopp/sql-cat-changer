CREATE TABLE calos (
  id SERIAL PRIMARY KEY,
  cat_name VARCHAR(100)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);
