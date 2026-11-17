// const express =require ("express")
// const mongoose=require("mongoose")
// const cors=require("cors")
// const recipeRoutes=require("./routs/recipeRoutes")
// const app=express()
// app.use(cors())

// app.use(express.json())
// mongoose.connect("mongodb://localhost:27017/recipe-sharing-app-mern")
// .then(()=>{
//     console.log("mongodb connected")
// })
// .catch((e)=>{
//     console.log("mongodb connection error",e)
// })

// app.use("/api/recipes",recipeRoutes)

// app.get("/",(req,resp)=>{
//     resp.send("Recipe api is running")
// })

// app.listen(5000,()=>{
//     console.log("running on port 5000")
// })








require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const recipeRoutes = require("./routs/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

app.get("/", (req, res) => {
  res.send("Recipe API is running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });




