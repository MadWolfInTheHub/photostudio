import React, { useRef, useState, useEffect } from 'react';
import { data } from '../../../../mocData/index'
import PhotoCard from '../photoCard/PhotoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './slider.scss'

const Slider = () => {
  
  const ref = useRef<HTMLDivElement>(null)
  
  const [carouselWith, setCarouselWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0)

  const [px, setPx] = useState(windowWidth)

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollWidth !== undefined ? setCarouselWidth(ref.current?.scrollWidth) : setCarouselWidth(0) ;
      ref.current?.offsetWidth !== undefined ? setWindowWidth(ref.current?.offsetWidth) : setWindowWidth(0);
    }, 500);
  }, [carouselWith]);

  const carouselSlider = (event: any) => {
    console.log(event?.target.value)
  }



  return (
    <div className='slider' ref={ref}>
      {
        data.map(gallery => (
          <PhotoCard 
            cover={gallery.cover}
            name={gallery.galleryName}
          />
        ))
      }
      <div className=' gallery'>
        <div className='gallery__buttons'>
          <FontAwesomeIcon className='gallery__buttons_btn' icon={faArrowAltCircleLeft}/>
          <FontAwesomeIcon className='gallery__buttons_btn' icon={faArrowAltCircleRight}/>
        </div>
      </div>
    </div>
  );
};

export default Slider;