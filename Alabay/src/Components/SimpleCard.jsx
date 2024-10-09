import React from 'react';

function SimpleCard(props) {
  return (
    <div>
      <div className='bg-gray-800 lg:p-10 md:p-4 md:w-[300px] md:h-[100px] lg:w-[470px] lg:h-[150px] rounded-2xl'>
        <h2 className='text-white text-2xl font-bold'>{props.subHeading}</h2>
        <h1 className='text-yellow-200 text-3xl font-bold tracking-wider'>{props.heading}</h1>
      </div>
    </div>
  );
}

export default SimpleCard;
