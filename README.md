# School Management API

A RESTful API built using **Node.js, Express.js, and MySQL** to manage school data.
This API allows users to add new schools and retrieve a list of schools sorted by their distance from a given location.

## 🚀 Live API

https://school-management-assignment-1.onrender.com

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- Railway (Database Hosting)
- Render (API Deployment)

## 📌 Features

- Add new school information to the database
- Retrieve schools sorted by distance from the user's location
- RESTful API design
- Input validation for required fields
- Distance calculation using latitude and longitude

## 📂 Project Structure

```
School_Management_API
│
├── config
│   └── db.js
│
├── controllers
│   └── schoolController.js
│
├── routes
│   └── schoolRoutes.js
│
├── utils
│   └── distance.js
│
├── Server.js
├── package.json
└── README.md
```

## 📍 API Endpoints

### 1️⃣ Add School

Adds a new school to the database.

**Endpoint**

```
POST /api/addSchool
```

**Request Body**

```json
{
  "name": "ABC School",
  "address": "Delhi",
  "latitude": 28.6139,
  "longitude": 77.209
}
```

**Response**

```json
{
  "message": "School added successfully"
}
```

---

### 2️⃣ List Schools

Returns a list of schools sorted by distance from the user’s location.

**Endpoint**

```
GET /api/listSchools
POST /api/addSchool
```

**Query Parameters**

```
latitude
longitude
```

Example:

```
/api/listSchools?latitude=28.6139&longitude=77.2090
```

**Response**

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Delhi",
    "latitude": 28.6139,
    "longitude": 77.209,
    "distance": 0
  }
]
```

## 🗄 Database Schema

**Table: schools**

| Column    | Type                              |
| --------- | --------------------------------- |
| id        | INT (Primary Key, Auto Increment) |
| name      | VARCHAR                           |
| address   | VARCHAR                           |
| latitude  | FLOAT                             |
| longitude | FLOAT                             |

## ⚙️ Installation & Setup

1️⃣ Clone the repository

```
git clone https://github.com/Mdirfan0786/School-management-assignment.git
```

2️⃣ Install dependencies

```
npm install
```

3️⃣ Create `.env` file

```
DB_HOST=your_db_host
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
DB_PORT=3306
PORT=5000
```

4️⃣ Start the server

```
node Server.js
```

Server will run on:

```
http://localhost:5000
```

## 🧪 API Testing

You can test the API using:

- Postman
- Thunder Client
- Browser (for GET endpoints)

## 👨‍💻 Author

**MD IRFAN**

---
