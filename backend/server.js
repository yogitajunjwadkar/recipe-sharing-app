const express =require ("express")
const mongoose=require("mongoose")
const cors=require("cors")
const recipeRoutes=require("./routs/recipeRoutes")
const app=express()
app.use(cors())

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/recipe-sharing-app-mern")
.then(()=>{
    console.log("mongodb connected")
})
.catch((e)=>{
    console.log("mongodb connection error",e)
})

app.use("/api/recipes",recipeRoutes)

app.get("/",(req,resp)=>{
    resp.send("Recipe api is running")
})

app.listen(5000,()=>{
    console.log("running on port 5000")
})


