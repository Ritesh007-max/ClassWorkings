const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/TaskNew")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

const User = mongoose.model("User", userSchema);

app.get("/allusers", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.post("/adduser", async (req, res) => {
  try {
    await User.insertOne(req.body);
    res.status(201).send(req.body);
  } catch (error) {
    res.status(500).send({ message: error.message });
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

app.put("/updateuser", async (req, res) => {
  const userId = req.params.id;

  try {
    const Updateuser = await User.findByIdAndUpdate(userId, req.body);
    res.json(Updateuser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/updateuser", async (req, res) => {
  const userId = req.params.id;

  try {
    const Updateuser = await User.findByIdAndUpdate(userId, req.body);
    res.json(Updateuser);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deleteuser", async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
