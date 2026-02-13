import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/users/Users'
import Products from './components/products/Product'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
