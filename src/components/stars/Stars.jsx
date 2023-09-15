import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Stars = ({ ratting }) => {
    
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                ratting > index + 1
                    ? <FaStar className='text-orange-500' />
                    : ratting > number
                        ? <FaStarHalfAlt className='text-orange-500' />
                        : <AiOutlineStar className='text-orange-500' />
            }
        </span>
    })

    return (
        <div className='flex'>
            {ratingStar}
            <p className='ml-2'>({ratting})</p>
        </div>
    )
};

export default Stars;