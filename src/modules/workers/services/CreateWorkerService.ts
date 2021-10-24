import AppError from '@shared/errors/AppError';
import { WorkerRepository } from './../typeorm/repositories/WorkersRepository';
import { getCustomRepository } from 'typeorm';
import Worker from '../typeorm/entities/Worker';

interface IRequest {
  cpf: string;
  password: string;
  department: string;
  first_name: string;
  last_name: string;
}

class CreateWorkerService {
  public async execute({
    cpf,
    password,
    department,
    first_name,
    last_name,
  }: IRequest): Promise<Worker> {
    const workersRepository = getCustomRepository(WorkerRepository);
    const workerExists = await workersRepository.findByCpf(cpf);

    if (workerExists) {
      throw new AppError('There is already one worker with this name');
    }

    const worker = workersRepository.create({
      cpf,
      password,
      department,
      first_name,
      last_name,
    });

    await workersRepository.save(worker);

    return worker;
  }
}

export default CreateWorkerService;
