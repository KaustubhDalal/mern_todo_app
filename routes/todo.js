const express = require("express")
const router = express.Router();
const todo = require("../controllers/todo")

//rendering home page with view engine EJS
router.get("/",todo.homeController);

//rendering add todo page with view engine EJS
router.get("/add-todo",todo.addTodoFormController);

//rendering update todo page with view engine EJS
router.get("/update-todo",todo.updateTodoFormController);

//rendering delete todo page with view engine EJS
router.get("/delete-todo",todo.deleteTodoFormController);

router.post("/add-todo",todo.addTodoController);

router.post("/update-todo/:id",todo.updateTodoController);

router.get("/confirm-delete",todo.deleteTodoController)
module.exports = router;