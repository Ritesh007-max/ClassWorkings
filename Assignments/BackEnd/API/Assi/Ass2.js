const express = require("express");
const app = express();
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1,
  },
];

app.get("/products", (req, res) => {
  res.status(200).send(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id == id);

  if (!product) {
    res.status(404).send(["Error: Product not found"]);
  }

  res.status(200).send(product);
});

app.get("/products/category/:categoryName", (req, res) => {
  const category = req.params.categoryName;
  const product = products.find((product) => product.category == category);

  if (!product) {
    res.status(404).send(["Error: Product not found"]);
  }

  res.status(200).send(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating,
  };

  products.push(newProduct);

  res.status(201).send(newProduct);
});

app.put("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = {
    id: productId,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating,
  };

  res.status(200).send({ message: "Product updated", product: products[index] });
});

app.put("/products/:id/stock", (req, res) => {
  const productId = Number(req.params.id);
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const index = products.findIndex((product) => product.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const newStock = Number(req.body.stock);
  if (isNaN(newStock)) {
    return res.status(400).json({ message: "Stock must be a number" });
  }

  products[index].stock = newStock;

  res.status(200).json({
    message: "Stock updated",
    product: products[index],
  });
});

app.put("/products/:id/price", (req, res) => {
  const productId = Number(req.params.id);
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const index = products.findIndex((product) => product.id === productId);
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const newPrice = Number(req.body.price);
  if (isNaN(newPrice)) {
    return res.status(400).json({ message: "Price must be a number" });
  }

  products[index].price = newPrice;

  res.status(200).json({
    message: "Price updated",
    product: products[index],
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
