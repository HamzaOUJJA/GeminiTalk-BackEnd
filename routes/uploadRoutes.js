import express from "express";
import { getUploadParams } from "../controllers/uploadController.js";

const router = express.Router();

router.get("/api/upload", getUploadParams);

export default router;
