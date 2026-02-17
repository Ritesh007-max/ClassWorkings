const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    attendence: "88%",
    uid: 108479,
    total_subjects: 14,
    bonus: "20",
    name: "Ritesh",
  },
  {
    attendence: "78%",
    uid: 118479,
    total_subjects: 14,
    bonus: "50",
    name: "Hemang",
  },
  {
    attendence: "89%",
    uid: 109479,
    total_subjects: 14,
    bonus: "0",
    name: "nekjiof",
  },
  {
    attendence: "0%",
    uid: 265521,
    total_subjects: 14,
    bonus: "0",
    name: "Pal",
  },
  {
    attendence: "88%",
    uid: 108479,
    total_subjects: 14,
    bonus: "20",
    name: "Ritesh.R.Gabale",
  },
  {
    attendence: "88%",
    uid: 108479,
    total_subjects: 14,
    bonus: "20",
    name: "Rupesh",
  },
];

app.get("/users/:uid", (req, res) => {
  const userId = Number(req.params.uid);
  const user = users.find((u) => u.uid === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.post("/users", (req, res) => {
  const newUser = {
    attendance: req.body.attendance,
    uid: req.body.uid,
    total_subjects: 14,
    name: req.body.name,
    bonus: req.body.bonus,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser,
  });
});

app.put("/users/:uid", (req, res) => {
  const userId = Number(req.params.uid);
  const index = users.findIndex((u) => u.uid === userId);

  if (index == -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    attendence: req.body.attendance,
    uid: req.body.uid,
    total_subjects: req.body.total_subjects,
    name: req.body.name,
    bonus: req.body.bonus,
  };

  res.status(200).json({
    message: "User updated",
    user: users[index],
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
