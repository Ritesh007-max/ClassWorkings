const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/DataSets")
.then(() => console.log("MongoDb Connected Successfully"))
.catch((error) => console.log("MongoDb connection Failed", error));

// This defines the schema and collection
const JobsSchema = new mongoose.Schema({});
const Jobs = mongoose.model("Jobs", JobsSchema);

app.get("/users", async (req, res) => {
  try {
    // Find all jobs in collection
    const data = await Jobs.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
