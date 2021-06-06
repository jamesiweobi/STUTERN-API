import express from 'express';
import cors from 'cors';
import client from './database/db.js';
import path from 'path';
import {
  homePage,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from './queries/routes.js';
const app = express();
const port = process.env.PORT || 8000;

client.connect();
app.use(cors());
app.use(express.json());

// app.use(express.static('./client/testimonials-grid-section-main'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('./client/testimonials-grid-section-main')));
}

// Home Page
// app.get('/', homePage);

//create
app.post('/users', createUser);

//read
app.get('/users', getUsers);

//update
app.put('/users/:id', updateUser);

//delete
app.delete('/users/:id', deleteUser);

// server
app.listen(port, () => {
  console.log(`Server connected at  http://localhost:${port}`);
});
