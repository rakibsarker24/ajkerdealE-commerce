import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Container,Nav,Navbar,Form,Button} from 'react-bootstrap'
import NavLink, { Link } from 'react-router-dom';
import '../navber/navber.css'

const Navber = () => {
  return (
    <>
      <section id='navber'>
        <Container>
          <div className="items">

            <div className="logo">
              <Link to='/'>
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </div>

            <div className="search">
              <input type="search" placeholder='search product' />
                 <AiOutlineSearch className='icon'/>
            </div>

            <div className="cart">
              <AiOutlineShoppingCart className='carticon'/>
                  <h4>0</h4>
            </div>

          </div>
        </Container>
      </section>
   </>
  )
}

export default Navber