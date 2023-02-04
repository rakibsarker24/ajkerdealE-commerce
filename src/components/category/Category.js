import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiShirtLine } from 'react-icons/ri';
import { TbShirt } from 'react-icons/tb';
import { GiArmoredPants } from 'react-icons/gi';
import { GiAmpleDress } from 'react-icons/gi';
import { GiConverseShoe } from 'react-icons/gi';
import { GiClothesline } from 'react-icons/gi';
import { Container,Row,Col } from 'react-bootstrap';
import '../category/category.css'

const Category = () => {
    
  return (
    <>
        <section id='category'>
            <Container>
                <Row>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/tshirt'>
                                <div className="item">
                                   <TbShirt className='icon'/>T-shirt
                                </div>
                            </NavLink>
                    </Col>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/pant'>
                                <div className="item">
                                    <GiArmoredPants className='icon'/>Pant
                                </div>
                            </NavLink>
                    </Col>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/shirt'>
                                <div className="item">
                                    <RiShirtLine className='icon'/>Shirt
                                </div>
                            </NavLink>
                    </Col>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/threepich'>
                                <div className="item">
                                        <GiAmpleDress className='icon'/>Threepich
                                </div>
                            </NavLink>
                    </Col>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/saree'>
                                <div className="item">
                                    <GiClothesline className='icon'/>Saree
                                </div>
                            </NavLink>
                    </Col>
                    <Col lg='2' md='4' sm='6' xl='2'>
                            <NavLink to='/shose'>
                                <div className="item">
                                    <GiConverseShoe className='icon'/>Shoes
                                </div>
                            </NavLink>
                    </Col>
                  
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Category