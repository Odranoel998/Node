import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dto";

export class TodosController {
  //* DI
  constructor() {}

  public getTodos = async (req: Request, res: Response) => {
    const todos = await prisma.todo.findMany();
    return res.json(todos);
  };

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is not a number" });

    const todo = await prisma.todo.findFirst({
      where: { id },
    });

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: "Text property is required" });

    const todo = await prisma.todo.create({
      data: createTodoDto,
    });

    res.json(todo);
  };

  public updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      return res.status(400).json({ error: "ID argument is not a number" });

    const todo = await prisma.todo.findFirst({
      where: { id },
    });
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const { text } = req.body;
    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { text },
    });

    // todo.text = text || todo.text;
    // completedAt === "null"
    //   ? (todo.completedAt = null)
    //   : (todo.completedAt = new Date(completedAt || todo.completedAt));

    res.json(updateTodo);
  };

  public deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const todo = await prisma.todo.findFirst({
      where: { id },
    });
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });
    const deleted = await prisma.todo.delete({
      where: { id },
    });
    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `Todo with id ${id} not found` });
    res.json({ todo, deleted });
  };
}
