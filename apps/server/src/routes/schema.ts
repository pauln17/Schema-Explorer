import { Router } from "express";
import {
  getAllSchemas,
  getSchemaById,
  getSchemaByUserId,
  getSharedToUserSchemas,
  createSchema,
  updateSchema,
  deleteSchema,
} from "../controllers/schema";

const router = Router();

router.get("/", getAllSchemas);
router.get("/:id", getSchemaById);
router.get("/:Id", getSchemaByUserId);
router.get("/:Id", getSharedToUserSchemas);
router.post("/", createSchema);
router.put("/:id", updateSchema);
router.delete("/:id", deleteSchema);

export default router;
