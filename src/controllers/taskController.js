import {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService
} from '../services/taskService.js';

export const createTask = async (req, res, next) => {
  try {
    const task = await createTaskService(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return next(error);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasksService();
    return res.json(tasks);
  } catch (error) {
    return next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await getTaskByIdService(req.params.id);
    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await updateTaskService(req.params.id, req.body);
    return res.json(task);
  } catch (error) {
    return next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await deleteTaskService(req.params.id);
    return res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return next(error);
  }
};