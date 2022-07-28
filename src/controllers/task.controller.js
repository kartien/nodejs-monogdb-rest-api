import Task from "../models/task";

export const findAllTasks = async (req, res) => {
  const task = await Task.find();
  res.json(task);
};

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  const taskSave = await newTask.save();
  res.json(taskSave);
};

export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};
