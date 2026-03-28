import Task from '../models/Task.js';
import { AppError } from '../utils/AppError.js';

export const createTaskService = async (data) => {
  if (!data.title) {
    throw new AppError('Title is required', 400);
  }

  return await Task.create(data);
};

export const getAllTasksService = async () => {
  return await Task.find();
};

export const getTaskByIdService = async (id) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  return task;
};

export const updateTaskService = async (id, data) => {
  const updatedTask = await Task.findByIdAndUpdate(id, data, {
    new: true
  });

  if (!updatedTask) {
    throw new AppError('Task not found', 404);
  }

  return updatedTask;
};

export const deleteTaskService = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    throw new AppError('Task not found', 404);
  }

  return;
};