import express from 'express';
import cors from 'cors';
import client from './database/db.js';
import {
  homePage,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from './queries/routes.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

client.connect();

// Home Page
app.get('/', homePage);

//create
app.post('/users', createUser);

//read
app.get('/users', getUsers);

//update
app.put('/users/:id', updateUser);

//delete
app.delete('/users/:id', deleteUser);

app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
