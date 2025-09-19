import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

import express, { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';

import { prisma } from "./lib/prisma";


const app = express();
const PORT = 5001;

// Uses (toNodeHandler) to adapt auth (Better-Auth router instance) in a way Express understands
app.all('/api/auth/{*any}', toNodeHandler(auth)); 

// Middleware (optional)
const allowedOrigins = [
    'http://localhost:5001'
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

