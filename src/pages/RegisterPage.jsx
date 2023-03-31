import React from 'react'
import Navbar from '../components/Header'
import Register from '../components/Register'
import Footer from '../components/Footer'

function RegisterPage() {
    return (
      <div className='register'>
          <Navbar />
          <Register />
          <Footer />
      </div>
    )
  }
  
  export default RegisterPage;