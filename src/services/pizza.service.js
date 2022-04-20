import { Pizza } from '../models/Pizza.js'

export const findAllPizzasSevice = async () => {
  const allPizzas = await Pizza.find();
  return allPizzas;
};

export const findByIdPizzaService = async (idParam) => {
  const pizza = await Pizza.findById(idParam)
  return pizza;
};

export const createPizzaService = async (newPizza) => {
  const addPizza = await Pizza.create(newPizza)
  return addPizza;
};

export const updatePizzaService = async (idParam, editedPizza) => {
  const updatePizza = await Pizza.findByIdAndUpdate(idParam, editedPizza);
  return updatePizza;
};

export const deletePizzaService = async (idParam) => {
  return await Pizza.findByIdAndDelete(idParam);
};
