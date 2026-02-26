const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Lab2Users")
.then(() => console.log("MongoDb Connected Successfully"))
.catch((error) => console.log("MongoDb connection Failed", error));

// Created Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: String
});

const User = mongoose.model("User", userSchema);

app.post("/addusers", async(req, res) => {
    try{
        await User.insertMany(req.body);
        res.status(201).send(req.body);
    }
    catch{
        res.status(500).send({message: error.message});
    }
});

app.post("/adduser", async(req, res) => {
    try{
        await User.insertOne(req.body);
        res.status(201).send(req.body);
    }
    catch{
        res.status(500).send({message: error.message});
    }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});