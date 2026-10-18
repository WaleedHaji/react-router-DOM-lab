import React from 'react'
import { data, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Spin } from 'antd';


function ProductDetails() {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    async function getProduct() {
        try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        setProduct(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=> {getProduct()}, [])


  return (
    <div>
        <h1>Product Details</h1>

        {product ? (<>
            <h2>Title: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </>) :  <Flex justify='center' align="center" gap="medium">
    <Spin size="large" />
  </Flex>}
    </div>
  )
}

export default ProductDetails