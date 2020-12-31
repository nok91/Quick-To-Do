import { Router } from 'express';
import controllers from './room.controllers';

const router = Router();

// /api/room
router.route('/').get(controllers.getMany).post(controllers.createOne);

// /api/room/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne);

export default router;
