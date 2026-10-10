import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./EditRecipe.css"

const EditRecipe = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    cookingtime: "",
    image: "",
    ingredients: "",
    instructions: ""
  })
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")
    const [error, setError] = useState("")

   useEffect(()=>{
     fetch(`http://localhost:5000/api/recipes/${id}`)
     .then((response)=>{
       if(!response.ok){
         throw new Error("Recipe not found")
       }
       return response.json()
     })
     .then((data)=>{
       setFormData({
        title:data.title,
        description:data.description,
        category:data.category,
        cookingtime:data.cookingtime,
        image:data.image,
        // ingredients:data.ingredients.join(",")
        ingredients:data.ingredients,
        instructions:data.instructions

       })
      setLoading(false)
     })
     .catch((e)=>{
       setError(e.message)
       setLoading(false)
     })
    }, [id])

     const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };



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
    // const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
     const response = await fetch(`https://recipe-sharing-app-6m8v.onrender.com/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeData)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || data.message || "Failed to update recipe")
    }

    setMessage("Recipe updated successfully")

    // setFormData({
    //   title: "",
    //   description: "",
    //   category: "",
    //   cookingtime: "",
    //   image: "",
    //   ingredients: "",
    //   instructions: ""
    // })

    setTimeout(() => {
      navigate(`/recipe/${id}`)
    }, 2000)

  } catch (e) {
    setError(e.message)
  }
}

 if(loading){
  return <h2>Loading recipes....</h2>
 }
 if(error){
  return <h2>{error}</h2>
 }

  return (
    <div className='edit-recipe-page'>
      <h1>Edit Recipe</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' id='' placeholder='Recipe title' value={formData.title} onChange={handleChange} required />
        <textarea name="description" id="" placeholder='Recipe Description ' value={formData.description} onChange={handleChange} />
        <input type="text" name='category' id='' placeholder='category' value={formData.category} onChange={handleChange} required />
        <input type="number" name='cookingtime' id='' placeholder='Cooking time in minutes' value={formData.cookingtime} onChange={handleChange} required />
        <input type="text" name='image' id='' placeholder='image url' value={formData.image} onChange={handleChange} required />
        <input type="text" name='ingredients' id='' placeholder='ingredients seperated by commas' value={formData.ingredients} onChange={handleChange} required />
        <textarea name="instructions" id="" placeholder='cooking instructions' value={formData.instructions} onChange={handleChange} required />
        <button type='submit'>Update Recipe</button>
        {message && <p className='success-message'>{message}</p>}
        {error && <p className='errror-message'>{error}</p>}
      </form>

    </div>
  )
}

export default EditRecipe

