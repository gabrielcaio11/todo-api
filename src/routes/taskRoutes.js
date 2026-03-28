import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

import { validateTask } from '../middlewares/validateTask.js';

const router = express.Router();

router.post('/', validateTask, createTask);

router.get('/', getAllTasks);

router.get('/:id', getTaskById);

router.put('/:id', validateTask, updateTask);

router.delete('/:id', deleteTask);

export default router;