import { Router } from 'express';
import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();

workersRouter.get('/', workersController.index);
workersRouter.get('/:id', workersController.show);
workersRouter.post('/', workersController.create);
workersRouter.put('/:id', workersController.update);
workersRouter.delete('/:id', workersController.delete);

export default workersRouter;
