import React from 'react';
import './Slider.css';

const slidesInfo = [
  { src: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_960_720.jpg", alt: 'Proyect 1', desc: 'Proyect1' },
  { src: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_960_720.jpg", alt: 'Proyect 2', desc: 'Proyect2' },
  { src: "https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_960_720.jpg", alt: 'Proyect 3', desc: 'Proyect3' },
];
const slides = slidesInfo.map(slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt}/>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));
export default slides;
