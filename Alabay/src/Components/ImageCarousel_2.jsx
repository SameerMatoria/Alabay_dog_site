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
    const images = [img1, img2, img3 ];
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
            </div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='bg-white h-[300px] rounded-xl flex justify-center'>
                        <img className='h-[300px] w-[300px] rounded-xl border border-black object-cover w-full ' src={image} alt={`Image ${index + 1}`} />
                        </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel_2;
