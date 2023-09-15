import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { BiZoomIn } from 'react-icons/bi';
import { BiZoomOut } from 'react-icons/bi';
import { TbZoomReset } from 'react-icons/tb';

const ZoomImage = ({ upperImage, name }) => {
    return (
        <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                    <TransformComponent>
                        <img className='max-h-100px' src={upperImage} alt={name} />
                    </TransformComponent>
                    <span className="tools absolute top-5 right-0">
                        <button
                            className='btn bg-[#240838] text-[#fff] px-1 rounded ml-2 text-sm'
                            onClick={() => zoomIn()}
                        >
                            zoom In <BiZoomIn className='inline' />
                        </button>
                        <button
                            className='btn bg-[#240838] text-[#fff] px-1 rounded mx-6 text-sm'
                            onClick={() => zoomOut()}
                        >
                            zoom Out <BiZoomOut className='inline' />
                        </button>
                        <button
                            className='btn bg-[#240838] text-[#fff] px-1 rounded text-sm'
                            onClick={() => resetTransform()}
                        >
                            zoom reset <TbZoomReset className='inline' />
                        </button>
                    </span>
                </>
            )}

        </TransformWrapper>
    );
};

export default ZoomImage;