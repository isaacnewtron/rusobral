import { Router } from 'express';
import VoteController from '../controllers/vote';

import * as filter from '../middleware/security';

let VoteRouter = Router();

VoteRouter.get('/', filter.studentFilter, VoteController.getList);
VoteRouter.get('/:option', filter.studentFilter, VoteController.getOption);
VoteRouter.post('/', filter.adminFilter, VoteController.post);
VoteRouter.put('/:id', filter.adminFilter, VoteController.put);
VoteRouter.delete('/:id', filter.adminFilter, VoteController.delete);

export default VoteRouter;