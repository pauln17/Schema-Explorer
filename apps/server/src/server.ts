// DotENV
import dotenv from 'dotenv';
dotenv.config({ path: "../.env" });

// General
import express, { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';

// Route Imports
import userRoutes from "./routes/user";

const app = express();

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

// Uses (toNodeHandler) to adapt auth (Better-Auth router instance) in a way Express understands. TLDR: Handles Better-Auth Requests from Frontend
app.all('/api/auth/{*any}', toNodeHandler(auth)); 

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

