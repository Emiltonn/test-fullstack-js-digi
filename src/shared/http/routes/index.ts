import workersRouter from '@modules/workers/routes/workers.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/workers', workersRouter);

export default routes;
