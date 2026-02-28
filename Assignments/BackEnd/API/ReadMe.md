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
# 🌍 States Management REST API

A Node.js + Express REST API for managing Indian states data including:

- Population
- Literacy Rate
- Annual Budget
- GDP

This API supports full CRUD operations along with specific attribute updates.

---

# 🚀 Base URL

```
http://localhost:3000
```

---

# 📦 Data Structure

Each state object contains:

```json
{
  "id": 1,
  "name": "Andhra Pradesh",
  "population": 49386799,
  "literacyRate": 67.02,
  "annualBudget": 279279,
  "gdp": 14000000
}
```

# 📍 Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /states | Get all states |
| GET | /states/:id | Get state by ID |
| GET | /highest-gdp | Get state with highest GDP |
| POST | /states | Create new state |
| PUT | /states/:id | Replace full state data |
| PUT | /states/:id/budget | Update annual budget |
| PUT | /states/:id/population | Update population |
| PATCH | /states/:id/literacy | Update literacy rate |
| PATCH | /states/:id/gdp | Update GDP |
| PATCH | /states/:id | Partial update |
| DELETE | /states/:id | Delete state by ID |
| DELETE | /states/name/:stateName | Delete state by name |
| DELETE | /states/low-literacy/:percentage | Count states below literacy rate |

---

# 🟢 GET Endpoints

## 1️⃣ Get All States

```
GET /states
```

### Response (200 OK)

```json
[
  {
    "id": 1,
    "name": "Andhra Pradesh",
    "population": 49386799,
    "literacyRate": 67.02,
    "annualBudget": 279279,
    "gdp": 14000000
  }
]
```

---

## 2️⃣ Get State By ID

```
GET /states/:id
```

### Example

```
GET /states/1
```

### Responses

| Status Code | Description |
|-------------|------------|
| 200 | State found |
| 404 | Invalid state id |

---

## 3️⃣ Get State with Highest GDP

```
GET /highest-gdp
```

### Response (200 OK)

```json
{
  "id": 14,
  "name": "Maharashtra",
  "gdp": 35000000
}
```

---

# 🔵 POST Endpoint

## 4️⃣ Create New State

```
POST /states
```

### Headers

```
Content-Type: application/json
```

### Request Body

```json
{
  "name": "New State",
  "population": 1000000,
  "literacyRate": 75.5,
  "annualBudget": 50000,
  "gdp": 2000000
}
```

### Response (200 OK)

```json
{
  "name": "New State",
  "population": 1000000,
  "literacyRate": 75.5,
  "annualBudget": 50000,
  "gdp": 2000000
}
```

---

# 🟡 PUT Endpoints

## 5️⃣ Replace Full State Data

```
PUT /states/:id
```

### Request Body

```json
{
  "name": "Updated State",
  "population": 1200000,
  "literacyRate": 78.0,
  "annualBudget": 60000,
  "gdp": 3000000
}
```

---

## 6️⃣ Update Annual Budget

```
PUT /states/:id/budget
```

### Request Body

```json
{
  "annualBudget": 70000
}
```

---

## 7️⃣ Update Population

```
PUT /states/:id/population
```

### Request Body

```json
{
  "population": 1500000
}
```

---

# 🟣 PATCH Endpoints

## 8️⃣ Update Literacy Rate

```
PATCH /states/:id/literacy
```

### Request Body

```json
{
  "literacyRate": 85.5
}
```

---

## 9️⃣ Update GDP

```
PATCH /states/:id/gdp
```

### Request Body

```json
{
  "gdp": 5000000
}
```

---

## 🔟 Partial Update (Multiple Fields)

```
PATCH /states/:id
```

### Request Body Example

```json
{
  "population": 2000000,
  "annualBudget": 80000
}
```

---

# 🔴 DELETE Endpoints

## 1️⃣1️⃣ Delete State By ID

```
DELETE /states/:id
```

### Response

- 204 No Content (State deleted)
- 404 Not Found (If state does not exist)

---

## 1️⃣2️⃣ Delete State By Name

```
DELETE /states/name/:stateName
```

### Example

```
DELETE /states/name/Goa
```

---

## 1️⃣3️⃣ Count States Below Literacy Rate

```
DELETE /states/low-literacy/:percentage
```

> ⚠️ This route does **NOT delete states**.  
> It only returns how many states have literacy rate below the given percentage.

### Example

```
DELETE /states/low-literacy/70
```

### Response

```json
{
  "deletedCount": 5
}
```

---

# ⚙️ Setup Instructions

```bash
npm install
node Ass3.js
```

Server runs on:

```
http://localhost:3000
```

---

# 🧠 Tech Stack

- Node.js
- Express.js
- RESTful Architecture
- JSON-based request handling

---

# 📌 Important Notes

- Data is stored in-memory (not persistent).
- Server restarts will reset the data.
- All POST, PUT, and PATCH requests require:

```
Content-Type: application/json
```

- ID must be a valid numeric state ID.

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
