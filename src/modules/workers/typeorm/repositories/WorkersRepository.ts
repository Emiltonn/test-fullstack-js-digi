import { EntityRepository, Repository } from 'typeorm';
import Worker from '../entities/Worker';

@EntityRepository(Worker)
export class WorkerRepository extends Repository<Worker> {
  public async findByDepartament(
    department: string,
  ): Promise<Worker | undefined> {
    const workerDepartment = this.findOne({
      where: {
        department,
      },
    });

    return workerDepartment;
  }
  public async findByCpf(cpf: string): Promise<Worker | undefined> {
    const workerCpf = this.findOne({
      where: {
        cpf,
      },
    });

    return workerCpf;
  }
}
