import express from "express";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import { getUserChats } from "../controllers/userChatsController.js";

const router = express.Router();

router.get("/api/userchats", ClerkExpressRequireAuth(), getUserChats);

export default router;
