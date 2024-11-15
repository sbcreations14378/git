import { Router } from "express";

import userRoutes from "./users.js";
import productRoutes from "./products.js";

const router = Router();

router.use(userRoutes);
router.use(productRoutes);

export default router;
