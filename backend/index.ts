import express, { Express, Request, Response } from 'express';
import User from './classes/User';
import userController from './controllers/userController';

const app: Express = express();
app.use(express.json());

const port = 3001

let users:User[] = [];

userController(app, users);


app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
})