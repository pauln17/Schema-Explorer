import { Router } from "express";
import {
  getColumnById,
  getColumnsByTableId,
  createColumn,
  updateColumn,
  deleteColumn,
} from "../controllers/table-column";

const router = Router();

router.get("/:id", getColumnById);
router.get("/table/:id", getColumnsByTableId);
router.post("/", createColumn);
router.put("/:id", updateColumn);
router.delete("/:id", deleteColumn);

export default router;
