import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ['http://localhost:5173', 'https://next-tasker-deploy.onrender.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/dist")))

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;
