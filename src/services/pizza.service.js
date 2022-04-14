const pizzas = [
  {
    id: 1,
    sabor: 'Mussarela',
    descricao:
      'Pizza com molho de tomate com recheio de mussarela por cima com ingredientes.',
    image: './assets/image/pizza.png',
    preco: 20.0,
    avaliacao: 5.1,
  },
  {
    id: 2,
    sabor: 'Americana',
    descricao: 'Pizza americana com diversos ingredientes',
    image: './assets/image/pizza4.png',
    preco: 23.0,
    avaliacao: 4.8,
  },
  {
    id: 3,
    sabor: 'Chocolate',
    descricao: 'Pizza doce de chocolate',
    image: './assets/image/pizza7.png',
    preco: 22.0,
    avaliacao: 5.0,
  },
  {
    id: 4,
    sabor: 'Cogumelo com tomate',
    descricao: 'Pizza de cogumelo com tomate',
    image: './assets/image/pizza3.png',
    preco: 24.0,
    avaliacao: 5.2,
  },
];

export const findAllPizzasSevice = () => {
  return pizzas;
};

export const findByIdPizzaService = (idParametro) => {
  const pizza = pizzas.find((pizza) => pizza.id === idParametro);
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
