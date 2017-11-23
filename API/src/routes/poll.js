import { Router } from 'express';
import PollController from '../controllers/poll';

import * as filter from '../middleware/security';

let PollRouter = Router();

PollRouter.get('/', filter.studentFilter, PollController.getList);
PollRouter.get('/:id', filter.studentFilter, PollController.getId);
PollRouter.post('/', filter.adminFilter, PollController.post);
PollRouter.put('/:id', filter.adminFilter, PollController.put);
PollRouter.delete('/:id', filter.adminFilter, PollController.delete);

export default PollRouter;