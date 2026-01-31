import { Router } from "express";
import {
  createColumnRelation,
  updateColumnRelation,
  deleteColumnRelation,
} from "../controllers/column-relation";

const router = Router();

router.post("/", createColumnRelation);
router.put("/:id", updateColumnRelation);
router.delete("/:id", deleteColumnRelation);

export default router;
