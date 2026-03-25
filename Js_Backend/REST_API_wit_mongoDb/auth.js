const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
