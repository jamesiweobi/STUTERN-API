import client from '../database/db.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.query(
      'SELECT * FROM users ORDER BY userid ASC'
    );

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    throw err;
  }
};

export const homePage = (req, res) => {
  res.json({
    status: 'success',
    message: 'hello world',
  });
};
// create user
export const createUser = async (req, res) => {
  try {
    const { username, description } = req.body;
    const response = await client.query(
      'INSERT INTO users (username, description) VALUES ($1, $2) RETURNING *',
      [username, description]
    );
    res.status(200).send({ status: 'Successful', data: response.rows });
  } catch (err) {
    throw err;
  }
};

// Updating user info
export const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const { username, description } = req.body;

    const result = client.query(
      'UPDATE users SET username = $1, description = $2 WHERE userid = $3 RETURNING *',
      [username, description, id]
    );

    res
      .status(200)
      .send({ status: 'Succesful', message: 'user updated', data: result });

    // return res.status(401).send({ message: 'Failed to find user' });
  } catch (err) {
    throw err;
  }
};

// Deleting user
export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  client.query(
    'DELETE FROM users WHERE userid = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    }
  );
};
