import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import topbanner_1 from "../../assets/topbanner-1.jpg"
import topbanner_2 from "../../assets/topbanner-2.jpg"
import topbanner_3 from "../../assets/topbanner-3.jpg"
import topbanner_4 from "../../assets/topbanner-4.jpg"
import topbanner_5 from "../../assets/topbanner-5.jpg"
import topbanner_6 from "../../assets/topbanner-6.jpg"

const bannerPic = [
    { id: 1, pic: topbanner_1 },
    { id: 2, pic: topbanner_2 },
    { id: 3, pic: topbanner_3 },
    { id: 4, pic: topbanner_4 },
    { id: 5, pic: topbanner_5 },
    { id: 6, pic: topbanner_6 },
]

function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerPic?.map(d => <SwiperSlide key={d.id}>
                        <img src={d?.pic} className='w-full' alt="" />
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    )
}

export default Banner