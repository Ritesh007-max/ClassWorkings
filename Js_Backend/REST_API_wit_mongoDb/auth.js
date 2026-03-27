const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const bcrypt = require("bcrypt");

mongoose
  .connect("mongodb://localhost:27017/authntication")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

// Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Model

const User = mongoose.model("User", userSchema);

// Registration -> post route

app.post("/register", async(req, res) => {
  const {name, email, password} = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email and password are required" });
    }

    const newUser = new User({
      name, email, password
    });

    await newUser.save();

    res.status(201).json({
      message: "New user added successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// login

app.post("/login", async(req, res) => {

  const{email, password} = req.body;

  try {
    const user = await User.findOne({email});

    if(user) {
      res.send("Logged in successfully");
    }
    else {
      res.send("No user found");
    }
  } catch (error) {
    
  }

});

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
