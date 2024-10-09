import React, { useState } from 'react';
import img1 from '../Alabay Assets/Alabay Games/pwr1.png';
import img2 from '../Alabay Assets/Alabay Games/pwr2.png';
import img3 from '../Alabay Assets/Alabay Games/pwr3.png';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ImageCarousel_2 = () => {
    const images = [img1, img2, img3];

    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // Add a centerMode setting if you want a more spaced look
        centerMode: true,
        centerPadding: '20px', // Adjust this value to control the gap
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        const indexMap = {
            All: 0,
            Photos: 1,
            Videos: 2,
        };
        sliderRef.current.slickGoTo(indexMap[section] * 3);
    };

    const sliderRef = React.useRef(null);

    return (
        <div className='bg-white w-3/4 m-auto'>
            <div className="flex justify-center m-4">
                {/* You can add section buttons here if needed */}
            </div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='p-2'> {/* Add padding to create space between images */}
                        <div className='bg-white h-[300px] rounded-xl flex justify-center'>
                            <img className='h-[300px] w-[300px] rounded-3xl border border-black object-cover' src={image} alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel_2;
