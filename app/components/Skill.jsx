
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
const images2 = [
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
  "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  "data:image/png;base64,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",
  "https://miro.medium.com/v2/resize:fit:1400/1*dr2mRbME89TjbsKd4_gxgQ.jpeg",

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
      className="carousel-container flex justify-center items-center flex-col"
      style={{ width: '100%', overflow: 'hidden', position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Marquee
        velocity={20}
        minScale={0.7}
        maxScale={1.2}
        spacing={50}
        direction={'ltr'}
        ref={(ref) => (slider = ref)}
        
      >
       
      {images.map((image, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '150px', height:'100px', display: 'inline-block' }} />
          </div>
        ))}
       
      </Marquee>
      <Marquee
        velocity={20}
        minScale={0.7}
        maxScale={1.2}
        spacing={50}
        direction={'rtl'}
        ref={(ref) => (slider = ref)}
        
      >
       
      {images2.map((image, index) => (
          <div key={index} style={{ margin: '15px', textAlign: 'center' }}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '150px', height:'100px', display: 'inline-block' }} />
          </div>
        ))}
       
      </Marquee>
    </div>
  );
};

export default InfiniteScroll;
