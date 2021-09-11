// deve passar qual a tabela e as colunas do BD

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carros')
class Carro {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomeCarro: string;

  @Column()
  modeloCarro: string;
}

export default Carro;
