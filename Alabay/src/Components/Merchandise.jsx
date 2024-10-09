import React from 'react'
import Slider from "react-slick";
import m1 from '../Alabay Assets/Alabay Merch/m1.png'
import m2 from '../Alabay Assets/Alabay Merch/m2.png'
import m3 from '../Alabay Assets/Alabay Merch/m3.png'
import m4 from '../Alabay Assets/Alabay Merch/m4.png'

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
    <div className='h-[90%] w-full bg-gray-200'>
      <Slider {...settings}>
        <div >
          <img className='w-full h-[500px] object-cover' src={m1} alt="" />
        </div>
        <div>
        <img className='w-full h-[500px] object-cover' src={m2} alt="" />
        </div>
        <div>
        <img className='w-full h-[500px] object-cover' src={m3} alt="" />
        </div>
        <div>
        <img className='w-full h-[500px] object-cover' src={m4} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default Merchandise