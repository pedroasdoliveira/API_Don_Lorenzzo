import mongoose from 'mongoose';

const PizzaSchema = new mongoose.Schema({
  sabor: {
    type: String,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
  avaliacao: {
    type: Number,
    require: true,
  },
});

export const Pizza = mongoose.model('pizzas', PizzaSchema);

