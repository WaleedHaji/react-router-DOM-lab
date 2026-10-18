import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import CreateProduct from './pages/CreateProduct'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'
import { Flex, Spin } from 'antd';

function App() {
  return (
    <div>
      <Navbar/>
      <h1>React Router DOM Lab</h1>


      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/products/new-product' element={<CreateProduct/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:productId' element={<ProductDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App