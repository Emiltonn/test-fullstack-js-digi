import sessionsRouter from '@modules/workers/routes/sessions.routes';
import workersRouter from '@modules/workers/routes/workers.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/workers', workersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
