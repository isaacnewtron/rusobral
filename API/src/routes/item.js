import { Router } from 'express';
import ItemController from '../controllers/item';

import * as filter from '../middleware/security';

let ItemRouter = Router();

ItemRouter.get('/', filter.adminFilter, ItemController.getList);
ItemRouter.get('/:id', filter.adminFilter, ItemController.getId);
ItemRouter.get('/:type', filter.adminFilter, ItemController.getType);
ItemRouter.post('/', filter.adminFilter, ItemController.post);
ItemRouter.put('/:id', filter.adminFilter, ItemController.put);
ItemRouter.delete('/:id', filter.adminFilter, ItemController.delete);

export default ItemRouter;