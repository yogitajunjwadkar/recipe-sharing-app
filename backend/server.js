
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipeRoutes = require("./routs/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/recipe-sharing-app-mern")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });

app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Recipe API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
