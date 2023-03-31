import React from 'react'
import Navbar from '../components/Header'
import Order from '../components/Order'
import Footer from '../components/Footer'


function FormOrder() {
  return (
    <div className='formorder'>
        <Navbar />
        <Order />
        <Footer />
    </div>
  )
}

export default FormOrder;