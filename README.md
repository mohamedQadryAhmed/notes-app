# 📝 Notes App API

A secure and structured backend API for managing user-specific notes.  
Built with **Node.js**, **Express**, and **MongoDB**, using **JWT authentication** and following a clean **MVC architecture**.

---

## 🚀 Features

- 🔐 User registration & login with hashed passwords
- 🧾 Create, Read, Update, Delete (CRUD) notes
- 🛡️ Protected routes using JWT
- 📄 Each note is linked to a specific user
- ⏱️ Automatic timestamps for notes
- 📁 Organized project structure with controllers, models, and routes

---


## 🛠️ Technologies Used

| Tool / Library     | Purpose                          |
|--------------------|----------------------------------|
| Node.js            | Server runtime                   |
| Express            | Routing & middleware             |
| MongoDB + Mongoose | Database & schema management     |
| bcryptjs           | Password hashing                 |
| jsonwebtoken (JWT) | Secure authentication            |
| dotenv             | Environment variable handling    |
| Postman            | API testing                      |

---

## ⚙️ Setup & Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourUsername/notes-app.git
   cd notes-app
2. Install dependencies:
   ```bash
   npm install
3. Add .env file:
   ```.env
   MONGO_URI=yourMongoURL
   JWT_SECRET=yourSecretKey
   PORT=5000
4. Start the server:
   ```bash
   npm run dev

---
## 📬 API Endpoints
### 🔐 Authentication

| Method |  Route            	 | Description       |
---------|---------------------|--------------------
| POST	 | /api/users/register |	Register a user  |
| POST	 | /api/users/login	   | Login & get token |

### 📝 Notes
| Method  |  Route           	 | Description         |
----------|--------------------|----------------------
| POST	  | /api/notes         |	  Create a note    |
| GET	    | /api/notes         |    Read all notes   |
| GET     | /api/notes/:id     |    Read note by ID  |
| PUT     | /api/notes/:id     |    Update note      |
| DELETE  | /api/notes/:id     |    Delete note      |

🔒 All notes routes require a valid JWT in the Authorization header.
---

## ✅ Status
- [x] Backend API (completed)

- [x] JWT-based Auth 

- [x] Notes CRUD

- [ ] Frontend 

- [ ] Deployment 
   
