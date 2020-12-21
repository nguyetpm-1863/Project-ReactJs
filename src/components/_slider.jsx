import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import Slider1 from '../assets/slider-1.jpg';
import Slider2 from '../assets/slider-2.jpg';
import Slider3 from '../assets/slider-3.jpg';
import Slider4 from '../assets/slider-4.jpg';


const Slider = () => {
  return (
    <Carousel autoplay effect="fade">
      <div className='item'>
        <img src={ Slider1 } alt='Slider 1'/>
      </div>
      <div className='item'>
        <img src={ Slider2 } alt='Slider 2'/>
      </div>
      <div className='item'>
        <img src={ Slider3 } alt='Slider 3'/>
      </div>
      <div className='item'>
        <img src={ Slider4 } alt='Slider 4'/>
      </div>
    </Carousel>
  );
};

export default Slider;
