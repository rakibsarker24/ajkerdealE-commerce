import React from 'react'
import Topber from '../topber/Topber'
import Navber from '../navber/Navber'
import Hslider from '../slider/Hslider'
import ComputerAccessories from '../computerAccessories/ComputerAccessories'
import Footer from '../footer/Footer'

const Computer = () => {
  return (
    <>
        <Topber/>
        <Navber/>
        <Hslider/>
        <ComputerAccessories/>
        <Footer/>
    </>
  )
}

export default Computer