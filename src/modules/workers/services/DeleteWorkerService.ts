import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkerRepository } from '../typeorm/repositories/WorkersRepository';
import Worker from '../typeorm/entities/Worker';

interface IRequest {
  id: string; //primarykey
}

class DeleteWorkerService {
  public async execute({ id }: IRequest): Promise<Worker> {
    const workersRepository = getCustomRepository(WorkerRepository);

    const worker = await workersRepository.findOne(id);

    if (!worker) {
      throw new AppError('Worker not found.');
    }

    await workersRepository.remove(worker);

    return worker;
  }
}

export default DeleteWorkerService;
