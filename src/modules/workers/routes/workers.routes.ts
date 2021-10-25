import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import WorkersController from '../controllers/WorkersController';

const workersRouter = Router();
const workersController = new WorkersController();

workersRouter.get('/', workersController.index);

workersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workersController.show,
);

workersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string().required(),
      password: Joi.string().required(),
      department: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
    },
  }),
  workersController.create,
);

workersRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      cpf: Joi.string().required(),
      password: Joi.string().required(),
      department: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workersController.update,
);

workersRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workersController.delete,
);

export default workersRouter;
