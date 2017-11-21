import { Router } from 'express';
import UserController from '../controllers/user';

import * as filter from '../middleware/security';

let UserRouter = Router();

UserRouter.get('/', filter.adminFilter, UserController.list);
UserRouter.get('/:id', filter.studentFilter, UserController.get);
UserRouter.post('/', UserController.post);
UserRouter.put('/:id', filter.studentFilter, UserController.put);
UserRouter.delete('/:id', filter.studentFilter, UserController.delete);

export default UserRouter;