// fazer create, read, update, delete no BD
// consegue executar esses métodos pq está importando CarrosRepository
// caso não precisa fazer o componete CarrosRepository, era só usar o repositorio do próprio typeorm, para conseguir usar os métodos get e set
//  -> Ex: importa o getCustomRepository, e em vez dele receber CarrosRepository, ele recebe Carro: getCustomRepository(Carro)

import { getCustomRepository } from 'typeorm';
import Carro from '../models/Carro';
import CarrosRepository from '../repositories/CarrosReository';

import AppError from '../error/AppError';

interface Request {
  // id: string;
  nomeCarro: string;
  modeloCarro: string
}

class CreateCarrosService {
  public async execute({ nomeCarro, modeloCarro }: Request): Promise<Carro> {
    const carrosRepository = getCustomRepository(CarrosRepository);

    // findByNomeCarro: procura se tem o nome do carro já cadastrado no BD
    const findCarroInSameName = await carrosRepository.findByNomeCarro(
      nomeCarro,
    );
    // se já estiver no BD carro que está querendo cadastrar, ele não deixa cadastrar novamente e aparece essa msg de erro
    if (findCarroInSameName) {
      throw new AppError('This car is already booked', 400);
    }


    // cria uma instancia mas não salva no BD, para salvar deve usar o save
    const carro = carrosRepository.create({
      nomeCarro,
      modeloCarro,
    })
    // salvar no BD
    await carrosRepository.save(carro)

    return  carro;
  }
}

export default CreateCarrosService;
