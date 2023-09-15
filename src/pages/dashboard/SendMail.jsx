import React from 'react';
import '../../Styles/uploadImg.css'
import Headline from '../../components/Headline/Headline';

const SendMail = () => {
    return (
        <div className='min-h-[100vh]'>
            <div className='flex justify-center'>
                <Headline headline={"Email send"} margin_Y={"4"} />
            </div>
            <div className='h-[70vh] flex justify-center items-center align-middle'>
                <p className='text-white text-2xl font-bolds'>Under construction</p>
            </div>
        </div>
    );
};

export default SendMail;