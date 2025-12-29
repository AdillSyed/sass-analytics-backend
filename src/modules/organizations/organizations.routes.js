import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { allowRoles } from "../../middlewares/rbac.middleware.js";
import {
  createOrganization,
  getOrganizations,
} from "./organizations.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { createOrganizationSchema } from "./organizations.validation.js";

const router = Router();

router.post("/", authMiddleware, validate(createOrganizationSchema), createOrganization);
router.get("/", authMiddleware, allowRoles("admin"), getOrganizations);

export default router;
