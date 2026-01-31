import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const getAllSchemas = async (req: Request, res: Response) => {};

const getSchemaById = async (req: Request, res: Response) => {};

const getSchemaByUserId = async (req: Request, res: Response) => {};

const getSharedToUserSchemas = async (req: Request, res: Response) => {};

const createSchema = async (req: Request, res: Response) => {};

const updateSchema = async (req: Request, res: Response) => {};

const deleteSchema = async (req: Request, res: Response) => {};

export {
  getAllSchemas,
  getSchemaById,
  getSchemaByUserId,
  getSharedToUserSchemas,
  createSchema,
  updateSchema,
  deleteSchema,
};
