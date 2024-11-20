import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import {
  createChat,
  getUserChats,
  getChatById,
  updateChat,
} from "../controllers/chatController.js";

const router = express.Router();

router.post("/api/chats", ClerkExpressRequireAuth(), createChat);
router.get("/api/userchats", ClerkExpressRequireAuth(), getUserChats);
router.get("/api/chats/:id", ClerkExpressRequireAuth(), getChatById);
router.put("/api/chats/:id", ClerkExpressRequireAuth(), updateChat);

export default router;
