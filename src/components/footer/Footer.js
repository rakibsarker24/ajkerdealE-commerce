import React from 'react'
import '../footer/footer.css'
import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { Link,NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <section id='footer'>
            <Container>
                <Row>
                    <Col lg='3' sm='6'>
                        <div className="left">
                            <img src="images/logo.png" alt="logo" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur ipsum esse, aut ab ducimus laboriosam consequuntur ipsam deserunt autem?</p>
                        </div>
                        <div className="icon">
                            <span><Link to=''><FaFacebookF/></Link></span>
                            <span><Link to=''><AiOutlineTwitter/></Link></span>
                            <span><Link to=''><FaInstagram/></Link></span>
                            <span><Link to=''><FaLinkedinIn/></Link></span>
                            <span><Link to=''><AiFillYoutube/></Link></span>
                        </div>
                        <p>Please Follow Us.</p>
                    </Col>
                    
                    <Col lg='3' sm='6'>
                        <div className="title">
                            <h4>Hot Deal</h4>
                        </div>
                            <div className="right">
                                <NavLink to='/'>Shirt</NavLink>
                                <NavLink to='/'>Pant</NavLink>
                                <NavLink to='/'>Borka</NavLink>
                                <NavLink to='/'>Computer</NavLink>
                                <NavLink to='/'>Gadgets</NavLink>
                                <NavLink to='/'>Farnichar</NavLink>
                                <NavLink to='/'>Kitchen Items</NavLink>
                            </div>
                    </Col>

                    <Col lg='3' sm='6'>
                        <div className="title">
                            <h4>Category</h4>
                        </div>
                            <div className="right">
                                <NavLink to='/'>Man Collections</NavLink>
                                <NavLink to='/'>Woman Collections</NavLink>
                                <NavLink to='/'>Baby Collections</NavLink>
                                <NavLink to='/'>Home Associates</NavLink>
                                <NavLink to='/'>Kitchen Associates</NavLink>
                                <NavLink to='/'>Computer Accessories</NavLink>
                                <NavLink to='/'>Jewellerys Items</NavLink>
                            </div>
                    </Col>

                    <Col lg='3' sm='6'>
                        <div className="title">
                            <h4>Daily News</h4>
                        </div>
                            <div className="end">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur blanditiis sed harum odit dolores a quam ipsum quasi totam.</p>
                                <div className="subs">
                                    <input type="email" placeholder=' your email' />
                                    <Link to='/' className='sub'>Subscribe</Link>
                                </div>
                            </div>
                            <div className="location">
                               <span><HiLocationMarker/></span>
                                <p>West Jamalpur, KhanJam, USA</p>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Footer