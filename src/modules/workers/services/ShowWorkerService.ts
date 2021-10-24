import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkerRepository } from '../typeorm/repositories/WorkersRepository';
import Worker from '../typeorm/entities/Worker';

interface IRequest {
  idworker: string; //primarykey
}

class ShowWorkerService {
  public async execute({ idworker }: IRequest): Promise<Worker> {
    const workerRepository = getCustomRepository(WorkerRepository);

    const worker = await workerRepository.findOne(idworker);

    if (!worker) {
      throw new AppError('Worker not found.');
    }

    return worker;
  }
}

export default ShowWorkerService;
