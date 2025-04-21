const services = require("../service/service");
const jwt = require("jsonwebtoken");



// get all user
exports.getAllUser = async (req, res) => {
    try {
        const user = await services.getAllUser();
        res.json({data: user, status: "Success"});
        console.log("Get Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// register user
exports.registerUser = async (req, res) => {
    try {
        const user = await services.registerUser(req.body);
        res.json({data: user, status: "Created"});
        console.log("Create Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

// login user
exports.loginUser = async (req, res) => {
    try {
        const user = await services.loginUser(req.body);
        if (!user) {
            return res.status(400).json({error: "Invalid Credentials"});
        }
        let jsonwebtoken = process.env.JWT_SECRET_KEY;
        let data = {
            date: Date.now(),
            username: user.username,
            password: user.password
        }
        let token = jwt.sign(data, jsonwebtoken);
        res.status(200).send(token);
        res.json({data: user, status: "Success"});
        console.log("Login Progress");
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

// get all To Do List
exports.getAllToDoList = async (req, res) => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                const TodoList = await services.getAllToDoList();
                res.json({data: TodoList, status: "Success"});
                console.log("Get Progress");
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// get by id 
exports.getToDoListById = async (req, res) => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                const TodoList = await services.getToDoListById(req.params.id);
                res.json({data: TodoList, status: "Success"});
                console.log("Get Progress");
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// create To Do List
exports.CreateToDoList = async (req, res) => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                const TodoList = await services.CreateToDoList(req.body);
                res.json({data: TodoList, status: "Created"});
                console.log("Create Progress");
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// update To Do List
exports.UpdateToDoList = async (req, res) => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                const TodoList = await services.UpdateToDoList(req.params.id, req.body)
                res.json({data: TodoList, status: "Updated"});
                console.log("Update Progress");
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// delete To Do List
exports.DeleteToDoList = async (req, res) => {
    try {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                const TodoList = await services.DeleteToDoList(req.params.id);
                res.json({data: TodoList, status: "Deleted"});
                console.log("Delete Progress");
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

