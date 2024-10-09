import React from 'react';
import './CSS/Custom.css';
import img1 from './Alabay Assets/1.png';
import img2 from './Alabay Assets/2.png';
import img3 from './Alabay Assets/3.png';
import img4 from './Alabay Assets/4.png';
import img5 from './Alabay Assets/5.png';
import img6 from './Alabay Assets/6.png';
import img7 from './Alabay Assets/7.png';
import img8 from './Alabay Assets/8.png';
import img9 from './Alabay Assets/9.png';
import ImageCarousel from './Components/ImageCarousel';
import VerticalCards from './Components/VerticalCards';
import SimpleCard from './Components/SimpleCard';
import Merchandise from './Components/Merchandise';
import SingleCard from './Components/SingleCard';
import ImageCarousel_2 from './Components/ImageCarousel_2';

function Home() {
    return (
        <div className='z-[2] absolute w-full flex justify-center top-[80%]'>
            <div className='w-3/4 bg-white rounded-3xl h-screen overflow-auto scrollbar'>

                {/* Section 1 */}
                <div className='w-full h-screen custom-radial-gradient p-10 flex flex-col md:flex-row'>
                    <img src={img1} alt="" className='h-[80%] mt-[50px] object-cover md:mt-[150px]' />
                    <div className='mt-[20px] md:mt-[10px] text-right p-10'>
                        <h1 className='text-4xl md:text-4xl lg:text-6xl font-extrabold text-orange-500 lg:mt-20'>History Of</h1>
                        <h1 className='bangers-regular text-[100px] md:text-[150px] text-white'>ALABAY</h1>
                        <p className='font-bold text-xl md:text-2xl lg:text-3xl text-gray-900'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='w-full h-screen flex flex-col'>
                    <div className='mt-10'>
                        <ImageCarousel />
                    </div>
                    <h1 className='bangers-regular text-[100px] md:text-[150px] lg:text-[200px] text-yellow-400 text-center mt-[3%]'>PROJECT VISION</h1>
                </div>

                {/* Section 3 */}
                <div className='w-full h-screen custom-radial-gradient p-10'>
                    <img src={img3} alt="" className='h-[80%] m-auto md:mt-[-260px] lg:mt-[-400px] object-cover' />
                    <h2 className='text-center font-bold text-xl md:text-2xl lg:text-3xl  text-gray-900 mt-20'>
                        Our mission is to honor the heritage of the Alabay by creating a vibrant,
                        <br />loyal, and powerful community. Just as the Alabay protects its flock,
                        <br /> we aim to build a pack that stands strong together.
                    </h2>
                    <h1 className='bangers-regular text-[100px] md:text-[130px] lg:text-[150px] text-white lg:m-20'>ROAD MAP</h1>
                </div>

                {/* Section 4 */}
                <div className='w-full h-screen p-10'>

                    <div className='flex flex-col md:flex-row items-center mt-[-10%]'>
                        <div className='text-center'>
                            <h2 className='font-bold text-xl md:text-3xl text-gray-900 mt-0'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.</h2>
                            <h2 className='font-bold text-xl md:text-3xl text-yellow-500 mt-0'>Join us as we grow and achieve new heights.</h2>
                        </div>
                        <img src={img4} alt="" className='w-full max-w-[50%] mt-10 md:mt-[-100px] lg:mt-[-200px] object-cover' />
                    </div>
                    <div className='flex flex-col md:flex-row md:gap-2 lg:gap-4 justify-center lg:mt-20 md:mt-[30px]'>
                        <VerticalCards bg={"bg-yellow-600"} heading={"Community Building"} subHeading={"and Initial Launch"} image={img5} />
                        <VerticalCards bg={"bg-sky-500"} heading={"Community Building"} subHeading={"and Initial Launch"} image={img6} />
                        <VerticalCards bg={"bg-purple-400"} heading={"Community Building"} subHeading={"and Initial Launch"} image={img7} />
                        <VerticalCards bg={"bg-amber-800"} heading={"Community Building"} subHeading={"and Initial Launch"} image={img8} />
                    </div>
                </div>

                {/* Section 5 */}
                <div className='w-full h-screen custom-radial-gradient p-10 mt-[20%]'>
                    <h1 className='bangers-regular text-[100px] md:text-[110px] lg:text-[150px] text-white lg:ml-10'>TOKENOMICS</h1>
                    <div className='flex justify-center'>
                        <div className='w-[100px]'></div>
                        <div className='flex flex-col gap-5 justify-center'>
                            <SimpleCard subHeading="LIQUIDITY" heading="LOCKED" />
                            <SimpleCard subHeading="CONTRACT" heading="RENOUNCED" />
                            <SimpleCard subHeading="TAXES" heading="0%" />
                        </div>
                        <img src={img9} alt="" className='w-full max-w-[50%] mt-10 md:mt-[-100px] lg:mt-[-100px] lg:ml-20 object-cover' />
                    </div>
                </div>

                {/* Section 6 */}
                <div className='w-full h-screen p-10'>
                    <h1 className='bangers-regular text-center text-[100px] md:text-[130px] lg:text-[150px] text-yellow-400 lg:ml-10'>MERCHANDISE</h1>
                    <div className='mt-5'><Merchandise /></div>
                </div>

                {/* Section 7 */}
                <div className='w-full h-screen custom-radial-gradient p-1 mt-[20%]'>
                    <h1 className='text-center bangers-regular text-[100px] md:text-[130px] lg:text-[150px] text-white lg:ml-10'>GAMES</h1>
                    <p className='text-center lg:mt-[-30px] lg:mb-10 font-bold  md:text-4xl lg:text-4xl text-gray-800'>Stay tuned for upcoming games !</p>
                    <SingleCard />
                </div>

                {/* Section 8 */}
                <div className='w-full h-[50%] p-10'>
                    <h1 className='font-extrabold text-[100px] md:text-[130px] lg:text-[60px] text-yellow-500 lg:ml-10'>GAME <span className='text-gray-600'>PREVIEWS</span> </h1>
                    <ImageCarousel_2 />
                    <h1 className='bangers-regular text-[100px] mt-20 md:text-[130px] lg:text-[150px] text-yellow-400 lg:ml-10'>SOCIAL MEDIA LINKS</h1>
                </div>

                {/* Section 9 */}
                <div className='w-full h-half custom-radial-gradient p-10 mt-[20%]'>
                    <img src={img2} alt="" className='w-full max-w-[50%] mt-10 md:mt-[-100px] lg:mt-[0px] lg:ml-20 object-cover' />
                </div>


            </div>
        </div>);
}

export default Home;
