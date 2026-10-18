import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'

function ProductList() {
  const [products, setProducts] = useState([])

  async function getAllProducts() {
    try{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)

    setProducts(response.data)
    }
    catch(err){
      console.log(err)
    }
  }

  // We use the useEffect to avoid infite calling of the function (getAllStudents) in this case.
  useEffect(()=>
    {getAllProducts()

    },[])

  return (
    <div>
        
     <h1>ProductList</h1>

     {products.map((oneProduct)=>
      <div key={oneProduct._id}>
        <p>Name: {oneProduct.title}</p>
        <Link to={`/products/${oneProduct._id}`}>Go to Product Details</Link>

      </div>
    )}

    </div>
  )
}

export default ProductList