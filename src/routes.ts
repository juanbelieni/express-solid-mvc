import { Router } from 'express';

import { createUserController } from './controllers/UserController/CreateUser';
import { loginController } from './controllers/UserController/Login';

const routes = Router();

routes.post('/user', async (request, response) => {
  await createUserController.handle(request, response);
});

routes.post('/login', async (request, response) => {
  await loginController.handle(request, response);
});

export default routes;
