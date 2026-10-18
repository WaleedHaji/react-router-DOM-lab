import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
        <Link to='/'>Homepage</Link>
        <Link to='/products'>All Products</Link>
        <Link to='/products/new-product'>Create Product</Link>
    </div>

  )
}

export default Navbar