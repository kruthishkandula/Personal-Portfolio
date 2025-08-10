import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create this CSS file for custom styling

const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        loop: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        easing: 'fade',
        // cssEase: 'linear', // Animation easing
        centerMode: true, // Enables center mode
        centerPadding: '5%', // Space for next and previous slides,
        // prevArrow: <button className="carousel-arrow prev-arrow text-green-700 ">Previous</button>,
        // nextArrow: <button className="carousel-arrow next-arrow">Next</button>,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {
                    data.map((item) => {
                        return (
                            <div className="carousel-slide rounded-md bg-yellow-200 " >
                                <img className='w-[95%] h-full carousel-slide.slick-active' src={item.imageUrl} alt={`Slide ${item.id}`} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
};

export default Carousel;
