const services = require("../service/service");

// get all To Do List
exports.getAllToDoList = async (req, res) => {
    try {
        const TodoList = await services.getAllToDoList();
        res.json({data: TodoList, status: "Success"});
        console.log("Get Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// get by id 
exports.getToDoListById = async (req, res) => {
    try {
        const TodoList = await services.getToDoListById(req.params.id);
        res.json({data: TodoList, status: "Success"});
        console.log("Get Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// create To Do List
exports.CreateToDoList = async (req, res) => {
    try {
        const TodoList = await services.CreateToDoList(req.body);
        res.json({data: TodoList, status: "Created"});
        console.log("Create Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// update To Do List
exports.UpdateToDoList = async (req, res) => {
    try {
        const TodoList = await services.UpdateToDoList(req.params.id, req.body)
        res.json({data: TodoList, status: "Updated"});
        console.log("Update Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// delete To Do List
exports.DeleteToDoList = async (req, res) => {
    try {
        const TodoList = await services.DeleteToDoList(req.params.id);
        res.json({data: TodoList, status: "Deleted"});
        console.log("Delete Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

