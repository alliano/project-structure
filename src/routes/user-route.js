import express from "express";
import UserController from "../controllers/user-controller.js";
import tokenMiddleware from "../middlewares/token-middleware.js";

const userRoutes = express.Router();
userRoutes.get("/users", tokenMiddleware, UserController.findAll);
userRoutes.get("/users/:id", tokenMiddleware, UserController.findById);
userRoutes.post("/users", tokenMiddleware, UserController.create);

export default userRoutes;