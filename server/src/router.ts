import {Router} from "express";
import {todoValidator} from "./validations/validations";
import handleErrors from "./utils/handleErrors";
import {TodoController} from "./controllers/TodoItemController";

const router = Router();

router.get("/todos", TodoController.getAll)

router.post("/todos", todoValidator, handleErrors.validationError, TodoController.create)

router.patch("/todos/:id", todoValidator, handleErrors.validationError, TodoController.update)

router.delete("/todos/:id", TodoController.remove)

export default router;