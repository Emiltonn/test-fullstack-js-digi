import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddDepartmentIdToWorkers1635216709364
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'workers',
      new TableColumn({
        name: 'department_id',
        type: 'uuid',
        isNullable: true, //Solução quando não se usa SoftDelete
      }),
    );

    await queryRunner.createForeignKey(
      'workers',
      new TableForeignKey({
        name: 'WorkersDepartment',
        columnNames: ['department_id'],
        referencedTableName: 'departments',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('workers', 'WorkersDepartment');
    await queryRunner.dropColumn('orders', 'customer_id');
  }
}
