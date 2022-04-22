import express from 'express';
import {
  findAllPizzasController,
  findByIdPizzaController,
  createPizzaController,
  updatePizzaController,
  deletePizzaController,
} from '../controllers/pizza.controller.js';
import { validId, validObjectBody } from '../middlewares/pizza.middleware.js';

export const route = express.Router();

route.get('/catalog-pizzas', findAllPizzasController);

route.get('/pizza/:id', validId, findByIdPizzaController);

route.post('/create', createPizzaController);

route.put('/updated/:id', validId, updatePizzaController);

route.delete('/delete/:id', validId, deletePizzaController);
