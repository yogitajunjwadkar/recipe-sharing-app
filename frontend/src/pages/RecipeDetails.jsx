import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./RecipeDetails.css"
import { useState,useEffect } from 'react'

const RecipeDetails = () => {
  const{id}=useParams()
  
const [recipe,setRecipe]=useState(null)
 const [loading,setLoading]=useState(true)
 const [error,setError]=useState("")
 const navigate=useNavigate()
 useEffect(()=>{
  fetch(`http://localhost:5000/api/recipes/${id}`)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Recipe not found")
    }
    return response.json()
  })
  .then((data)=>{
    setRecipe(data);
    setLoading(false)

  })
  .catch((e)=>{
    setError(e.message)
    setLoading(false)
  })
 }, [id])

 const handleDelete=async()=>{
 const confirmDelete= window.confirm("are you sure you want to delete this recipe")
 if(!confirmDelete){
  return;
 }
 try{
  const response= await fetch(`http://localhost:5000/api/recipes/${id}`,{method:"DELETE"})
  const data=await response.json()
  if(!response.ok){
    throw new Error(data.message || "Failed to delete recipe")
  }
  alert("recipe deleted successfully")
  navigate("/recipes")
 }
 catch(error){
  alert(error.message)
 }
 }

 if(loading){
  return <h2>Loading recipes....</h2>
 }
 if(error){
  return <h2>{error}</h2>
 }
 
  return (
    <div className='recipe-details'>
      <img src={recipe.image} alt={recipe.title} />
      <div className='details-content'>
        <span className='category'>{recipe.category}</span>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
     <p>Cooking Time: {recipe.cookingtime} minutes</p>
        <h2>Ingredients:</h2>
        {/* <ul>
          {recipe.ingredients.map((ingredient,index)=>(
            <li key={index}>{ingredient}</li>
          ))}
        </ul> */}
 <ul>
  {recipe.ingredients
    .split(",")
    .map((ingredient, index) => (
      <li key={index}>{ingredient.trim()}</li>
    ))}
</ul>
        <h2>Instructions:</h2>
        <p>{recipe.instructions}</p>
        <div className="recipe-actions">
          <button className='edit-btn' onClick={()=>navigate(`/edit-recipe/${recipe._id}`)}>Edit Recipe</button>
          <button className='delete-btn' onClick={handleDelete}>Delete Recipe</button>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails
