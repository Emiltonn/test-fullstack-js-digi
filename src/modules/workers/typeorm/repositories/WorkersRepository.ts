import { EntityRepository, Repository } from 'typeorm';
import Worker from '../entities/Worker';

@EntityRepository(Worker)
export class WorkerRepository extends Repository<Worker> {
  public async findByCpf(cpf: string): Promise<Worker | undefined> {
    const worker = this.findOne({
      where: {
        cpf,
      },
    });

    return worker;
  }
}
