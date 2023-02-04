import React from 'react'
import Shirt from '../shirt/Shirt'
import Navber from '../navber/Navber'
import Topber from '../topber/Topber'
import Hslider from '../slider/Hslider'
import Footer from '../footer/Footer'

const Pshirt = () => {
  return (
    <>
        <Topber/>
        <Navber/>
        <Hslider/>
        <Shirt/>
        <Footer/>
    </>
  )
}

export default Pshirt