import { Router } from "express";

import userRoutes from "./users.js";
import productRoutes from "./products.js";

import MgUsers from './mgusers.js'

const router = Router();

router.use(userRoutes);
router.use(productRoutes);

router.use(MgUsers)

export default router;
