import { useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import SignIn from './Components/SignPage/SignIn/SignIn.jsx'
import SignUp from './Components/SignPage/SignUp/SignUp.jsx'
import Home from './Components/Home/Home.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/cadastro' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
