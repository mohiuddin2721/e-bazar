import React, { useState } from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Stars from '../stars/Stars';
import { FaDollarSign } from 'react-icons/fa';
import PriceFormate from '../../features/priceFormate/PriceFormate';

function SingleData({ item, xs, sm, md, lg }) {
    const [isHovered, setIsHovered] = useState(false);
    const firstImage = item?.imageURL[0][0];
    const secondImage = item?.imageURL[0][1];
    const navigate = useNavigate();
    // console.log(firstImage)

    const handleDetailsOfProduct = () => {
        navigate(`/products/${item?._id}`, { state: { item: item } })
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Box
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                    mb: 2,
                    '& :hover': {
                        'span': {
                            display: 'block',
                        },
                        'secondImg': {
                            zIndex: 1,
                        }
                    }
                }}>
                <Card sx={{
                    cursor: 'pointer',
                }}>
                    <Box onClick={handleDetailsOfProduct}>
                        <img
                            src={isHovered ? `${secondImage}` : `${firstImage}`}
                            className='w-full h-[220px] mx-auto'
                            alt={item?.name} />
                    </Box>
                    <CardContent sx={{ padding: 0 }}>
                        <p className='text-center font-bold py-2'>{item?.name}</p>
                        <div className='flex justify-center ml-2'>
                            <p className='text-xs font-thin flex'>
                                <span className='font-bold text-xl ml-1'><PriceFormate price={item?.price} /></span>
                            </p>
                            {item?.prePrice && <p className='text-xs line-through ml-3'> {item?.prePrice} <FaDollarSign className='inline text-xs' /></p>}
                        </div>
                        <div className="flex justify-center mb-1 ml-2">
                            <Stars ratting={item?.ratting} />
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )
}

export default SingleData