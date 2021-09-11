import { getCustomRepository, getRepository } from 'typeorm';
import Carro from '../models/Carro';
import CarrosRepository from '../repositories/CarrosReository';

import AppError from '../error/AppError';

interface Request {
  id: string,
  // nomeCarro: string,
  // modeloCarro: string,
}

class DeleteCarroService{
  public async execute({ id }: Request): Promise<Carro>{
    const carrosRepository = getRepository(Carro);

    const carroExists = await carrosRepository.findOne(id);

    if (!carroExists) {
      throw new AppError('Car not exist.', 400);
    }

    // remover carro no BD
    await carrosRepository.remove(carroExists);

    return carroExists;

  }
}

export default DeleteCarroService;
