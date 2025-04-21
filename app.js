const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

require('dotenv').config;

//middleware
app.use(express.json());

//lib body
app.use(bodyParser.json());

mongoose.connect(
    process.env.MONGOURL || "mongodb+srv://muhfizhufi:gJnNJF2sOBjkMeKr@cluster0.cfh10.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        useNewUrlParser: true
    }
);

app.use("/api/ToDoList", routes);

app.listen(2424, () => {
    console.log("Starting At Localhost:2424 !!!")
});