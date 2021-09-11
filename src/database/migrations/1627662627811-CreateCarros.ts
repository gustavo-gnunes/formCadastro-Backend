// passa instruções para criar as tabelas no BD

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCarros1627662627811 implements MigrationInterface {
  // o que vai ser feito no BD, como alterção ou criação de novas tabelas ou campos
  public async up(queryRunner: QueryRunner): Promise<void> {
    // cria a tabela no BD
    await queryRunner.createTable(
      new Table({
        name: 'carros', // nome da tabela que vai ser criada no BD
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nomeCarro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'modeloCarro',
            type: 'varchar',
            isNullable: false,
          }
        ]
      })
    )
  }

  // reverter o que foi feito no modo up
  public async down(queryRunner: QueryRunner): Promise<void> {
    // deleta a tabela no BD
    await queryRunner.dropTable('carros');
  }

}
