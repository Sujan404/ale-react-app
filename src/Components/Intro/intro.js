import React from 'react'
import './intro.css';
import bg from '../../assets/toy-story.png';
import {Link} from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>Hello,
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Toy Story</span> <br/> Website Designer</span>
            <p className='introPara'>I am a skilled web designer with experience in creating visual websites</p>
            <Link><button className='btn'><img src='' alt=''/></button></Link>
        </div>
        <img src={bg} alt='Profile' />
    </section>
  )
}

export default Intro;