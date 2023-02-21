import React from 'react'
import { Link } from 'react-router-dom';
import { Col,Card } from 'react-bootstrap';
import { GiRoundStar } from 'react-icons/gi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

const CardBorka = (props) => {

    

  return (
    <>
            <Col lg='2' sm='4' md='3' xs='6' className='mb-3'>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Text>
                        <div className="items">
                                <h4>{props.title}</h4>
                            <div className="">
                                {props.rating>=1 ? <GiRoundStar/> : props.rating >=.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                {props.rating>=2 ? <GiRoundStar/> : props.rating >=1.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                {props.rating>=3 ? <GiRoundStar/> : props.rating >=2.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                {props.rating>=4 ? <GiRoundStar/> : props.rating >=3.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                                {props.rating>=5 ? <GiRoundStar/> : props.rating >=4.5 ? <BsStarHalf/> : <AiOutlineStar/>}
                            </div>
                            <Card.Text>
                                <span>{props.price}</span>
                                <label>55$</label>
                                <Link to='/addCard'>Add to Cart</Link>
                            </Card.Text>
                        </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    </>
  )
}

export default CardBorka