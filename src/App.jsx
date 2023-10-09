import { useState } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import SignIn from './Components/SignPage/SignIn/SignIn.jsx'
import SignUp from './Components/SignPage/SignUp/SignUp.jsx'
import Home from './Components/HomePage/Home.jsx'
import Services from './Components/ServicesPage/Services.jsx'
import CreateService from './Components/CreateService/CreateService.jsx'
import NewService from './Components/CreateService/NewService.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/cadastro' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/new-service' element={<CreateService />} />
        <Route path='/services/update-service' element={<NewService />} />

      </Routes>
    </BrowserRouter >
  )
}

export default App
