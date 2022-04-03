import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

router.use(express.json());

router.post("/login", login);

export default router;
