import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImageMagnify = ({upperImage, name}) => {
    return (
        <ReactImageMagnify {...{
            smallImage: {
                alt: name,
                isFluidWidth: true,
                src: upperImage,
            },
            largeImage: {
                src: upperImage,
                width: 800,
                height: 1200
            },
            enlargedImagePosition: 'beside',
            isHintEnabled: true,
            lensStyle: {
                background: 'hsla(0, 0%, 100%, .3)'
            }
        }} />
    );
};

export default ImageMagnify;