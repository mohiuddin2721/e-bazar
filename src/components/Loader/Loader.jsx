import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='w-[20%] mx-auto'>
            <BallTriangle
                height={200}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{ }}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loader;