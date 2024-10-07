import React from 'react'
import bgImage from './Alabay Assets/Bg.png'
import './CSS/Custom.css'


function Bg() {
  return (
    <div
      className="fixed h-screen w-full bg-cover bg-center z-[1]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="bangers-regular  text-[148.48px] font-normal leading-[202.53px] text-center   bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] text-transparent bg-clip-text">
        Welcome to Alabay World
      </h2>



      <div className="absolute w-full  h-[242px] left-0 top-[656px] bg-[#181C27] flex items-center justify-center">
        <h1 className="w-[1820px] text-white bangers-regular text-[48px] leading-[65px] text-center">
          Where the legendary Central Asian Shepherd Dog meets a new-age adventure. Join us in celebrating the strength, loyalty, and heritage of the Alabay breed.
        </h1>
      </div>


    </div>
  )
}

export default Bg