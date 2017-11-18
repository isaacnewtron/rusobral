import { Router } from 'express';
import MealController from '../controllers/meal';

import * as filter from '../middleware/security';

let MealRouter = Router();

MealRouter.get('/', filter.studentFilter, MealController.getList);
MealRouter.get('/:date', filter.studentFilter, MealController.getInterval);
MealRouter.post('/', filter.adminFilter, MealController.post);
MealRouter.delete('/:id', filter.adminFilter, MealController.delete);

export default MealRouter;