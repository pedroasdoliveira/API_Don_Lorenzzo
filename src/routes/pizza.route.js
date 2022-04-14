import express from "express";
import {findAllPizzasController, findByIdPizzaController, createPizzaController, updatePizzaController} from '../controllers/pizza.controller.js';

export const route = express.Router();

route.get('/catalogo-pizzas', findAllPizzasController);

route.get('/pizza/:id', findByIdPizzaController);

route.post('/create', createPizzaController);

route.put('/updated/:id', updatePizzaController);

route.delete('/delete/:id', );
