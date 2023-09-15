import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blue_new_1 from '../../assets/blue_new-1.jpg'
import blue_new_2 from '../../assets/blue_new-2.jpg'
import blue_new_3 from '../../assets/blue_new-3.jpg'
import blue_new_4 from '../../assets/blue_new-4.jpg'
import blue_new_5 from '../../assets/blue_new-5.jpg'
import blue_new_6 from '../../assets/blue_new-6.jpg'
import blue_new_7 from '../../assets/blue_new-7.jpg'
import blue_new_8 from '../../assets/blue_new-8.jpg'
import blue_new_9 from '../../assets/blue_new-9.jpg'
import blue_new_10 from '../../assets/blue_new-10.jpg'
import blue_new_11 from '../../assets/blue_new-11.jpg'
import blue_new_12 from '../../assets/blue_new-12.jpg'
import { Link } from "react-router-dom";

const upcomingBannerPic = [
    { id: 1, pic: blue_new_1 },
    { id: 2, pic: blue_new_2 },
    { id: 3, pic: blue_new_3 },
    { id: 4, pic: blue_new_4 },
    { id: 5, pic: blue_new_5 },
    { id: 6, pic: blue_new_6 },
    { id: 7, pic: blue_new_7 },
    { id: 8, pic: blue_new_8 },
    { id: 9, pic: blue_new_9 },
    { id: 10, pic: blue_new_10 },
    { id: 11, pic: blue_new_11 },
    { id: 12, pic: blue_new_12 },
]

const UpcomingSectorBanner = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <p className="text-center font-bold text-2xl">Upcoming product type</p>
            <div className="w-full md:w-[90%] mx-auto">
                <Slider {...settings} className="">
                    {
                        upcomingBannerPic.map((uc) => (
                            <div key={uc.id}>
                                <div
                                    className="zoom-div-I pb-2 pl-2 pt-6 pr-4 video-div"
                                    key={uc.id}
                                >
                                    <Link to='/upcoming_products'>
                                        <img
                                            className="popular-movie bg-white p-6"
                                            src={uc.pic}
                                            alt="upcoming picture"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    );
};

export default UpcomingSectorBanner;