import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const getColumnById = async (req: Request, res: Response) => {};

const getColumnsByTableId = async (req: Request, res: Response) => {};

const createColumn = async (req: Request, res: Response) => {};

const updateColumn = async (req: Request, res: Response) => {};

const deleteColumn = async (req: Request, res: Response) => {};

export {
  getColumnById,
  getColumnsByTableId,
  createColumn,
  updateColumn,
  deleteColumn,
};
