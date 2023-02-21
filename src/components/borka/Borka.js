import React, { useEffect, useState } from 'react'
import '../borka/borka.css'
import { Container,Row,Col,Card,Pagination  } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardBorka from './CardBorka';

const Borka = ({borka}) => {


  return (
    <>
        <section id='cart'>
            <Container>
                <Row>
                    <div className="heading">
                        <h2>Borka Shoping</h2>
                    </div>
                </Row>
                <Row>
                    {borka.map((items)=>(
                        <CardBorka 
                        image={items.image} 
                        title={items.title} 
                        rating={items.rating.rate} 
                        price={items.price}
                        
                        />
                    ))}
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Borka