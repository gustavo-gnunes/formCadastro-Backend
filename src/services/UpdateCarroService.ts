import { getRepository, getCustomRepository } from 'typeorm';
import Carro from '../models/Carro';

import CarrosRepository from '../repositories/CarrosReository';

import AppError from '../error/AppError';

interface Request {
  id: string;
  nomeCarro: string;
  modeloCarro: string;
}

class UpdateCarroService {
  public async execute({ id, nomeCarro, modeloCarro }: Request): Promise<Carro> {
    // para usar os métodos get, set, findOne do typeorm
    const carrosRepository = getRepository(Carro);
    // const carrosRepository = getCustomRepository(CarrosRepository);

    // findByIdCarro: procura se tem o id do carro já cadastrado no BD
    // const carroExists = await carrosRepository.findByIdCarro(
    //   id,
    // );

    // procura se tem o id do carro já cadastrado no BD
    const carroExists = await carrosRepository.findOne(id)

    // se não achar no BD o id do carro, ele não existe e aparece essa msg de erro
    if (!carroExists) {
      throw new AppError('Car not exist.', 400);
    }

    // procura se tem um id no BD igual o que foi passado pelo usuário
    // const carro = await carrosRepository.findOne(id);

    // carroExists.id = id;
    // carroExists.nomeCarro = nomeCarro;
    // carroExists.modeloCarro = modeloCarro;


    // para alterar os dados. Cria uma instancia mas não salva no BD, para salvar deve usar o save
    const carroUpdate = carrosRepository.create({
      id,
      nomeCarro,
      modeloCarro,
    })


    // atualiza alteração no BD
    await carrosRepository.save(carroUpdate);

    return carroUpdate;
  }
}

export default UpdateCarroService;
