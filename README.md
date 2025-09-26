Features

-User Registration & Login: Secure authentication using JWT and bcrypt for password hashing.

-User Profile: Simple profile page displaying user information.

-API Design: RESTful endpoints (auth/register, auth/login) with clear request/response structures.

-Error Handling: Validation and server errors handled gracefully; frontend displays relevant messages.

-Security: JWT for protected routes, input validation, and CORS enabled.

-Frontend Integration: React pages communicate with backend via Axios; JWT stored in localStorage.

Database Schema
User Collection:
     email (unique)
     password (hashed)
     profile
     fullName
     headline
     location
     about
     lastLogin (timestamp)

Architecture & Scaling
-  Backend: Node.js + Express, modular routes, JWT authentication
 - Frontend: React with routing and protected pages

Setup Instructions
  Backend
    cd backend
    npm install  
    Create a .env file with the following variables:
    MONGO_URI=<your-mongodb-connection-string> 
    JWT_SECRET=<your-secret-key>
    node index.js

Frontend
   cd frontend
   npm install
   npm run dev
