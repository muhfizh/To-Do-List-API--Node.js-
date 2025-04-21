const ToDoListModel = require("../model/model");
const UserModel = require("../model/userModel");
const jwt = reuire("jsonwebtoken");


// get all users
exports.getAllUsers = async () => {
    return await UserModel.find();
};

// register user
exports.registerUser = async (body) => {
    return await UserModel.create(body);
};

// login user
exports.loginUser = async (body) => {
    return await UserModel.findOne({username: body.username, password: body.password});
}

// get all To Do List
exports.getAllToDoList = async () => {
    return await ToDoListModel.find();
};

// get To Do List By Id
exports.getToDoListById = async (id) => {
    return await ToDoListModel.findById(id);
};

// create To Do List
exports.CreateToDoList = async (body) => {
    return await ToDoListModel.create(body);
};

// update To Do List By Id
exports.UpdateToDoList = async (id, body) => {
    return await ToDoListModel.findByIdAndUpdate(id, body);
};

// delete To Do List By Id
exports.DeleteToDoList = async (id) => {
    return await ToDoListModel.findByIdAndDelete(id);
}