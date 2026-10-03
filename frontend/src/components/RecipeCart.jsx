
import React from 'react'
import { Link } from "react-router-dom"
import "./RecipeCart.css"

const RecipeCart = ({ recipe }) => {
  return (
    <div className='recipe-card'>

      <img
        src={recipe.image}
        alt={recipe.title}
        className='recipe-image'
      />

      <div className='recipe-content'>

        <span className='category'>{recipe.category}</span>

        <h3>{recipe.title}</h3>

        <p>{recipe.description}</p>

        <div className='recipe-info'>

          <span> ⏱ {recipe.cookingtime} mins </span>

          <Link
            className='view-btn'
            to={`/recipe/${recipe._id}`}
          >
            View Recipe
          </Link>

        </div>

      </div>
    </div>
  )
}

export default RecipeCart

