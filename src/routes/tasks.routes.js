import { Router } from "express";
import Task from '../models/Tasks'


const router = Router();

router.get('/', (req, res) => {
  res.send("Tasks");
});

router.post("/", async(req, res) => {
  const newTask = new Task({title: req.body.title, description: req.body.description});
  await newTask.save();
  console.log(newTask)
  res.json("New Task created");
});

export default router;
