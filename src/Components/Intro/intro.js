import React from 'react'
import './intro.css';
import bg from '../../assets/toy-story.png';
import hireBtn from '../../assets/hire-button.png';
import {Link} from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
const Intro = () => {
  return (
    <Row>
    <section id='intro'>
      <Col lg={8} md={9} sm={9}>
        <div className='introContent d-flex'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Toy Story</span> <br/> Website Designer</span>
            <p className='introPara'>I am a crated by skilled web designer with experience in creating visually appealing and user friendly websites.</p>
            <Link><button className='btn'><img src={hireBtn} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
        </div>
        </Col>
        <Col lg={4} md={3} sm={3}>
        <img src={bg} alt='Profile' className='bg' />
        </Col>
    </section>
    </Row>
  )
}

export default Intro;