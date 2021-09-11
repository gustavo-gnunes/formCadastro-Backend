// só criou este componente, pq precisa fazer uma função para procurar um determinado carro
// fazer create, read, update, delete no BD

import Carro from '../models/Carro';
import { EntityRepository, Repository } from 'typeorm';


// extends Repository-> server para pegar o métodos create, read, update, delete que vem no typeorm por padrão
@EntityRepository(Carro)
class CarrosRepository extends Repository<Carro> {
  // o findByNomeCarro cria, pq não tem esse método dentro do typeorm por padrão
  // essa função serve para procurar no BD, se já tem carro com o nome que está querendo casdastrar
  public async findByNomeCarro(nomeCarro: string): Promise<Carro | null> {
    // deve colocar await, pq o metodo findOne é uma Promise e demora para executar, coloca o await para esperar a execução
    const findCarro = await this.findOne({
      where: { nomeCarro },
    });

    return findCarro || null;
  }

  // procura um carro pelo id
  // public async findByIdCarro(id: string): Promise<Carro | null> {
  //   // deve colocar await, pq o metodo findOne é uma Promise e demora para executar, coloca o await para esperar a execução
  //   const findCarro = await this.findOne({
  //     where: { id },
  //   });

  //   return findCarro || null;
  // }
}

export default CarrosRepository;
