import express from "express";
import cors from "cors";
import path from "path";
import  { fileURLToPath } from "url";
import chatRoutes from "./routes/chatRoutes.js";
import userChatsRoutes from "./routes/userChatsRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import connectDB from "./config/dbConfig.js"; // Import the DB config

const port = process.env.PORT || 3000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

// Connection to the database
connectDB();

app.use(chatRoutes); 
app.use(userChatsRoutes); 
app.use(uploadRoutes); 

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
