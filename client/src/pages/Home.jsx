import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class='home-container'>
        <button><Link class="link" to='/add'>ADD EMPLOYEE DATA</Link></button>
        <button><Link class="link" to='/show'>VIEW EMPLOYEE DATA</Link></button>
    </div>
  )
}

export default Home