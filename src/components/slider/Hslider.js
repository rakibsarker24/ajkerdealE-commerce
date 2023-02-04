import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import '../slider/slider.css'
import { Container } from 'react-bootstrap';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Hslider = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


  return (
    <>
        <section id='slider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"350px"}}
                    src="images/s1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"350px"}}
                    src="images/s2.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"350px"}}
                    src="images/s3.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    style={{height:"350px"}}
                    src="images/s2.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

           <Container>
                <div className="menu">
                        <ul>
                            <li><NavLink to='/'>Man Collections<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Woman Collections<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Baby Collections<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Home Associates<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Kitchen Associates<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/computer'>Computer Accessories<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Gadgets<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Gadgets<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Jewellerys<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Farnichar<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Farnichar<MdOutlineKeyboardArrowRight/></NavLink></li>
                            <li><NavLink to='/'>Farnichar<MdOutlineKeyboardArrowRight/></NavLink></li>
                            
                        </ul>
                    </div>
           </Container>
        </section>
    </>
  )
}

export default Hslider