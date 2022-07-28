import { Router } from "express";

import { findAllTasks, createTask, findOneTask } from "../controllers/task.controller";

const router = Router();

router.post("/task", createTask);

router.get("/task", findAllTasks);

router.get("/task/:id", findOneTask);



export default router;
