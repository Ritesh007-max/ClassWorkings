const express = require("express");

const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  console.log(req.body);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.get("/:route", (req, res) => {
  res.status(200).json(users)
})

app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role,
    age: req.body.age
  };

  res.status(200).json({
    message: "User updated",
    user: users[index]
  });
});

app.delete("/users/:name", (req, res) => {
  const userName = String(req.params.name);
  const index = users.findIndex(u => u.name === userName);

  if (index === "") { 
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);

  res.status(204).end();
});

app.patch("/users/:name", (req, res) => {
  const userName = String(req.params.name);
  const user = users.find(u => u.name === userName);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.role) user.role = req.body.role;

  res.status(200).json({
    message: "User updated",
    user
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});