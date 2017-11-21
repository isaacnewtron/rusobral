import { Router } from 'express';
import CommentController from '../controllers/comment';

import * as filter from '../middleware/security';

let CommentRouter = Router();

CommentRouter.get('/:meal', filter.studentFilter, CommentController.getCommentsMeal);
CommentRouter.post('/', filter.studentFilter, CommentController.post);
CommentRouter.put('/:id', filter.studentFilter, CommentController.put);
CommentRouter.delete('/:id', filter.studentFilter, CommentController.delete);

export default CommentRouter;