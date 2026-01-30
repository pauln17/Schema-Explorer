import { Request, Response, NextFunction } from 'express';
import { auth } from '../lib/auth';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({
        headers: req.headers,
    });
    if (!session?.user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = session.user;
    next();
};