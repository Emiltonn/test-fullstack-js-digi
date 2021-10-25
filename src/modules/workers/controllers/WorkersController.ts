import { Request, Response } from 'express';
import CreateWorkerService from '../services/CreateWorkerService';
import DeleteWorkerService from '../services/DeleteWorkerService';
import ListWorkerService from '../services/ListWorkerService';
import ShowWorkerService from '../services/ShowWorkerService';
import UpdateWorkerService from '../services/UpdateWorkerService';

export default class WorkersController {
  public async index(request: Request, response: Response): Promise<Response> {
    //Instancia da classe que possui o método que lista os colaboradores
    const listWorkers = new ListWorkerService();

    const workers = await listWorkers.execute();

    return response.json(workers);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { idworker } = request.params;

    const showWorker = new ShowWorkerService();

    const worker = await showWorker.execute({ idworker });

    return response.json(worker);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, password, department, first_name, last_name } = request.body;

    const createWorker = new CreateWorkerService();

    const worker = await createWorker.execute({
      cpf,
      password,
      department,
      first_name,
      last_name,
    });

    return response.json(worker);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cpf, password, department, first_name, last_name } = request.body;
    const { idworker } = request.params;

    const updateWorker = new UpdateWorkerService();

    const worker = await updateWorker.execute({
      idworker,
      cpf,
      password,
      department,
      first_name,
      last_name,
    });

    return response.json(worker);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { idworker } = request.params;

    const deleteWorker = new DeleteWorkerService();

    await deleteWorker.execute({ idworker });

    return response.json([]);
  }
}
