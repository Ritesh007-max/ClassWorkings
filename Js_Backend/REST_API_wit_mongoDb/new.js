const express = require("express");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/newDatabase")
.then(() => console.log("MongoDb Connected Successfully"))
.catch((error) => console.log("MongoDb connection Failed", error));

// Created Schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

// Create Model
const Product = mongoose.model("Product", productSchema);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});