import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const getAllSchemaTables = async (req: Request, res: Response) => {};

const getSchemaTableById = async (req: Request, res: Response) => {};

const createSchemaTable = async (req: Request, res: Response) => {};

const updateSchemaTable = async (req: Request, res: Response) => {};

const deleteSchemaTable = async (req: Request, res: Response) => {};

export {
  getAllSchemaTables,
  getSchemaTableById,
  createSchemaTable,
  updateSchemaTable,
  deleteSchemaTable,
};
