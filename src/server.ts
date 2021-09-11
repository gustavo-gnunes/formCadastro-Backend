import 'reflect-metadata';

import express, { Request, Response, NextFunction} from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import AppError from './error/AppError';

// importar conexão com o BD
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// fazer tratativas de erros, para não precisar usar try catch em todos os arquivos que estão dentro da pasta routes
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // se cair dentro do if, quer dizer que o erro vem de dentro da aplicação, é um erro que foi colocado por mim
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error(err);

  // é algum erro que eu não tratei dentro da aplicação
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})



app.listen(3333, () => {
  console.log('Server start on port 3333!');
})
