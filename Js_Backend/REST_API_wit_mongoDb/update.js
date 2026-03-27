const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/newLab2")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

// Created Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/addusers", async (req, res) => {
  try {
    await User.insertMany(req.body);
    res.status(201).send(req.body);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put("/userupdate/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const Updateuser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json(Updateuser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
