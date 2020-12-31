import { crudControllers } from '../../utils/crud';
import Task from './task.model';

export const getOneTask = async (req, res) => {
  try {
    const doc = await Task.find({ room: req.query.room }).lean().exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json(doc);
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export default crudControllers(Task);
