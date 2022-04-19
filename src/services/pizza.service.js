import { Pizza } from '../models/Pizza.js'

export const findAllPizzasSevice = async () => {
  const pizzas = await Pizza.find();
  return pizzas;
};

export const findByIdPizzaService = async (idParametro) => {
  const pizza = await Pizza.findById(idParametro)
  return pizza;
};

export const createPizzaService = (newPizza) => {
  const newId = pizzas.length + 1;
  newPizza.id = newId;
  pizzas.push(newPizza);
  return newPizza;
};

export const updatePizzaService = (id, editedPizza) => {
  editedPizza['id'] = id;
  const index = pizzas.findIndex((pizza) => pizza.id == editedPizza);
  pizzas[index] = editedPizza;
  return editedPizza;
};

export const deletePizzaService = (id) => {
  const index = pizzas.findIndex((pizza) => pizza.id == id);
  return pizzas.splice(index, 1);
};
