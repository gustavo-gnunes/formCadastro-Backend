import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CarrosRepository from '../repositories/CarrosReository';
import CreateCarrosService from '../services/CreateCarroService';
import UpdateCarroService from '../services/UpdateCarroService';
import DeleteCarroService from '../services/DeleteCarroService';

const carrosRouter = Router();

// buscar carros
carrosRouter.get('/', async (request, response) => {
  // try {
    const carrosRepository = getCustomRepository(CarrosRepository);
    const carros = await carrosRepository.find(); // busca todos os dados

    return response.json(carros);
  // } catch (err) {
  //   return response.status(400).json({ error: err.message});
  // }
});

// gravar dados
carrosRouter.post('/', async (request, response) => {
  // try {
    const { nomeCarro, modeloCarro } = request.body;
    // console.log(nomeCarro);

    const createCarro = new CreateCarrosService();

    // grava os dados
    const carro = await createCarro.execute({
      // id,
      nomeCarro,
      modeloCarro,
    });

    return response.json(carro);
  // } catch (err) {
  //   return response.status(400).json({ error: err.message});
  // }
});

// alterar carro
carrosRouter.put('/carro', async (request, response) => {
  // try {
    // request.body-> informações do que foi digitado pelo usuário
    const { id, nomeCarro, modeloCarro } = request.body;

    const updateCarro = new UpdateCarroService();

    const carro = await updateCarro.execute({
      id,
      nomeCarro,
      modeloCarro,
    })

    // console.log(id, nomeCarro, modeloCarro);
    // console.log(request.body);

    return response.json(carro);
  // } catch (err) {
  //   return response.status(err.stateCode).json({ error: err.message});
  // }
})

// deleta carro
carrosRouter.delete('/delete/:id', async (request, response) => {
  // try {
    // request.body-> informações do que foi digitado pelo usuário
    // const { id, nomeCarro, modeloCarro } = request.body;
    const { id } = request.params;

    const deleteCarro = new DeleteCarroService();

    const carro = await deleteCarro.execute({
      id,
      // nomeCarro,
      // modeloCarro,
    })

    // console.log(id, nomeCarro, modeloCarro);
    // console.log(request.body);

    return response.json(carro);
  // } catch (err) {
  //   return response.status(err.stateCode).json({ error: err.message});
  // }
})

export default carrosRouter;
