import mongoose from 'mongoose';

export const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/pizzas-db', {
      // encontrar na documentação
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB CONNECT!');
    })
    .catch((err) => {
      console.log(`Erro ao conectar com o MongoDB. Erro: ${err}`);
    });
};


