# 📚 Student & Products REST API

A Node.js + Express based REST API project that provides:

- 🎓 Student Data Analytics (Read-only API)
- 🛍️ Product Management System (Create & Update operations)

This project demonstrates clean REST architecture and structured routing for backend development.

---

# 🚀 Base URL

```
http://localhost:3000
```

> Make sure your local server is running before testing the endpoints.

---

# 🎓 Student API

A read-only API for managing and analyzing student records.

## 📌 Features

- Retrieve all students
- Get highest CGPA student (Topper)
- Calculate average CGPA
- Count total students
- Fetch student by ID
- Filter students by branch

---

## 📍 Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /students | Retrieve all students |
| GET | /students/topper | Get highest CGPA student |
| GET | /students/average | Get average CGPA |
| GET | /students/count | Get total number of students |
| GET | /students/:id | Get student by ID |
| GET | /students/branch/:branchName | Get students by branch |

---

## 1️⃣ Get All Students

```
GET /students
```

### Response (200 OK)

```json
[
  {
    "uid": 101,
    "name": "Aarav Sharma",
    "attendance": "90%",
    "total_subjects": 6,
    "bonus": "5"
  }
]
```

---

## 2️⃣ Get Topper (Highest CGPA)

```
GET /students/topper
```

### Response (200 OK)

```json
{
  "uid": 1,
  "name": "Aarav Sharma",
  "cgpa": 9.8,
  "branch": "CSE"
}
```

---

## 3️⃣ Get Average CGPA

```
GET /students/average
```

### Response (200 OK)

```json
{
  "averageCgpa": 8.42
}
```

---

## 4️⃣ Get Total Student Count

```
GET /students/count
```

### Response

```json
{
  "count": 150
}
```

---

## 5️⃣ Get Student By ID

```
GET /students/:id
```

### Example

```
GET /students/3
```

### Possible Responses

| Status Code | Description |
|-------------|------------|
| 200 | Student found |
| 404 | Student not found |

---

## 6️⃣ Get Students By Branch

```
GET /students/branch/:branchName
```

### Example

```
GET /students/branch/CSE
```

### Response (200 OK)

```json
[
  {
    "id": 1,
    "name": "Aarav Sharma",
    "branch": "CSE",
    "semester": 8,
    "cgpa": 9.3
  },
  {
    "id": 4,
    "name": "Meera Iyer",
    "branch": "CSE",
    "semester": 8,
    "cgpa": 9.1
  }
]
```

---

# 🛍️ Products API

A CRUD-style API for managing products.

## 📌 Features

- Create products
- Update complete product details
- Update stock only
- Update price only
- Filter products by category

---

## 📍 Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /products/category/:categoryName | Get products by category |
| POST | /products | Create new product |
| PUT | /products/:id | Update full product |
| PUT | /products/:id/stock | Update product stock |
| PUT | /products/:id/price | Update product price |

---

## 1️⃣ Get Products By Category

```
GET /products/category/:categoryName
```

### Example

```
GET /products/category/electronics
```

### Response (200 OK)

```json
{
  "success": true,
  "count": 2,
  "data": []
}
```

---

## 2️⃣ Create Product

```
POST /products
```

### Headers

```
Content-Type: application/json
```

### Request Body

```json
{
  "name": "Wireless Mouse",
  "price": 799,
  "category": "electronics",
  "description": "Ergonomic mouse",
  "stock": 100
}
```

### Response (200 OK)

```json
{
  "success": true,
  "message": "Product created successfully",
  "data": {}
}
```

---

## 3️⃣ Update Full Product

```
PUT /products/:id
```

### Example (cURL)

```bash
curl -X PUT http://localhost:3000/products/PRODUCT_ID \
-H "Content-Type: application/json" \
-d '{"name":"Updated Name","price":999}'
```

---

## 4️⃣ Update Product Stock

```
PUT /products/:id/stock
```

### Request Body

```json
{
  "stock": 150
}
```

---

## 5️⃣ Update Product Price

```
PUT /products/:id/price
```

### Request Body

```json
{
  "price": 1299
}
```

---

## ❌ Common Error Format

```json
{
  "success": false,
  "message": "Error description"
}
```

---

# ⚙️ Setup Instructions

```bash
npm install
npm start
```

Server runs on:

```
http://localhost:3000
```

---

# 🧠 Tech Stack

- Node.js
- Express.js
- MongoDB (if connected)
- RESTful API Architecture

---

# 📌 Important Notes

- Student API is read-only.
- Products API supports create and update operations.
- All POST and PUT routes require:
  
  ```
  Content-Type: application/json
  ```

- `id` must be a valid product ID.
- Price and stock must be positive numbers.
- Category filtering uses exact string matching.
