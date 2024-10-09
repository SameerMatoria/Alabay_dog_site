import React from 'react';
import Slider from "react-slick";
import m1 from '../Alabay Assets/Alabay Merch/m1.png';
import m2 from '../Alabay Assets/Alabay Merch/m2.png';
import m3 from '../Alabay Assets/Alabay Merch/m3.png';
import m4 from '../Alabay Assets/Alabay Merch/m4.png';
import mbg1 from '../Alabay Assets/Alabay Merch/mbg1.png';
import mbg2 from '../Alabay Assets/Alabay Merch/mbg2.png';
import mbg3 from '../Alabay Assets/Alabay Merch/mbg3.png';
import mbg4 from '../Alabay Assets/Alabay Merch/mbg4.png';



function Merchandise() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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

  return (
    <div className='h-[100%] w-[90%] m-auto '>
      <Slider {...settings}>
        <div className="relative md:h-[500px] lg:h-[800px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mbg1})` }}
          />
          <img className='absolute top-10 left-1/2 transform -translate-x-1/2 w-auto md:h-[500px] lg:h-[750px] object-cover' src={m1} alt="" />
        </div>
        <div className="relative md:h-[500px] lg:h-[800px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mbg2})` }} // Use different background images if needed
          />
          <img className='absolute top-10 left-1/2 transform -translate-x-1/2 w-auto md:h-[500px] lg:h-[750px] object-cover' src={m2} alt="" />
        </div>
        <div className="relative md:h-[500px] lg:h-[800px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mbg3})` }} // Use different background images if needed
          />
          <img className='absolute top-10 left-1/2 transform -translate-x-1/2 w-auto md:h-[500px] lg:h-[750px] object-cover' src={m3} alt="" />
        </div>
        <div className="relative md:h-[500px] lg:h-[800px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${mbg4})` }} // Use different background images if needed
          />
          <img className='absolute top-10 left-1/2 transform -translate-x-1/2 w-auto md:h-[500px] lg:h-[750px] object-cover' src={m4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Merchandise;
