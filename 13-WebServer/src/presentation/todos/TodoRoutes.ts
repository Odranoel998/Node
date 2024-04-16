import { Router } from "express";
import { TodosControllers } from "./controllers";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const TodosController: any = new TodosControllers();
    router.get("/", TodosController.getTodos);

    return router;
  }
}
