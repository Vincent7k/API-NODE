import express  from "express";
import DogsController from "../controllers/DogsController.js";

const routes = express.Router();

routes.get("/dogs", DogsController.listDogs);
routes.get("/dogs/:id", DogsController.listDogsbyId);
routes.delete("/dogs/:id",DogsController.deleteDogsById);
routes.post("/dogs", DogsController.singUpDogs);
routes.put("/dogs/:id", DogsController.updateDogs)
export default routes;