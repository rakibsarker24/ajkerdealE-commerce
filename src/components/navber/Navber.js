import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import NavLink, { Link } from 'react-router-dom';
import '../navber/navber.css'

const Navber = () => {
  return (
    <>
      <section id='navber'>
        <Container>
          <Row className='motherc'>
              <Col sm='2' md='2' lg='2'>
                <div className="logo">
                    <Link to='/'>
                      <img src="images/logo.svg" alt="logo" />
                    </Link>
                  </div>
              </Col>
              <Col sm='9' md='9' lg='9'>
                  <div className="search">
                    <input type="search" placeholder='search product' />
                        <AiOutlineSearch className="icon"/>
                  </div>
              </Col>
              <Col sm='1' md='1' lg='1'>
                  <div className="cart">
                    <AiOutlineShoppingCart className='carticon'/>
                        <h4>0</h4>
                  </div>
              </Col>
          </Row>
        </Container>
      </section>
   </>
  )
}

export default Navber