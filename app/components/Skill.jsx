
"use client"
import React from 'react';
import Marquee from 'react-marquee-slider';


const images = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  "https://logowik.com/content/uploads/images/tailwind-new-20216879.jpg",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",

];

const InfiniteScroll = () => {
  let slider;

  const handleMouseEnter = () => {
    if (slider) {
      slider.stopAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (slider) {
      slider.startAnimation();
    }
  };

  return (
    <div
      className="carousel-container flex justify-center items-center"
      style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Marquee
        velocity={20}
        minScale={0.7}
        maxScale={1.2}
        spacing={50}
        direction={'rtl'}
        ref={(ref) => (slider = ref)}
        
      >
       
      {images.map((image, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '150px', height:'100px', display: 'inline-block' }} />
          </div>
        ))}
     
      </Marquee>
    </div>
  );
};

export default InfiniteScroll;
