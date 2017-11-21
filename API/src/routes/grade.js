import { Router } from 'express';
import GradeController from '../controllers/grade';

import * as filter from '../middleware/security';

let GradeRouter = Router();

//GradeRouter.get('/:menu', filter.studentFilter, GradeController.getGradesMenu);
//GradeRouter.post('/', filter.adminFilter, GradeController.post);
//GradeRouter.delete('/:id', filter.adminFilter, GradeController.delete);

export default GradeRouter;