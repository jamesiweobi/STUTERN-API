CREATE TABLE users(
  userid SERIAL PRIMARY KEY, 
  username VARCHAR(100) NOT NULL,
  description VARCHAR(300) NOT NULL
)
