import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/nav'
import Body1 from './components/Body1/Body1'
import Counter from './components/ClickCounter/Count'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
      <Nav />
      <Body1 />
      <Counter />
    </>
  )

}
export default App
