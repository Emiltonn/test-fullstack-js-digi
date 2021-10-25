import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    const createSession = new CreateSessionsService();

    const worker = await createSession.execute({
      cpf,
      password,
    });

    return response.json(worker);
  }
}
