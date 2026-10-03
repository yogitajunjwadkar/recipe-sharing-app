import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero-content'>
          <p className='tagline'>DISCOVER | COOK | SHARE</p>
          <h1>Discover Delicious <span>Recipes</span></h1>
          <p className='hero-text'>Explore amazing, discover new flavours, and share your favorite dishes with everyone</p>
          <div className='hero-button'>
            <Link to="/recipes" className='primary-btn'>Explore recipes</Link>
            <Link to="/add-recipe" className='secondary-btn'>Share a recipe</Link>
          </div>
        </div>

        <div className='hero-image'>
          <div className='food-circle'> 🍜 </div>
        </div>

      </section>

      <section className='features'>
        <div className='feature-card'>
          <span> 🍕 </span>
          <h3>Share</h3>
          <p>Add your favourite recipe and share them</p>
        </div>
        <div className='feature-card'>
          <span>❤️ </span>
          <h3>Enjoy</h3>
          <p> Save ideas and discover new dishes to cook</p>
        </div>
      </section>


    </div>
  )
}

export default Home
