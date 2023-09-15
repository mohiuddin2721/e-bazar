import React from 'react';
import upcomingProduct from '../../assets/upcoming-1.jpg'
// import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import discount_1_pic from '../../assets/discount-1.jpg';
import upcoming_banner_1_pic from '../../assets/upcoming-banner-1.jpg';
import UpcomingSectorBanner from '../../components/Banner/UpcomingSectorBanner';

const UpcomingSector = () => {
    const navigate = useNavigate()

    const upcomingProductFunction = () => {
        navigate("/upcoming_products")
    }
    const discountImageToOfferPage = () => {
        navigate("/offerProducts")
    }

    return (
        <div>
            <div className='w-full md:w-[90%] mx-auto'>
                <img
                    onClick={discountImageToOfferPage}
                    className='w-full cursor-pointer'
                    src={discount_1_pic}
                    alt="" />
            </div>
            <div style={{
                backgroundImage: `url(${upcomingProduct})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "50vh",
                marginTop: '15px',
                marginBottom: '15px',
            }}
                className='flex justify-center align-middle items-center'
            >
                <div
                    onClick={upcomingProductFunction}
                    className=' h-[50%] w-[80%] md:w-[70%] cursor-pointer rounded-sm'
                >
                    {/* <p
                        className='text-xl md:text-3xl text-white font-bold flex w-full h-full justify-center items-center'
                    >
                        Our upcoming product - <BsFillArrowDownRightCircleFill className="text-white ml-1" />
                    </p> */}
                </div>
            </div >
            <div className='w-full md:w-[90%] mx-auto'>
                <img
                    onClick={upcomingProductFunction}
                    className='w-full cursor-pointer'
                    src={upcoming_banner_1_pic}
                    alt="" />
            </div>
            <div className='mt-[20px]'>
                <UpcomingSectorBanner />
            </div>
        </div >
    );
};

export default UpcomingSector;