

import React, { useEffect, useState } from 'react'
import RecipeCart from '../components/RecipeCart'
import "./Recipes.css"

const Recipes = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }
        return response.json()
      })
      .then((data) => {
        setRecipes(data)
        setLoading(false)
      })
      .catch((e) => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  const Categories = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.category))
  ]

  const filteredRecipe = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" || recipe.category === category

    return matchesSearch && matchesCategory
  })

  if (loading) {
    return <h2>Loading recipes....</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <div className="recipes-page">

      <div className="recipes-header">
        <h1>Explore Recipes</h1>
        <p>Discover delicious recipes from different categories</p>
      </div>

      <div className="recipe-filters">

        <input
          type="text"
          placeholder="Search recipes....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

      </div>

      {filteredRecipe.length === 0 ? (
        <h2 className="no-recipes">No recipes found...</h2>
      ) : (
        <div className="recipe-grid">
          {filteredRecipe.map((recipe) => (
            <RecipeCart
              key={recipe._id}
              recipe={recipe}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default Recipes