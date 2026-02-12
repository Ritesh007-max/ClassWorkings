const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Ritesh", role: "mentor" },
  { id: 4, name: "Gabale", role: "mentor" }
];

app.get("/", (req, res) => {
    res.status(200).send("home page");
});

app.get("/users", (req, res) => {
    res.status(201).send(users);
});

app.post("/users", (req, res) => {
    let newUser = {};
    for(let i = 0; i < req.body.length; i++) {
        newUser = {
            id: req.body[i].id,
            name: req.body[i].name,
            role: req.body[i].role
        };
        console.log(newUser);
        users.push(newUser);
    }
    res.status(201).send(users);
});

app.get("/users/:id", (req, res) => {
    res.status(201).send(users[req.params.id]);
});

app.get("/admin", (req, res) => {
    res.status(202).json({
        "name": "Admin",
        "version": "1.0.0",
        "description": "This is the admins Pannel Do not put/patch",
        "main": "index.js",
        "type": "commonjs",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Ritesh R Gabale",
        "license": "ISC",
        "dependencies": {
            "express": "^5.2.1",
            "nodemon": "^3.1.11"
        }
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});