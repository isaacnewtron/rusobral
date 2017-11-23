import { Router } from 'express';
import OptionController from '../controllers/option';

import * as filter from '../middleware/security';

let OptionRouter = Router();

OptionRouter.get('/', filter.studentFilter, OptionController.getList);
OptionRouter.get('/:poll', filter.studentFilter, OptionController.getPoll);
OptionRouter.post('/', filter.adminFilter, OptionController.post);
OptionRouter.put('/:id', filter.adminFilter, OptionController.put);
OptionRouter.delete('/:id', filter.adminFilter, OptionController.delete);

export default OptionRouter;