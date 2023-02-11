import React from 'react'
import '../muslim/muslim.css'
import { NavLink } from 'react-router-dom'
import { Container,Row,Col, } from 'react-bootstrap'

const Muslim = () => {
  return (
    <>
        <section id='muslim'>
            <Container>
                <Row>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/'>
                            <img src="images/muslin.png" alt="" />
                        </NavLink>
                    </Col>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/'>
                            <img src="images/abaya.png" alt="" />
                        </NavLink>
                    </Col>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/borka'>
                            <img src="images/borka.png" alt="" />
                        </NavLink>
                    </Col>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/'>
                            <img src="images/hijab.png" alt="" />
                        </NavLink>
                    </Col>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/'>
                            <img src="images/khimar.png" alt="" />
                        </NavLink>
                    </Col>
                    <Col lg='2' sm='4' md='3'>
                        <NavLink to='/'>
                            <img src="images/scarf.png" alt="" />
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Muslim