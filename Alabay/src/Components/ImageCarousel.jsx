import React, { useState } from 'react';
import img1 from '../Alabay Assets/1.png';
import img2 from '../Alabay Assets/2.png';
import img3 from '../Alabay Assets/3.png';
import img4 from '../Alabay Assets/4.png';
import img5 from '../Alabay Assets/5.png';
import img6 from '../Alabay Assets/6.png';
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

const ImageCarousel = () => {
    const images = [img1, img2, img3, img4, img5, img6,img1,img2,img3];
    const [activeSection, setActiveSection] = useState('All');

    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (current) => {
            // Update active section based on the current slide
            if (current < 3) {
                setActiveSection('All');
            } else if (current < 6) {
                setActiveSection('Photos');
            } else {
                setActiveSection('Videos');
            }
        }
    };

    const handleSectionClick = (section) => {
        setActiveSection(section);
        const indexMap = {
            All: 0,
            Photos: 1,
            Videos: 2,
        };
        // Go to the first slide of the corresponding section
        sliderRef.slickGoTo(indexMap[section] * 3); // Assuming 3 slides per section
    };

    const sliderRef = React.useRef(null);

    return (
        <div className='bg-white w-3/4 m-auto'>
            <div className="flex justify-center mb-4">
                {['All', 'Photos', 'Videos'].map(section => (
                    <button
                        key={section}
                        onClick={() => handleSectionClick(section)}
                        className={`text-2xl font-extrabold mx-2 p-2 rounded-lg ${activeSection === section ? 'text-yellow-500' : 'text-gray-700'}`}
                    >
                        {section}
                    </button>
                ))}
            </div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='bg-white h-[200px] rounded-xl flex justify-center'>
                        <img className='h-[200px] rounded-xl border border-black object-cover w-full ' src={image} alt={`Image ${index + 1}`} />
                        </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
