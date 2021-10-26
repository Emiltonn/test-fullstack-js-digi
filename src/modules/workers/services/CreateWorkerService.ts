import AppError from '@shared/errors/AppError';
import { WorkerRepository } from './../typeorm/repositories/WorkersRepository';
import { getCustomRepository } from 'typeorm';
import Worker from '../typeorm/entities/Worker';
import { hash } from 'bcryptjs';

interface IRequest {
  cpf: string;
  password: string;
  department_id: string;
  first_name: string;
  last_name: string;
}

class CreateWorkerService {
  public async execute({
    cpf,
    password,
    department_id,
    first_name,
    last_name,
  }: IRequest): Promise<Worker> {
    const workersRepository = getCustomRepository(WorkerRepository);
    const workerExists = await workersRepository.findByCpf(cpf);

    if (workerExists) {
      throw new AppError('There is already one worker with this CPF');
    }

    const hashedPassword = await hash(password, 8);

    const worker = workersRepository.create({
      cpf,
      password: hashedPassword,
      department_id:,
      first_name,
      last_name,
    });

    await workersRepository.save(worker);

    return worker;
  }
}

export default CreateWorkerService;
