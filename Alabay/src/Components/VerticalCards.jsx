import React from 'react';
import img5 from '../Alabay Assets/5.png';

function VerticalCards(props) {
  return (
    <div className="relative flex flex-col items-center">
      <div className={`flex flex-col rounded-xl justify-center w-full max-w-[350px] h-full p-4 ${props.bg}`}>
        <h1 className='text-center text-3xl sm:text-4xl font-extrabold text-white'>{props.heading}</h1>
        <p className='text-center text-lg sm:text-2xl font-extrabold text-white'>{props.subHeading}</p>
        <img className='h-[300px] sm:h-[420px] w-full object-cover mt-4' src={props.image} alt={props.heading} />
      </div>
      
      {/* Faded white overlay on the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white h-full rounded-xl" />
    </div>
  );
}

export default VerticalCards;
