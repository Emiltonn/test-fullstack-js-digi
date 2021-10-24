import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { WorkerRepository } from '../typeorm/repositories/WorkersRepository';
import Worker from '../typeorm/entities/Worker';

interface IRequest {
  idworker: number;
  cpf: string;
  password: string;
  department: string;
  first_name: string;
  last_name: string;
}

class UpdateWorkerService {
  public async execute({
    idworker,
    cpf,
    password,
    department,
    first_name,
    last_name,
  }: IRequest): Promise<Worker> {
    const workersRepository = getCustomRepository(WorkerRepository);

    const worker = await workersRepository.findOne(idworker);

    //se o produtos não existir
    if (!worker) {
      throw new AppError('Worker not found.');
    }

    const workerExists = await workersRepository.findByCpf(cpf);

    //se o produto existir
    if (workerExists && cpf != worker.cpf) {
      throw new AppError('There is already one worker with this CPF');
    }

    worker.cpf = cpf;
    worker.password = password;
    worker.department = department;
    worker.first_name = first_name;
    worker.last_name = last_name;

    await workersRepository.save(worker);

    return worker;
  }
}

export default UpdateWorkerService;
