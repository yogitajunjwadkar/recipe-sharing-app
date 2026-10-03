const Recipe=require("../model/Recipe")

const createRecipe=async(req,resp)=>{
try{
    const recipe=await Recipe.create(req.body)
    resp.status(201).json({message:"recipe added successfully",recipe:recipe})
}
catch(e){
resp.status(500).json({message:"failed to add recipe",error:e.message})
}
}

const getRecipes=async(req,resp)=>{
    try{
        const recipes=await Recipe.find()
        resp.status(200).json(recipes)
    }
    catch(error){
        resp.status(500).json({message:"failed to fetch recipes",error:error.message})
    }
}

const getRecipe=async(req,resp)=>{
    try{
        const recipe=await Recipe.findById(req.params.id)
        if(!recipe){
            return resp.status(404).json({message:"Recipe not found"})
        }
        resp.status(200).json(recipe)
    }
    catch(error){
        resp.status(500).json({message:"Failed to fetch recipe",error:error.message})
    }
}

const updateRecipe=async(req,resp)=>{
    try{
        const recipe= await Recipe.findByIdAndUpdate(req.params.id,req.body, { returnDocument: "after" }) 
        if(!recipe){
            return resp.status(404).json({message:"Recipe not found"})
        }
        resp.status(200).json({message:"Recipe updated successfully",recipe:recipe})
    }
    catch(error){
        resp.status(500).json({message:"failed to update recipe",error:error.message})
    }
}

const deleteRecipe=async(req,resp)=>{
    try{
        const recipe=await Recipe.findByIdAndDelete(req.params.id)
        if(!recipe){
            return resp.status(404).json({message:"Recipe not found"})
        }
        resp.status(200).json({message:"Recipe deleted successfully"})
    }
    catch(error){
        resp.status(500).json({message:"Failed to delete recipe",error:error.message})
    }
}


module.exports = {
    createRecipe,
    getRecipe,
    getRecipes,
    updateRecipe,
    deleteRecipe
}