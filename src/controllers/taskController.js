import {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService
} from '../services/taskService.js';

export const createTask = async (req, res) => {
  try {
    const task = await createTaskService(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await getTaskByIdService(req.params.id);
    return res.json(task);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await updateTaskService(req.params.id, req.body);
    return res.json(task);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await deleteTaskService(req.params.id);
    return res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};