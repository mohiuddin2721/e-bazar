import React from 'react';
import '../../Styles/offerSection.css';
import offerBG from '../../assets/offerBG-1.jpg'
import { useNavigate } from 'react-router-dom';

const OffersSection = () => {
    const navigate = useNavigate()

    const handleOffer = () => {
        navigate("/offerProducts")
    }

    return (
        <div
            style={{
                position: 'relative'
            }}
            onClick={handleOffer}
            className='relative my-[40px] cursor-pointer w-full md:w-[90%] mx-auto'>
            <div>
                <img className='w-full h-[250px]' src={offerBG} alt="" />
            </div>
            <span className='absolute top-[45%] right-[45%]'>
                <p className='text-white text-4xl font-bold'>70% off<span className='text-[10px]'>(upto)</span></p>
            </span>
            <div className="custom-shape-divider-bottom-1692787727">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    );
};

export default OffersSection;