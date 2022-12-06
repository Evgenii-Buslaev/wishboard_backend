import Router from "express";
import CardController from "./contollers/CardController.js";

const router = new Router();

router.post("/cards", CardController.create);

export default router;
