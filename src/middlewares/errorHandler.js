export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // 🔥 erro do mongoose
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);

    return res.status(400).json({
      message: messages.join(', ')
    });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error'
  });
};