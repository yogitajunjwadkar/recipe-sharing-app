const express =require("express")

const { createRecipe, getRecipe,  getRecipes,  updateRecipe,  deleteRecipe}=require("../controllers/recipeController")

const router=express.Router()
router.post("/",createRecipe)
router.get("/",getRecipes)
router.get("/:id",getRecipe)
router.put("/:id",updateRecipe)
router.delete("/:id",deleteRecipe)



module.exports=router