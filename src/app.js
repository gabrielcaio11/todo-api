import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/test-db', async (req, res) => {
  try {
    const result = await mongoose.connection.db.admin().ping();
    res.json({
      message: 'Banco conectado com sucesso 🚀',
      result
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao conectar no banco'
    });
  }
});

export default app;