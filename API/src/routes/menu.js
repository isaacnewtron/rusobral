import { Router } from 'express';
import MenuController from '../controllers/menu';

import * as filter from '../middleware/security';

let MenuRouter = Router();

MenuRouter.get('/', filter.studentFilter, MenuController.getList);
MenuRouter.get('/:meal', filter.studentFilter, MenuController.getMeal);
MenuRouter.post('/', filter.adminFilter, MenuController.post);
MenuRouter.delete('/:meal', filter.adminFilter, MenuController.delete);

export default MenuRouter;