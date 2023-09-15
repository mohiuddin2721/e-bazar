import React from 'react';
import './Headline.css';

const Headline = ({ headline, margin_Y }) => {
    return (
        <div className={`my-${margin_Y}`}>
            <hr className='w-[100%] bg-white mb-1 rounded-md mx-auto' />
            <button className="btnHeadline" type="button">
                <strong className='strong-headline'>{headline}</strong>
                <div id="container-stars-headline">
                    <div id="stars-headline"></div>
                </div>

                <div id="glow-headline">
                    <div className="circle-headline"></div>
                    <div className="circle-headline"></div>
                </div>
            </button>
            <hr className='w-[100%] bg-white mt-1 rounded-md mx-auto' />
        </div>
    );
};

export default Headline;