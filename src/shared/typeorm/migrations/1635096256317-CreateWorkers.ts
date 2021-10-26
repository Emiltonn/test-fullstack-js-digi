import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateWorkers1635096256317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workers',
        columns: [
          {
            name: 'id',
            type: 'uuid', //tipo unico universal
            isPrimary: true, //é chave primaria
            generationStrategy: 'uuid', //quando for inteiro, auto increment, utilize 'increment'
            default: 'uuid_generate_v4()',
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'department',
            type: 'varchar',
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('workers');
  }
}
