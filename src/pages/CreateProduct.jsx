import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateProduct() {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        price: '',
        quantity: ''
    })

    const navigate = useNavigate()

    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()

        try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData)

        navigate('/products')
        }
        catch(err){
            console.log(err)
        }
        
    }


  return (
    <div>
        <h1>Create New Product</h1>

        <form onSubmit={handleSubmit}>

            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            value={formData.title}
            onChange={handleChange}
            name='title'
            id='title'
            />

            <label htmlFor="description">Description:</label>
            <input 
            type="text" 
            value={formData.description}
            onChange={handleChange}
            name='description'
            id='description'
            />

            <label htmlFor="category">Category:</label>
            <input 
            type="text" 
            value={formData.category}
            onChange={handleChange}
            name='category'
            id='category'
            />

            <label htmlFor="price">Price:</label>
            <input 
            type="text" 
            value={formData.price}
            onChange={handleChange}
            name='price'
            id='price'
            />

            <label htmlFor="quantity">Quantity:</label>
            <input 
            type="text" 
            value={formData.quantity}
            onChange={handleChange}
            name='quantity'
            id='quantity'
            />
            

            <button>Create Product</button>
        </form>
    </div>
  )
}

export default CreateProduct