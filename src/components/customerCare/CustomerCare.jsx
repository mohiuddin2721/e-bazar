import React from 'react';
import customerServiceBg from '../../assets/custommerService.jpg'

const CustomerCare = () => {
    return (
        <div className='min-h-[70vh]'>
            <div className='w-full md:w-[96%] mx-auto'>
                <img className='w-full' src={customerServiceBg} alt="" />
            </div>
        </div>
    );
};

export default CustomerCare;