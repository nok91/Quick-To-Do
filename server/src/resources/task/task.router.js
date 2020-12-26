import { Router } from 'express';
import controllers, { getOneTask } from './task.controllers';

const router = Router();

// /api/task
router.route('/').get(getOneTask).post(controllers.createOne);

// /api/task/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
