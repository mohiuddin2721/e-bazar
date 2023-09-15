import React from 'react';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SideCategory = ({id}) => {
    const { allCategory } = useGetAllCategory();

    return (
        <Box>
            <h1 className='text-center text-[#1565c0] mb-3 font-bold'>
                Others Catagories
            </h1>
            {
                allCategory?.map(data =>
                    <Link key={data._id} to={`/catagories/${data?.name}`}>
                        <Card sx={{ maxWidth: '147px', maxHeight: '147px' }} className='mb-4 mx-auto'>
                            <CardActionArea sx={{
                                backgroundColor: id === data?.name ? '#1565c0' : ' ',
                            }}>
                                <img src={data?.photo}
                                    alt={data?.name}
                                    className='w-[90px] h-[90px] mx-auto'
                                    style={{ clipPath: 'circle(50%)' }}
                                />
                                <Typography className='text-[14px] text-center mt-0 pt-0 pb-2'>
                                    {data?.name}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    </Link>
                )
            }
        </Box>
    );
};

export default SideCategory;