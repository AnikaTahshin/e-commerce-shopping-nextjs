import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowDroprightCircle color='black' />, // Custom next arrow component
        prevArrow: <IoIosArrowDropleftCircle color='black' />, // Custom previous arrow component
    };
    return (
        <div className="w-[250px] h-[200px]">
            <Slider {...settings}>
                <div>
                    <img className="object-contain rounded-[20px]" src="../assets/product-1.jpg" alt="" />
                </div>
                <div>
                    <img className="object-contain rounded-[20px]" src="../assets/product-2.jpg" alt="" />
                </div>
            </Slider>
        </div>
    )
}
