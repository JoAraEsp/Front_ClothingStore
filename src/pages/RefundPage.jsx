import React from 'react'
import Navbar from '../components/Header'
import Refund from '../components/Refund'
import Footer from '../components/Footer'


function RefundPage() {
  return (
    <div className='formorder'>
        <Navbar />
        <Refund />
        <Footer />
    </div>
  )
}

export default RefundPage;