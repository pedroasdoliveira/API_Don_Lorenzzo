import mongoose from 'mongoose';
import * as pizzaService from '../services/pizza.service.js';

export const findAllPizzasController = async (req, res) => {
  const allPizzas = await pizzaService.findAllPizzasSevice();

  if (allPizzas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma pizza cadastrada!' });
  }

  res.send(allPizzas);
};

export const findByIdPizzaController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const chosenPizza = await pizzaService.findByIdPizzaService(idParam);

    if (!chosenPizza) {
      res.status(404).send({ message: 'Id não encontrado' });
      return;
    }

    res.status(202).send(chosenPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createPizzaController = async (req, res) => {
  try {
    const pizza = req.body;

    if (
      !pizza ||
      !pizza.sabor ||
      !pizza.descricao ||
      !pizza.image ||
      !pizza.preco ||
      !pizza.avaliacao
    ) {
      return res.status(400).send({ message: 'Envie o objeto por completo!' });
    }

    const newPizza = await pizzaService.createPizzaService(pizza);

    res.status(201).send(newPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updatePizzaController = async (req, res) => {
  try {
    const idParam = req.params.id;  

    const editedPizza = req.body;

    if (
      !editedPizza ||
      !editedPizza.sabor ||
      !editedPizza.descricao ||
      !editedPizza.image ||
      !editedPizza.preco ||
      !editedPizza.avaliacao
    ) {
      return res.status(400).send({
        message: 'Erro na verificação! Envie todos os campos requisitados!',
      });
    }

    const updatedPizza = await pizzaService.updatePizzaService(
      idParam,
      editedPizza,
    );

    res.status(200).send(updatedPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deletePizzaController = async (req, res) => {
  try {
    const idParam = req.params.id;  

    await pizzaService.deletePizzaService(idParam);

    res.status(200).send({ message: 'Pizza excluida do catalogo com sucesso!' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
