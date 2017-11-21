import { Router } from 'express';
import GradeController from '../controllers/grade';

import * as filter from '../middleware/security';

let GradeRouter = Router();

GradeRouter.get('/', filter.studentFilter, GradeController.list);
GradeRouter.get('/:menu', filter.studentFilter, GradeController.getGradesMenu);
GradeRouter.post('/', filter.studentFilter, GradeController.post);
GradeRouter.put('/:id', filter.studentFilter, GradeController.put);
GradeRouter.delete('/:id', filter.studentFilter, GradeController.delete);

export default GradeRouter;