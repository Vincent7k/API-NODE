import express  from "express";
import dogsController from "../controllers/dogsController.js";

const routes = express.Router();

routes.get("/dogs", dogsController.dogsList);

export default routes;