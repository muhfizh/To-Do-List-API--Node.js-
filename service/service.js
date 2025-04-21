const ToDoListModel = require("../model/model");
const UserModel = require("../model/userModel");
const jwt = require("jsonwebtoken");


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
    try {
        const user = await UserModel.findOne({
            username: body.username,
            password: body.password
        });

        if (!user) {
            return res.status(404).send({ message: 'User tidak ditemukan !!!' });
        }
        let jsonwebtoken = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date.now(),
            username: body.username,
            password: body.password
        }
        signed = jwt.sign(data, jsonwebtoken);
        res.status(200).send(token);
    } catch (error) {
        return res.status(500).send({ message: 'Terjadi kesalahan', error: error.message });
    }
}

// get all To Do List
exports.getAllToDoList = async () => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                return await ToDoListModel.find();
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
};

// get To Do List By Id
exports.getToDoListById = async (id) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                return await ToDoListModel.findById(id);
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
};

// create To Do List
exports.CreateToDoList = async (body) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                return await ToDoListModel.create(body);
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
};

// update To Do List By Id
exports.UpdateToDoList = async (id, body) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                return await ToDoListModel.findByIdAndUpdate(id, body);
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
};

// delete To Do List By Id
exports.DeleteToDoList = async (id) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            try{
                return await ToDoListModel.findByIdAndDelete(id);
            } catch (error) {
                return res.status(500).send({message: 'gagal simpan !', error: error.message });
                console.log(req.path || ' ' || req.method);
            };
        } else {
            return res.status(401).send(error);
        }
}