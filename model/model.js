const mongoDB = require("mongoose");

const ToDoListSchema = new mongoDB.Schema({
    judul: String,
    deskripsi: String,
    status: Number, // 1 open, 2 progress, 3 done
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoDB.model("ToDoListSchema", ToDoListSchema);