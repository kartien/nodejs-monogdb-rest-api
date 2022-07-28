import Task from "../models/task";

export const findAllTasks = async (req, res) => {
  const task = await Task.find();
  res.json(task);
};

export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ? req.body.done : false,
  });
  const taskSave = await newTask.save();
  res.json(taskSave);
};

export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({
    message: `Task were delete successfully`,
  });
};

export const findAllDoneTasks = async (req, res) => {
  const task = await Task.find({ done: true });
  res.json(task);
};

export const updateTask = async (req, res) =>  {
  await Task.findByIdAndUpdate(req.params.id, req.body)
  res.json({message: 'Task updated successfully'});
}