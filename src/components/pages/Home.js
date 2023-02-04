import React from 'react'
import Topber from '../topber/Topber'
import Navber from '../navber/Navber'
import Hslider from '../slider/Hslider'
import Category from '../category/Category'
import Hotdeal from '../hotDeal/Hotdeal'
import Banner from '../banner/Banner'
import NewArrival from '../newArrival/NewArrival'
import Muslim from '../muslim/Muslim'
import ComputerAccessories from '../computerAccessories/ComputerAccessories'
import Footer from '../footer/Footer'


const Home = () => {
  return (
    <>
        <Topber/>
        <Navber/>
        <Hslider/>
        <Category/>
        <Hotdeal/>
        <Banner/>
        <NewArrival/>
        <Muslim/>
        <ComputerAccessories/>
        <Footer/>
    </>
  )
}

export default Home