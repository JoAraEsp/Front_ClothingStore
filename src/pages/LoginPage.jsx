import React from 'react'
import Navbar from '../components/Header'
import Login from '../components/Login'
import Footer from '../components/Footer'


function LoginPage() {
  return (
    <div className='login'>
        <Navbar />
        <Login />
        <Footer />
    </div>
  )
}

export default LoginPage;