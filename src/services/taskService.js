import Task from '../models/Task.js';

export const createTaskService = async (data) => {
  if (!data.title) {
    throw new Error('Title is required');
  }

  return await Task.create(data);
};

export const getAllTasksService = async () => {
  return await Task.find();
};

export const getTaskByIdService = async (id) => {
  const task = await Task.findById(id);

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};

export const updateTaskService = async (id, data) => {
  const updatedTask = await Task.findByIdAndUpdate(id, data, {
    new: true
  });

  if (!updatedTask) {
    throw new Error('Task not found');
  }

  return updatedTask;
};

export const deleteTaskService = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);

  if (!deletedTask) {
    throw new Error('Task not found');
  }

  return;
};