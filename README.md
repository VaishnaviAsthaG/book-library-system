# 📚 Book Library System API

A RESTful API built with Node.js, Express, and MySQL to manage books, issue/return operations, and track user activity.

---
## 🚀 Features

- 📚 Add / remove books
- 📦 Issue books to users
- 📆 Track return dates
- 📋 View issued books
- ✅ Maintain book availability

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL**
- **dotenv** – for environment configs
- **Nodemon** – for development
- **Postman** – for API testing

---

## 📂 Folder Structure
book-library-system/
│
├── controllers/
│ ├── bookController.js
│ └── userController.js
│
├── models/
│ ├── bookModel.js
│ └── userModel.js
│
├── routes/
│ ├── books.js
│ └── users.js
│
├── db/
│ └── connection.js
│
├── server.js
└── README.md


---

## ⚙️ API Endpoints

### Books

| Method | Route         | Description         |
|--------|---------------|---------------------|
| GET    | `/books`      | Get all books       |
| POST   | `/books`      | Add a new book      |
| DELETE | `/books/:id`  | Delete a book       |

### Users / Issuing

| Method | Route            | Description              |
|--------|------------------|--------------------------|
| POST   | `/users/issue`   | Issue a book to a user   |
| POST   | `/users/return`  | Return a book            |
| GET    | `/users/issued`  | View issued book records |

---

## 🧪 Testing (Postman)

- Use Postman to test endpoints:  
  Example: `POST http://localhost:3000/books`
  (Book Library System.postman_collection.json)

---

## 🧳 Environment Setup

```bash
npm install
npm run dev

```

---


## Output

[getOutput](./public/Output1.png)
[postOutput](./public/Output2.png)
[issueOutput](./public/Output3.png)
[deleteOutput](./public/Output4.png)
[returnoutput](./public/Output6.png)
[issuedOutput](./public/Output7.png)


---

## 🙋‍♀️ Author
Vaishnavi Astha Gupta
Mini Project – Book Library System
B.Tech IT, Final Year
UIET CSJMU

---

## 📄 License
This project is licensed under the MIT License.
