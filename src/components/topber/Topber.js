import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../topber/topber.css'

const Topber = () => {
  return (
    <>
      <section id='topber'> 
        <Container>
            <div className="items">
              <ul>
                <li><NavLink to='/'>Today Offer</NavLink></li>
                <li><NavLink to='/'> Complaint</NavLink></li>
                <li><NavLink to='/'>Tracking Delivery</NavLink></li>
                <li><NavLink to='/reg'>SignIn</NavLink></li>
                <li><NavLink to='/'>English</NavLink></li>
                <li><NavLink to='/'>বাংলা</NavLink></li>
              </ul>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Topber