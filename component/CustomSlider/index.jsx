import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./style.module.scss"; // Assuming you have some custom styles

const images = [
    './images/review/review1.png',
    './images/review/review2.png',
    './images/review/review3.png',
    './images/review/review4.png',
    './images/review/review5.png',
    './images/review/review6.png',
    './images/review/review7.png',
    './images/review/review8.png',
    './images/review/review9.png',
    './images/review/review10.png',
];

const CustomSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,  // Default for desktop
        slidesToScroll: 1,
        arrows: true,  // Show previous/next arrows
        variableWidth: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,  // Tablet & mobile size
                settings: {
                    slidesToShow: 2,  // Show 2 slides on mobile
                    variableWidth: false,  // Disable variable width for mobile
                    arrows: false  // Hide arrows on mobile
                }
            },
            {
                breakpoint: 480,  // Smaller mobile screens
                settings: {
                    slidesToShow: 1,  // Show 1 slide on smaller screens
                    variableWidth: false,  // Disable variable width for smaller screens
                    arrows: false  // Hide arrows
                }
            }
        ]
    };

    return (
        <div className={styles.sliderWrapper}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className={styles.slideItem}>
                        <div className={styles.itemforImg}>
                            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;

