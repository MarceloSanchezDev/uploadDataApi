import { Router } from "express";
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { allowRoles } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getOneProduct);

router.post(
  "/",
  authMiddleware,
  allowRoles("admin"),
  createProduct
);

router.put(
  "/:id",
  authMiddleware,
  allowRoles("admin"),
  updateProduct
);

router.delete(
  "/:id",
  authMiddleware,
  allowRoles("admin"),
  deleteProduct
);

export default router;