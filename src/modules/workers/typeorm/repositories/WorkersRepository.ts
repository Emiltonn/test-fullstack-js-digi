import { EntityRepository, Repository } from 'typeorm';
import Worker from '../entities/Worker';

@EntityRepository(Worker)
export class ProductRepository extends Repository<Worker> {
  public async findByDepartament(
    department: string,
  ): Promise<Worker | undefined> {
    const worker = this.findOne({
      where: {
        department,
      },
    });

    return worker;
  }
}
