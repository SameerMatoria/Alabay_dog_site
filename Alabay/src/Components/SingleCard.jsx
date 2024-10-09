import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scard1 from '../Alabay Assets/Alabay Games/scard1.png';
import scard2 from '../Alabay Assets/Alabay Games/scard2.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: 'black', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SingleCard() {
  const settings = {
    dots: false,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerMode: true,
    centerPadding: '20px', // Adjust this value to control the gap
  };

  const sliderRef = React.useRef(null);

  return (
    <div className='h-full w-[77%] m-auto'>
      <Slider ref={sliderRef} {...settings}>
        <div className="relative">
          <img className='w-full h-full object-cover rounded-3xl' src={scard1} alt="Card 1" />
        </div>
        <div className="relative">
          <img className='w-full h-full object-cover rounded-3xl' src={scard2} alt="Card 2" />
        </div>
      </Slider>
      
      <Link to={'/game'}>
      <button className="z-[2] text-xl lg:mt-[-150px] m-auto relative px-6 py-3 bg-purple-600 text-white font-bold rounded-3xl hover:bg-purple-500 flex items-center">
        DISCOVER  <FaArrowRight/>
      </button>
      </Link>
    </div>
  );
}

export default SingleCard;
