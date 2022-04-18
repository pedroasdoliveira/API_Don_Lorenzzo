import * as pizzaService from '../services/pizza.service.js';

export const findAllPizzasController = (req, res) => {
  const pizzas = pizzaService.findAllPizzasSevice();

  if (pizzas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma pizza cadastrada!' });
  }

  res.send(pizzas);
};

export const findByIdPizzaController = (req, res) => {
  try {
    const idParametro = Number(req.params.id);

    const escolherPizza = pizzaService.findByIdPizzaService(idParametro);

    if (escolherPizza == undefined) {
      res.status(404).send({ message: 'Id não encontrado' });
      return;
    }

    res.status(202).send(escolherPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const createPizzaController = (req, res) => {
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

    const newPizza = pizzaService.createPizzaService(pizza);

    res.status(201).send(newPizza);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updatePizzaController = (req, res) => {
  try {
    const idParametro = Number(req.params.id);
    const editedPizza = req.body;

    if (
      !editedPizza ||
      !editedPizza.sabor ||
      !editedPizza.descricao ||
      !editedPizza.image ||
      !editedPizza.preco ||
      !editedPizza.avaliacao
    ) {
      return res.status(400).send({ message: 'Erro na verificação! Envie todos os campos requisitados!' });
    }

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
  try {
    const idParametro = req.params.id;

    if (!idParametro) {
      return res.status(400).send({message: 'Id inválido!'});
    }

    pizzaService.deletePizzaService(idParametro);

    res.status(200).send({ message: 'Pizza excluida do catalogo com sucesso' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
