import React from 'react'
import Navbar from '../components/Header'
import CatalogoRopa from '../components/CatalogoRopa'
import Footer from '../components/Footer'


function FormOrder() {
  return (
    <div className='formorder'>
        <Navbar />
        <CatalogoRopa />
        <Footer />
    </div>
  )
}

export default FormOrder;