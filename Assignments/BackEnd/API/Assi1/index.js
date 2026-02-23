const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost3000",
  }),
);

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3,
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9,
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4,
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1,
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8,
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7,
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2,
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8,
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0,
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9,
  },
];

// Route where the whole object is shown
app.get("/students", (req, res) => {
  res.status(200).send(students);
});

// Route where the topper is shown
app.get("/students/topper", (_req, res) => {

    let max = -Infinity;

    for(let i = 0; i < students.length; i++) {
        if (max < students[i].cgpa) {
            max = students[i].cgpa;
        }
    }

    let topper = students.find(student => student.cgpa === max);

  res.status(200).send(topper);
});

// Route where the avg CGPA of all the students is shown
app.get("/students/average", (req, res) => {
    let sum = 0;

    for(let i = 0; i < students.length; i++) {
        sum += students[i].cgpa;
    }

    let cgpa_avg = (sum / students.length);

    let avg_cgpa = [
        {
            averageCGPA: cgpa_avg,
        }
    ]

    res.status(200).send(avg_cgpa);
});

// Route where number of students are shown
app.get("/students/count", (req, res) => {

    let totalStudents = {
        totalStudents: students.length
    } 

    res.status(200).send(totalStudents);

});

// Route to return student based on id
app.get("/students/:id", (req, res) => {

    let id = parseInt(req.params.id);
    let student = students.find(student => student.id == id);

    if(!student) {
        return res.status(404).send({ message: "Student not found" });
    }

    res.status(200).send(student);
    
});

// Route to return students based on their branch
app.get("/students/branch/:branchName", (req, res) => {

    let branch = String(req.params.branchName);
    let students_by_branch = students.filter(student => student.branch == branch);

    if(students_by_branch.length === 0) {
        return res.status(404).send({ message: "Student not found" });
    }

    res.status(200).send(students_by_branch);

});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
