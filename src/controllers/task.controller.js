import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";


export const findAllTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Task.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      tottalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Someting goes wrong retrieving the tasks",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(404).send({ message: "Content cannot be empty" });
  }

  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSave = await newTask.save();
    res.json(taskSave);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Someting goes wrong creating a task",
    });
  }
};

export const findOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task)
      return res.status(404).json({ message: `Tasks with id ${id} does not exist` });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving tasks task with id ${id}`,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({
      message: `Task were delete successfully`,
    });
  } catch (eror) {
    res.status(500).json({
      message: error.message || `Cannot delete task with id: ${id}`,
    });
  }
};

export const findAllDoneTasks = async (req, res) => {
  const task = await Task.find({ done: true });
  res.json(task);
};

export const updateTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task updated successfully" });
};
