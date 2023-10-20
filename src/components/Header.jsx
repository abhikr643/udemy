import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header class="p-3 text-bg-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img className='logo' src='./Images/udemy-logo.png'></img>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-3 text-dark">Categories</a></li>

        <form className="searchbar " role="search">
          <input 
          type="search" class="form-control form-control-dark text-bg-white" placeholder= "Search for anything" aria-label="Search"/>
        </form>


          <li><a href="#" class="nav-link px-2 text-dark">Udemy Business</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">Teach on udemy</a></li>
        </ul>

        <img className='icons' src='./Images/cart-icon.png'></img>

        <div class="text-end">
          <button type="button" class="btn btn-outline-dark me-2">Login</button>
          <button type="button" class="btn btn-dark">Sign-up</button>
        </div>

        <img className='icons world-icon' src='./Images/world-icon.png'></img>
      </div>
    </div>
  </header>
  )
}

export default Header