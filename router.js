import Router from "express";
import CardController from "./contollers/CardController.js";
import UserController from "./contollers/UserController.js";

const router = new Router();

router.post("/cards", CardController.create);
router.get("/cards", CardController.getAll);
router.get("/cards/:id", CardController.getOne);
router.put("/cards", CardController.update);
router.delete("/cards", CardController.delete);

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.put("/users", UserController.update);
router.delete("/users", UserController.delete);

export default router;
