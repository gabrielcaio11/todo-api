import { AppError } from "../utils/AppError.js";

export const validateTask = (req, res, next) => {
  const { title, description, completed } = req.body;

  if (!title) {
    return next(new AppError("Title is required", 400));
  }

  if (title.length < 3) {
    return next(new AppError("Title must be at least 3 characters", 400));
  }

  if (description && typeof description !== "string") {
    return next(new AppError("Description must be a string", 400));
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return next(new AppError("Completed must be boolean", 400));
  }

  next();
};
