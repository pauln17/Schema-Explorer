import { Router } from "express";
import {
  getAllSchemaTables,
  getSchemaTableById,
  createSchemaTable,
  updateSchemaTable,
  deleteSchemaTable,
} from "../controllers/schema-table";

const router = Router();

router.get("/", getAllSchemaTables);
router.get("/:id", getSchemaTableById);
router.post("/", createSchemaTable);
router.put("/:id", updateSchemaTable);
router.delete("/:id", deleteSchemaTable);

export default router;
