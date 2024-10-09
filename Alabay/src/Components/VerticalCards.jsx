import React from 'react';

function VerticalCards(props) {
  return (
    <div className="relative flex flex-col items-center">
      <div className={`flex flex-col rounded-xl justify-center w-full max-w-[350px] lg:h-full md:h-4/5 p-4 ${props.bg}`}>
        <h1 className='text-center text-3xl md:text-3xl lg:text-4xl font-extrabold text-white md:mt-10 lg:mt-0'>{props.heading}</h1>
        <p className='text-center text-lg sm:text-2xl font-extrabold text-white'>{props.subHeading}</p>
        <img className='md:h-[250px] lg:h-[400px]  w-full  mt-4' src={props.image} alt={props.heading} />
      </div>
      
      {/* Faded white overlay on the image */}
      <div className="lg:absolute inset-0 bg-gradient-to-b from-transparent to-white lg:h-full md:h5/5 rounded-xl" />
    </div>
  );
}

export default VerticalCards;
