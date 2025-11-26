import { Router } from "express";
import {
  createTransaction,
  getTransactionByUserId,
  deleteTransaction,
  getSummaryByUserId,
} from "../controllers/transactions.controller.js";

const router = Router();

router.get("/:userId", getTransactionByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);

router.get("/sumary/:userId", getSummaryByUserId);

export default router;
