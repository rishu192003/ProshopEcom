# 🛒 ProShop – MERN E-commerce App

**ProShop** is a full-featured e-commerce application built with the **MERN stack** and **Redux** for state management. It includes **JWT authentication**, **admin access controls**, **PayPal integration**, and is fully **Dockerized** for easy deployment. A live demo is hosted on Render.

---

## 🌐 Live Demo

🔗 https://proshopecom-1.onrender.com/

---

## 🚀 Features

- 🔒 JWT-based authentication and authorization
- 🛍 Product listings, cart, checkout flow
- 👤 User registration/login with profile management
- 🛠 Admin panel for product/user/order management
- 💸 PayPal payment gateway integration
- 📦 REST API using Express & MongoDB
- 🌍 Deployed on [Render](https://render.com)
- 🐳 Docker support for local or containerized deployment
- 📁 `.env.example` included for configuration

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, Redux, React-Bootstrap
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JSON Web Tokens (JWT)
- **Payments:** PayPal REST API
- **Deployment:** Render (Live) & Docker (Local)
- **Other:** dotenv, bcryptjs, Multer, concurrently

---

## 📁 Project Structure

- proshop/
  ├── backend/
  │ ├── controllers/
  │ ├── models/
  │ ├── routes/
  │ ├── middleware/
  │ └── server.js
  ├── frontend/
  │ ├── src/
  │ │ ├── components/
  │ │ ├── screens/
  │ │ └── App.js
  │ └── package.json
  ├── .env.example
  ├── Dockerfile
  └── README.md


---


## 🐋 Docker Image (on Docker Hub)

You can pull and run this app directly using Docker:

### 🔗 Docker Hub

📦 https://hub.docker.com/repository/docker/guptarishit19/fullstack-ecom-app/general

---

### 🏁 Quick Start with Docker

```bash
docker pull guptarishit19/fullstack-ecom-app
docker run -p 3000:3000 -d guptarishit19/fullstack-ecom-app
```

---
## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/proshop.git
cd proshop
2. Set Up Environment Variables
Copy .env.example to .env and fill in your values:

cp .env.example .env
Make sure to configure:

MongoDB URI

JWT secret

PayPal client ID

Node environment settings

🐳 Running with Docker
This app is fully Dockerized with both frontend and backend containers.

1. Build & Start the App
bash
Copy
Edit
docker-compose up --build
2. Visit the App
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api

📝 Note: You may need to seed the database manually or via a script depending on your setup.

🧪 Running Without Docker (Dev Mode)

Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm start

🧼 Useful Scripts
npm run data:import – Import sample products/users

npm run data:destroy – Destroy all data in DB

🛠 Admin Access
To log in as an admin, use the credentials defined in your seed data or MongoDB. Admin users can:

Manage products

View and edit orders

Manage users
```
## 🧾 License
This project is open-source and available under the MIT License.

