ProShop – Full-Stack E-commerce Application
A full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js) and Redux for state management.
It supports product browsing, cart management, checkout process, user authentication, and an admin dashboard for managing products, users, and orders.

🚀 Features
User registration and login with secure JWT authentication

Admin role with full CRUD operations on products, users, and orders

Product search, filtering, and pagination

Cart management with real-time updates

Checkout process with order summary and PayPal payment integration

User profile management and order history

Mobile-first responsive design

Deployment-ready with production environment configurations

🛠️ Tech Stack
Frontend: React, Redux, React-Bootstrap, Axios

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT

Deployment: Render (for both frontend and backend)

📦 Installation
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/ProshopEcom.git
cd proshopEcom
2. Install backend dependencies
bash
Copy
Edit
cd backend
npm install
3. Install frontend dependencies
bash
Copy
Edit
cd ../frontend
npm install
4. Set up environment variables
Create a .env file in the /backend folder with the following:

plaintext
Copy
Edit
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
Note: Use your actual keys for MongoDB, JWT, and PayPal.

5. Run the application
bash
Copy
Edit
# Run backend
cd backend
npm run dev

# Run frontend (in a separate terminal)
cd frontend
npm start
🌐 Live Demo
Check out the live version here:
[ProShop Live](https://proshopecom-1.onrender.com/)
