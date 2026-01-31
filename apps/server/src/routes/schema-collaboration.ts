import { Router } from "express";
import {
  createSchemaCollaboration,
  updateSchemaCollaboration,
  deleteSchemaCollaboration,
} from "../controllers/schema-collaboration";

const router = Router();

router.post("/", createSchemaCollaboration);
router.put("/:id", updateSchemaCollaboration);
router.delete("/:id", deleteSchemaCollaboration);

export default router;
