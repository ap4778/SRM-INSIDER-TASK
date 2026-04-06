# 🚀 Secure Backend API with JWT Authentication & SQL

A production-ready backend built using **Node.js, Express, MySQL, and JWT Authentication**.
This project demonstrates secure authentication, scalable architecture, and real-world backend practices.

---

## 📌 Features

* 🔐 User Authentication (Signup & Login)
* 🔑 JWT-based Authorization
* 🔒 Password Hashing using bcrypt
* 🧾 CRUD Operations for Posts
* 🛡️ Protected Routes
* 🧠 Role-Based Access Control (Admin/User)
* 📄 Pagination & Search
* 🏗️ MVC Architecture
* ⚡ Optimized SQL Queries with JOINs & Indexing

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MySQL
* **Authentication:** JSON Web Tokens (JWT)
* **Security:** bcrypt, helmet
* **Other Tools:** dotenv, morgan, cors

---

## 📁 Project Structure

```
backend/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── utils/
│── app.js
│── server.js
│── .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=blog_db
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Setup MySQL Database

Run the following SQL queries:

```
CREATE DATABASE blog_db;
USE blog_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_id ON posts(user_id);
```

---

### 5️⃣ Run the Server

```
node server.js
```

OR (with auto-restart)

```
npx nodemon server.js
```

---

## 🔗 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /api/auth/signup | Register new user |
| POST   | /api/auth/login  | Login & get JWT   |

---

### 📝 Post Routes

| Method | Endpoint       | Access  |
| ------ | -------------- | ------- |
| GET    | /api/posts     | Public  |
| POST   | /api/posts     | Private |
| PUT    | /api/posts/:id | Private |
| DELETE | /api/posts/:id | Admin   |

---

## 🔑 Authentication

Protected routes require JWT token in header:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

You can test APIs using:

* Thunder Client (VS Code Extension)
* Postman
* cURL

---

## 🔒 Security Features

* Password hashing with bcrypt
* JWT token authentication
* Protected routes middleware
* Role-based authorization
* SQL injection prevention (parameterized queries)
* Secure HTTP headers using helmet

---

## ⭐ Bonus Features

* ✅ Role-Based Access Control (Admin/User)
* ✅ Pagination & Search
* ✅ MVC Architecture
* ✅ SQL JOIN queries
* ✅ Indexed fields for performance

---

## 📊 Example Query (JOIN)

```
SELECT posts.*, users.name 
FROM posts 
JOIN users ON posts.user_id = users.id;
```

---

## 🚀 Future Improvements

* Refresh Tokens
* Rate Limiting
* Swagger API Documentation
* Docker Deployment
* Unit & Integration Testing

---

## 👨‍💻 Author

**Aditya Pratap Rajput**

---

## 📜 License

This project is licensed under the MIT License.

---
