import { Pizza } from '../models/Pizza.js'

export const findAllPizzasSevice = async () => {
  const pizzas = await Pizza.find();
  return pizzas;
};

export const findByIdPizzaService = async (idParametro) => {
  const pizza = await Pizza.findById(idParametro)
  return pizza;
};

export const createPizzaService = async (newPizza) => {
  const pizzaAdd = await Pizza.create(newPizza)
  return pizzaAdd;
};

export const updatePizzaService = async (id, editedPizza) => {
  const pizzaUpdate = await Pizza.findByIdAndUpdate(id, editedPizza);
  return pizzaUpdate;
};

export const deletePizzaService = (id) => {
  const index = pizzas.findIndex((pizza) => pizza.id == id);
  return pizzas.splice(index, 1);
};
