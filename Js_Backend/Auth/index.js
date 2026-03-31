const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecretkey123";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/authntication")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

// user register route

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).send({ message: "Something is missing" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

// user login route

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send("Something is missing");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No account found with this email",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      { userId: user._id, name: user.name }, 
      SECRET_KEY, 
      {expiresIn: "1d"}
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        jwtToken: token
      },
    });
  } catch (error) {
    res.status(500).send("It's not you it's us");
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
