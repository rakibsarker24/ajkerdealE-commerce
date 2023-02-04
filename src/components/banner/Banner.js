import React from 'react'
import '../banner/banner.css'
import { Container,Row,Col, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <>
        <section id='banner' style={{background:`url(${'images/banner.jpg'})no-repeat center`}}>
            <Container>
                <Row>
                    <Col>
                        <div className="items">
                            <p>FEST DEAL</p>
                            <h2>Upto <span>30%</span> OFF for You.</h2>
                            <NavLink to=''>Go to Shop</NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Banner