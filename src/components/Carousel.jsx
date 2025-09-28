
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import './Carousel.css';

const HomeCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src="/images/carousel-1.jpg" alt="Carousel Image 1" />
        </div>
        <div>
          <img src="/images/carousel-2.jpg" alt="Carousel Image 2" />
        </div>
        <div>
          <img src="/images/carousel-3.jpg" alt="Carousel Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
