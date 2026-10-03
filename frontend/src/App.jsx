import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import AddRecipe from './pages/AddRecipe'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './pages/EditRecipe'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/add-recipe' element={<AddRecipe/>}/>
    <Route path='/recipe/:id' element={<RecipeDetails/>}/>
    
    <Route path='/edit-recipe/:id' element={<EditRecipe/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
