import React from 'react';
import './CSS/Custom.css'
import img1 from './Alabay Assets/1.png'
import ImageCarousel from './Components/ImageCarousel';

function Home() {
    return (
        <div className='z-[2]  absolute w-full flex justify-center top-[80%]'>
            <div className='w-[80%] bg-white rounded-3xl h-screen overflow-auto scrollbar'>
                <div className='w-full h-screen custom-radial-gradient p-10 flex'>
                    <img src={img1} alt="" className='h-[90%] mt-[180px] object-cover' />
                    <div className='mt-[150px] text-right p-10'>
                        <h1 className='text-6xl font-extrabold text-orange-500 mt-10'>History Of</h1>
                        <h1 className='bangers-regular text-[150px] text-white '>ALABAY</h1>
                        <p className='font-bold text-3xl text-gray-900 '>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                    </div>
                </div>
                <div className='w-full h-screen flex flex-col '>
                    <div className='mt-20'>
                        <ImageCarousel />
                    </div>
                    <h1 className='bangers-regular text-[150px] text-yellow-400 text-center mt-[10%]'>PROJECT VISION</h1>
                </div>
                <div className='w-full h-screen custom-radial-gradient p-10'>

                </div>
                <div className='w-full h-screen'>div2</div>
            </div>
        </div>

        // <div>
        //     <div className=' custom-radial-gradient bg-gray-200 w-full h-screen'></div>
        //     <div className='h-screen'>div2</div>
        // </div>
    );
}

export default Home;
