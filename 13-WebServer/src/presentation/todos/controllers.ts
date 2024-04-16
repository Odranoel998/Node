import { Request, Response } from "express";

const todos: any = [
  { id: 1, text: "Buy milk", createdAt: new Date() },
  { id: 2, text: "Orange", createdAt: new Date() },
  { id: 3, text: "yellok", createdAt: new Date() },
];

export class TodosControllers {
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    res.json(todos);
  };
  public getTodosById = (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id, 10);
    res.json([{ id }]);
  };
}
