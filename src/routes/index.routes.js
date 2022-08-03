import { Router } from "express";

import {
  findAllTasks,
  createTask,
  findOneTask,
  deleteTask,
  findAllDoneTasks,
  updateTask,
} from "../controllers/task.controller";

const router = Router();

router.post("/task", createTask);

router.get("/task", findAllTasks);

router.get("/task/done", findAllDoneTasks);

router.get("/task/:id", findOneTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask)


export default router;
