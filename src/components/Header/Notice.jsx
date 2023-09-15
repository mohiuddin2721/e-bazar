import React, { useEffect, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';

function Notice() {
    const [visible, setVisible] = useState(true);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (visible) return;
        const timeId = setTimeout(() => {
            setHide(true);
        }, 700);
        return () => {
            clearTimeout(timeId);
        };
    }, [visible]);

    return (
        <div style={{borderBottom: '.1px solid #f7f3f3'}} className={`bg-[#240838] duration-500 ${hide && 'hidden'} ${visible ? 'h-auto px-5 py-[10px]' : 'h-0 px-0 py-0'} text-[13px] font-medium tracking-wide leading-[26px] text-white`}>
            <div className='flex justify-center relative'>
                <div className='flex-wrap flex justify-center items-center gap-2 px-[5px]'>
                    <span>Get Up to <b>50% OFF</b> New-Season Styles</span>
                    <button type='button' className={`bg-[#240838] ${!visible && 'hidden'} hover:bg-opacity-50 duration-300 px-2 py-[3px] leading-5 text-[10px] font-sans font-bold`}>Buy now</button>
                    <small className='font-normal opacity-80 hidden md:flex'>* Limited time only.</small>
                </div>
                <TfiClose onClick={() => {
                    setVisible(false);
                }} className='absolute right-0 top-1/2 -translate-y-1/2  opacity-50 hover:opacity-100 hover:scale-105 cursor-pointer duration-300' />
            </div>
        </div>
    )
}

export default Notice