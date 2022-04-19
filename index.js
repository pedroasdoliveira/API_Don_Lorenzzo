import express from 'express';
import cors from 'cors';
import { route } from './src/routes/pizza.route.js';
import {connectToDatabase} from './src/database/database.js';

const app = express();
connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/pizzas', route);

// ----------------------------- Porta ------------------------------------------------

const port = 3002;

app.listen(port, () => {
  console.log(
    `Aplicação rodando na porta ${port} em http://localhost:${port}/pizzas/catalogo-pizzas 🚀.`,
  );
});
