import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import FormOrder from './pages/FormOrder';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<FormOrder />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
