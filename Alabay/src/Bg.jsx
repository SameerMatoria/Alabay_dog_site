import React from 'react';
import bgImage from './Alabay Assets/Bg.png';
import './CSS/Custom.css';

function Bg() {
  return (
    <div
      className="fixed h-screen w-full bg-cover bg-center z-[1]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="bangers-regular text-[32px] sm:text-[48px] md:text-[72px] lg:text-[200px] xl:text-[140px] font-normal leading-tight text-center bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent bg-clip-text">
        Welcome to Alabay World
      </h2>

      <div className="absolute w-full h-[242px] left-0 top-[65%] transform -translate-y-1/2 bg-[#181C27] flex items-center justify-center">
        <h1 className="w-full max-w-4xl px-4 text-white bangers-regular text-[10px] sm:text-[24px] md:text-[32px] lg:text-[40px] leading-normal text-center">
          Where the legendary Central Asian Shepherd Dog meets a new-age adventure. Join us in celebrating the strength, loyalty, and heritage of the Alabay breed.
        </h1>
      </div>
    </div>
  );
}

export default Bg;
