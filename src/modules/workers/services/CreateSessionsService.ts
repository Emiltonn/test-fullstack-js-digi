import AppError from '@shared/errors/AppError';
import { WorkerRepository } from './../typeorm/repositories/WorkersRepository';
import { getCustomRepository } from 'typeorm';
import Worker from '../typeorm/entities/Worker';
import { compare } from 'bcryptjs';

interface IRequest {
  cpf: string;
  password: string;
}

interface IResponse {
  worker: Worker;
}

class CreateSessionsService {
  public async execute({ cpf, password }: IRequest): Promise<IResponse> {
    const workersRepository = getCustomRepository(WorkerRepository);
    const worker = await workersRepository.findByCpf(cpf);

    if (!worker) {
      throw new AppError('Incorret cpf/password combination.', 401);
    }

    const passwordConfirmed = await compare(password, worker.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorret cpf/password combination.', 401);
    }

    await workersRepository.save(worker);

    return worker;
  }
}

export default CreateSessionsService;
