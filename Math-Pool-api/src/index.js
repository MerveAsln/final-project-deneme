import express from "express";
import cors from "cors";
import morgan from "morgan";
import "./config/database.js";
import userRoute from "./controller/user-route.js";
import commentRoute from "./controller/comment-route.js";
import errorHandler from "./middleware/errorHandler.js";
import questionRoute from "./controller/question-route.js";
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// routes
app.use("/api/users", userRoute);
app.use("/api/questions", questionRoute);
app.use("/api/comments", commentRoute);
app.use(errorHandler);

export default app;
