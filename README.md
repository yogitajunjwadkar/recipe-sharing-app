# 🍴 Recipe Sharing App

A full-stack Recipe Sharing web application built using the MERN stack.

## 🚀 Technologies Used

- HTML
- CSS
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose

## ✨ Features

- Add new recipes
- View all recipes
- Search recipes
- Filter recipes by category
- View recipe details
- Edit recipes
- Delete recipes
- REST API integration
- MongoDB database connectivity

## 📁 Project Structure

```text
recipe-sharing-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx
    └── vite.config.js
```

## 🔗 API

Base URL:

```text
http://localhost:5000/api/recipes
```

### API Methods

- `GET` – Get all recipes
- `POST` – Add a new recipe
- `GET /:id` – Get a specific recipe
- `PUT /:id` – Update a recipe
- `DELETE /:id` – Delete a recipe

## ▶️ How to Run

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Then open the local URL shown by Vite in the browser.

## 🎯 Project Purpose

The purpose of this project is to build a practical MERN stack application and understand frontend-backend communication, REST APIs, CRUD operations, and MongoDB integration.
