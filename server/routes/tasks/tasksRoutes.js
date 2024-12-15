const express = require("express");
const router = express.Router();
const {createTask, getTask, getAllTasks, deleteTask, updateTask} = require("../../controller/tasks/tasksController");

router.route("https://taskmanager-wubw.onrender.com/createtask").post(createTask);
router.route("https://taskmanager-wubw.onrender.com/gettask/:id").get(getTask);
router.route("https://taskmanager-wubw.onrender.com/getalltasks").get(getAllTasks);
router.route("https://taskmanager-wubw.onrender.com/deletetask/:id").delete(deleteTask);
router.route("https://taskmanager-wubw.onrender.com/updatetask/:id").put(updateTask);


module.exports = router;