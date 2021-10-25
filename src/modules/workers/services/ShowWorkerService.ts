import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkerRepository } from '../typeorm/repositories/WorkersRepository';
import Worker from '../typeorm/entities/Worker';

interface IRequest {
  id: string; //primarykey
}

class ShowWorkerService {
  public async execute({ id }: IRequest): Promise<Worker> {
    const workerRepository = getCustomRepository(WorkerRepository);

    const worker = await workerRepository.findOne(id);

    if (!worker) {
      throw new AppError('Worker not found.');
    }

    return worker;
  }
}

export default ShowWorkerService;
