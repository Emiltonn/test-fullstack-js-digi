import { getCustomRepository } from 'typeorm';
import { WorkerRepository } from './../typeorm/repositories/WorkersRepository';
import Worker from '../typeorm/entities/Worker';

class ListWorkerService {
  // eslint-disable-next-line prettier/prettier
  public async execute(): Promise<Worker[]> {
    const workersRepository = getCustomRepository(WorkerRepository);

    const workers = workersRepository.find();

    return workers;
  }
}

export default ListWorkerService;
