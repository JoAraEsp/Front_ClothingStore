import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import FormOrder from './pages/FormOrder';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import RefundPage from './pages/RefundPage';

function App() {
  const [registerData, setRegisterData] = useState({})

  return (
    <div className='App'>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/order' element={<FormOrder />} />
          <Route path='/refund' element={<RefundPage />} />
          <Route path='/register' element={<Register setRegisterData={setRegisterData}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
