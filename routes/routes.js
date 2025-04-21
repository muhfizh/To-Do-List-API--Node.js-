const express = require("express");
const {
    getAllToDoList,
    getToDoListById,
    CreateToDoList,
    UpdateToDoList,
    DeleteToDoList,
    getAllUsers,
    registerUser,
    loginUser


} = require("../controller/controller");
const routes = express.Router();


routes.route("/users").get(getAllUsers).post(registerUser);
routes.route("/login").post(loginUser);
routes.route("/").get(getAllToDoList).post(CreateToDoList);
routes.route("/:id").get(getToDoListById).put(UpdateToDoList).delete(DeleteToDoList);

module.exports = routes;