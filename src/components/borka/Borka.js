import React, { useEffect, useState } from 'react'
import '../borka/borka.css'
import { GiRoundStar } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { Container,Row,Col,Card,Pagination  } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Borka = () => {


    let [borka,setBorka] = useState([])

    useEffect(()=>{
        async function borka(){
            let data = await axios.get("https://fakestoreapi.com/products")
            setBorka(data.data)
            console.log(data.data)
        }
        borka()
    },[])

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

                        <Col lg='2' sm='4' md='3' className='mb-3'>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={items.image} />
                                <Card.Body>
                                    {/* <Card.Title>Card Title</Card.Title> */}
                                    <Card.Text>
                                    <div className="items">
                                            <h4>{items.title}</h4>
                                        <div className="">
                                            
                                            {items.rating.rate>=1 ? <GiRoundStar/> : items.rating.rate>=.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                            {items.rating.rate>=2 ? <GiRoundStar/> : items.rating.rate>=1.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                            {items.rating.rate>=3 ? <GiRoundStar/> : items.rating.rate>=2.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                            {items.rating.rate>=4 ? <GiRoundStar/> : items.rating.rate>=3.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                            {items.rating.rate>=5 ? <GiRoundStar/> : items.rating.rate>=4.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                            
                                        </div>
                                        <Card.Text>
                                            <span>{items.price}</span>
                                            <label>55$</label>
                                            <Link to='/addCard'>Add to Cart</Link>
                                        </Card.Text>
                                    </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>

                <Row className=''>
                    <Col lg='12' >
                        <div className="paginate">
                            <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Borka