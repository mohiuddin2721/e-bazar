import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import f1 from '../../assets/feature-1.jpg';
import f2 from '../../assets/feature-2.jpg';
import f3 from '../../assets/feature-3.jpg';
import { featureFirstSliderData } from '../../Utils/AllSliderData';

const firstSliderBreakpoints = {
    1: {
        slidesPerView: 2,

    },
    600: {
        slidesPerView: 3,
    },
    1024: {
        slidesPerView: 4,

    },
};
const secondSliderBreakpoints = {
    1: {
        slidesPerView: 1,

    },
    600: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 20
    },

};


function FeatureSlider() {


    return (
        <div className='my-[40px] bg-[#d4b2cdca]'>
            <div className='max-w-[1200px] mx-auto px-[10px] py-8'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    breakpoints={firstSliderBreakpoints}
                    className='h-[70px] mb-[20px]'
                >
                    {
                        featureFirstSliderData?.map((data, i) =>
                            <SwiperSlide key={i}>
                                <div className='border-r-0 sm:border-r border-[#E7E7E7] h-full py-4 flex justify-center items-center cursor-pointer'>
                                    <div className='flex items-center gap-[15px]'>
                                        <span className='text-4xl mx-[3px] text-green-500'>{data?.icon}</span>

                                        <div className='mx-[1px]'>
                                            <p className='text-[#222529] text-[14px] leading-[0.7] font-bold'>{data?.title}</p>
                                            <p className='text-[13px] text-[#222529]'>{data?.des}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
                <Swiper
                    modules={[Autoplay]}
                    breakpoints={secondSliderBreakpoints}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    className='h-[175px]'
                >
                    <SwiperSlide className=' relative'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-start inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                SH Watches
                            </p>
                            <p>
                                <sup className=' text-[#222529] font-bold text-[20px]'><del>20%</del></sup>
                                <span className=' text-[#08c] font-extrabold text-[29px] relative -top-[2px]'>30%</span>
                                <sup className=' text-[#08c] font-extrabold text-[20px]'>OFF</sup>
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <img src={f1} alt="" className='h-full w-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='border-[16px] relative border-[#240838]'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-center inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                DEAL PROMOS
                            </p>
                            <p className='text-[#777] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <img src={f2} alt="" className='h-full w-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className=' relative'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-end inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                SH Handbags
                            </p>
                            <p className='text-[#FF7272] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <img src={f3} alt="" className='h-full w-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className='border-[16px] relative border-[#240838]'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-center inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                DEAL PROMOS
                            </p>
                            <p className='text-[#777] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <img src={f2} alt="" className='h-full w-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide className=' relative'>
                        <div className='absolute flex flex-col justify-center left-[6.5%] right-[6.5%] items-end inset-0 z-20 cursor-pointer'>
                            <p className='text-[#222529] text-[24px] font-bold '>
                                SH Handbags
                            </p>
                            <p className='text-[#FF7272] font-semibold text-[15px] relative -top-[8px]'>
                                Starting at $99
                            </p>
                            <button className=' hover:bg-[#34393f] border border-[#222529] text-[11px] py-[6px] px-[11px] bg-[#222529] text-white font-bold'>SHOP NOW</button>
                        </div>
                        <img src={f3} alt="" className='h-full w-full object-cover' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}

export default FeatureSlider