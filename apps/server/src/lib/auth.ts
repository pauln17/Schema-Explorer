import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma"

// Creating Better-Auth Instance w/ Prisma Adapter
export const auth = betterAuth({
  basePath: "/auth",  
  baseURL: "http://localhost:5001", // Server URL - set explicitly for security
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true, 
    },
    trustedOrigins: ['http://localhost:3000'], // Frontend origin - needed for cross-origin CSRF protection 
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
  },
});