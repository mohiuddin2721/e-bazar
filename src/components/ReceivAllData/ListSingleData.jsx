import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';


export const ListSingleData = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    // console.log(item.imageURL[0])
    const firstImg = item.imageURL[0][0]
    const secondImg = item.imageURL[0][1]

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // console.log(item)
    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                container
                direction="row-reverse"
                spacing={1}>
                <Grid item xs={12} sm={12} md={5} lg={4}>
                    <div className='w-[70%] mx-auto'>
                        <Link to={`/products/${item?._id}`}>
                            <img
                                className='w-full'
                                src={isHovered ? `https://test-server-ten-psi.vercel.app/${secondImg}` : `https://test-server-ten-psi.vercel.app/${firstImg}`}
                                alt=""
                                style={{
                                    border: '5px outset #3665A4',
                                    borderRadius: isHovered ? '0px 40px 0px 40px' : '40px 0px 40px 0px',
                                    transition: 'border-radius 0.3s ease-in-out',
                                }}
                            />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8}>
                    <CardContent sx={{ paddingLeft: 4 }}>
                        <p className='font-bold py-2'>{item?.name}</p>
                        <p className='font-bold text-sm'>Brand: {item?.brand}</p>
                        <p>{item?.description}</p>
                        <p className='text-xl font-bold'>price: <span className='text-green-500'>${item?.price}</span></p>
                        <p className=''>colors: {item?.color}</p>
                        <p>
                            <Rating
                                name="simple-controlled"
                                value={item?.ratting}
                            />
                        </p>
                        <span className='absolute top-2 right-0 hidden'>
                            <IconButton>
                                <FavoriteIcon className='text-red-600 bg-slate-200 rounded-md' />
                            </IconButton>
                        </span>
                        <span className='absolute top-10 right-0 hidden'>
                            <IconButton>
                                <FiExternalLink className='text-green-600 bg-slate-200 rounded-md' />
                            </IconButton>
                        </span>
                    </CardContent>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ListSingleData;