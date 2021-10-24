import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class WorkerMigration1635096256317 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'workers',
        columns: [
          {
            name: 'idworker',
            type: 'int', //tipo unico universal ou inteiro
            isPrimary: true, //é chave primaria
            generationStrategy: 'increment', //quando for inteiro, auto increment, utilize 'increment'
          },
          {
            name: 'cpf',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'fisrt_name',
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
