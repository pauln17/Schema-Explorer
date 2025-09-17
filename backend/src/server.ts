import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient()
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware (optional)
const allowedOrigins = [
    'http://localhost:4000'
];

app.use(
    cors({
        origin: allowedOrigins,
    })
);
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});