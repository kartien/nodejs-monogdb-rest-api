import { Router } from "express";
import Task from '../models/task'


const router = Router();

router.get("/task", async (req, res) => {
    const task = await Task.find()
    res.json(task)
});

router.post("/task", async (req, res) => {
    const newTask =  new Task({title: req.body.title, description: req.body.description})
    const taskSave = await newTask.save();
    res.json(taskSave);
});

export default router;
