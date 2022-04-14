import * as pizzaService from '../services/pizza.service.js';

export const findAllPizzasController = (req, res) => {
  const pizzas = pizzaService.findAllPizzasSevice();

  res.send(pizzas);
};

export const findByIdPizzaController = (req, res) => {
  try {
    const idParametro = Number(req.params.id);

    if (!idParametro) {
      res.send({ message: 'Id não encontrado' });
      return;
    }

    const escolherPizza = pizzaService.findByIdPizzaService(idParametro);

    res.status(200).send(escolherPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createPizzaController = (req, res) => {
  try {
    const pizza = req.body;
    const newPizza = pizzaService.createPizzaService(pizza);

    res.send(newPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updatePizzaController = (req, res) => {
  try {
    const idParametro = Number(req.params.id);
    const editedPizza = req.body;
    const updatedPizza = pizzaService.updatePizzaService(
      idParametro,
      editedPizza,
    );

    res.status(200).send(updatedPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deletePizzaController = (req, res) => {
    
}
