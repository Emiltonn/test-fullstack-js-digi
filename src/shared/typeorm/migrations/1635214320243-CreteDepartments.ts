import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartments1635214320243 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'departments',
        columns: [
          {
            name: 'id',
            type: 'uuid', //tipo unico universal
            isPrimary: true, //é chave primaria
            generationStrategy: 'uuid', //quando for inteiro, auto increment, utilize 'increment'
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }
}
