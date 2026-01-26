// DotENV
import "dotenv/config"

// General
import express, { Request, Response } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';

// Route Imports
import userRoutes from "./routes/user";

const app = express();

// Middleware - CORS: Only allow requests from the frontend
const allowedOrigins = [
    'http://localhost:3000'  // Next.js frontend (default port)
];

app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Uses (toNodeHandler) to adapt auth (Better-Auth router instance) in a way Express understands. TLDR: Handles Better-Auth Requests from Frontend
// Note: express.json() should NOT be applied before the auth handler
app.all('/api/auth/{*any}', toNodeHandler(auth));

// Apply express.json() only to routes that need it (after auth handler)
app.use(express.json()); 

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

