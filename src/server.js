import express from "express";
import "dotenv/config";
import userRoutes from "./routes/user-route.js";
import errorMiddleware from "./middlewares/error-middleware.js";

const application = express();
application.use(express.json());
application.use(userRoutes);
application.use(errorMiddleware);
const SERVER_HOST = process.env.SERVER_HOST;
const SERVER_PORT = process.env.SERVER_PORT;
application.listen(SERVER_PORT, SERVER_HOST, () => console.log(`The server running on http://${SERVER_HOST}:${SERVER_PORT}`));