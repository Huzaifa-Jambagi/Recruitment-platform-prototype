# Recruitment Platform Prototype Documentation

## 1️⃣ Overview

This is a **full-stack recruitment platform prototype** built with **React, Node.js, Express, and MongoDB**.
It demonstrates **user registration, login, profile management**, and **JWT-based authentication**.

The system is designed to be simple, secure, and modular, with clear API structure and error handling.



## 2️⃣ Backend API Documentation

### Registration API

* **Endpoint:** `POST auth/register`
* **Description:** Registers a new user and returns a JWT token

**Request Payload:**

* email (string, required, unique)
* password (string, required, hashed with bcrypt)
* profile.fullName (string, required)
* profile.headline (string, optional)
* profile.location (string, optional)
* profile.about (string, optional)

**Example Request:**

```json
{
  "email": "user@example.com",
  "password": "Password123!",
  "profile": {
    "fullName": "John Doe",
    "headline": "Full Stack Developer",
    "location": "India",
    "about": "I love coding"
  }
}
```

**Response (Success 201):**

```json
{
  "message": "User created successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "123456789",
    "email": "user@example.com",
    "profile": {
      "fullName": "John Doe",
      "headline": "Full Stack Developer",
      "location": "India",
      "about": "I love coding"
    },
    "lastLogin": "2025-09-26T00:00:00.000Z"
  }
}
```

**Error Responses:**

* 400: Missing required fields
* 409: Email already exists
* 500: Server/Database error

---

### Login API

* **Endpoint:** `POST auth/login`
* **Description:** Authenticates a user and returns a JWT token

**Request Payload:**

* email (string, required)
* password (string, required)

**Response (Success 200):**

```json
{
  "message": "Logged in successfully",
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "123456789",
    "email": "user@example.com",
    "profile": {
      "fullName": "John Doe",
      "headline": "Full Stack Developer",
      "location": "India",
      "about": "I love coding"
    },
    "lastLogin": "2025-09-26T12:00:00.000Z"
  }
}
```

**Error Responses:**

* 401: Invalid email or password
* 500: Server/database error

**JWT Notes:**

* Secret: `process.env.JWT_SECRET`
* Expiry: configurable, e.g., `1d`
* Algorithm: `HS256`
* Payload contains `userId` 

---

## 3️⃣ Database Schema

**User Collection:**

* email (string, unique)
* password (string, hashed)
* profile:

  * fullName (string)
  * headline (string, optional)
  * location (string, optional)
  * about (string, optional)
* lastLogin (timestamp)

**Validations:**

* Email must be unique
* Password must have minimum 4 characters 
* Profile fields default to empty strings if not provided

---

## 4️⃣ Authentication & Security

* **Password Handling:** bcrypt hashing
* **JWT Authentication:** tokens returned on registration/login and stored in frontend localStorage
* **Protected Routes:** backend checks `Authorization: Bearer <JWT_TOKEN>`
* **CORS & Input Validation:** ensures frontend-backend security
* **lastLogin Update:** updated on successful login

---

## 5️⃣ Error Handling

* **Validation Errors:** returned as `{ success: false, message: "<reason>" }`
* **Duplicate Email:** 409 response with a clear message
* **Invalid Login:** 401 response
* **Server/DB Errors:** 500 response with generic message
* **Frontend Handling:** frontend displays messages from API for clear user feedback

---

## 6️⃣ Architecture & Design Decisions

* **Backend:** Node.js + Express, modular routes, JWT-based authentication
* **Frontend:** React with routing, Axios for API calls, localStorage for JWT
* **API Design:** RESTful endpoints, consistent request/response format
* **Modularity:** separates routes, controllers, and models for maintainability

---

##  Setup Instructions

### Backend

* cd backend
* npm install
* Create `.env` file with:

  * MONGO_URI=<your-mongodb-connection-string>
  * JWT_SECRET=<your-secret-key>
  * PORT=5000
* node index.js

### Frontend

* cd frontend
* npm install
* npm run dev

---

This documentation covers everything the assignment requested:

* API structure & design decisions
* Authentication flow & security
* Error handling & invalid input responses



Do you want me to do that next?
