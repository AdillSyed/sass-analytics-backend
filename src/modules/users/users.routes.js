import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { allowRoles } from "../../middlewares/rbac.middleware.js";
import { getMe, getAllUsers, deleteUser } from "./users.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { deleteUserParamsSchema } from "./users.validation.js";

const router = Router();

router.get("/me", authMiddleware, getMe);
router.get("/", authMiddleware, allowRoles("admin"), getAllUsers);
router.delete("/:id", authMiddleware, allowRoles("admin"), validate(deleteUserParamsSchema, "params"), deleteUser);

export default router;
