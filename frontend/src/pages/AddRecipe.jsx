import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddRecipe.css"
const AddRecipe = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    cookingtime: "",
    image: "",
    ingredients: "",
    instructions: ""
  })
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  setMessage("")
  setError("")

  const recipeData = {
    ...formData,
    cookingtime: Number(formData.cookingtime),
    ingredients: formData.ingredients
      // .split(",")
      // .map((item) => item.trim())
  }

  try {
    const response = await fetch("https://recipe-sharing-app-6m8v.onrender.com/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || data.message || "Failed to add recipe")
    }

    setMessage("Recipe added successfully")

    setFormData({
      title: "",
      description: "",
      category: "",
      cookingtime: "",
      image: "",
      ingredients: "",
      instructions: ""
    })

    setTimeout(() => {
      navigate("/recipes")
    }, 2000)

  } catch (e) {
    setError(e.message)
  }
}
  return (
    <div className='add-recipe-page'>
      <h1>Add New Recipe</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' id='' placeholder='Recipe title' value={formData.title} onChange={handleChange} required />
        <textarea name="description" id="" placeholder='Recipe Description ' value={formData.description} onChange={handleChange} />
        <input type="text" name='category' id='' placeholder='category' value={formData.category} onChange={handleChange} required />
        <input type="number" name='cookingtime' id='' placeholder='Cooking time in minutes' value={formData.cookingtime} onChange={handleChange} required />
        <input type="text" name='image' id='' placeholder='image url' value={formData.image} onChange={handleChange} required />
        <input type="text" name='ingredients' id='' placeholder='ingredients seperated by commas' value={formData.ingredients} onChange={handleChange} required />
        <textarea name="instructions" id="" placeholder='cooking instructions' value={formData.instructions} onChange={handleChange} required />
        <button type='submit'>Add Recipe</button>
        {message && <p className='success-message'>{message}</p>}
        {error && <p className='errror-message'>{error}</p>}
      </form>

    </div>
  )
}

export default AddRecipe
