import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { sortCartData } from '../../Utils/ConstantData';
import { shortCartSecondBoxSx } from '../../Styles/ComponentStyle';
import SideCategory from './SideCategory';
import SingleData from './SingleData';
import useGetAllData from '../../Hooks/useGetAllData';

const ShortCutDetail = () => {
    const { id } = useParams();
    const { allProduct } = useGetAllData()
    // console.log(allProduct)
    let defineCategory;
    if (id == "free delivery") defineCategory = "Panjabi";
    if (id == "mart") defineCategory = "Shirt";
    if (id == "boys fashion") defineCategory = "Pant";
    if (id == "girls fashion") defineCategory = "Kameez";
    if (id == "beauty glamour") defineCategory = "Abaya";

    const selectedShortcutProduct = allProduct?.filter(item => item?.categories === defineCategory)


    window.scrollTo(top)

    return (
        <div className='min-h-[100vh]'>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={3} lg={2}>
                    <h1 className='text-center text-[#1565c0] mb-3 font-bold'>
                        Others Shortcut
                    </h1>
                    <Grid container spacing={1}>
                        {
                            sortCartData?.map((data, i) =>
                                <Grid item key={i} xs={6} sm={6} md={12} lg={12}>
                                    <Link to={`/shortcut/${data?.name}`}>
                                        <Box
                                            className='hover:text-[#ec99aa] mb-4'
                                            sx={shortCartSecondBoxSx}>
                                            <img src={data?.link} className='w-[32px] h-[32px] mr-3 ml-5' alt="" />
                                            <Typography sx={{
                                                color: id === data?.name && '#1565c0',
                                                fontSize: id === data?.name && '20px',
                                            }}>
                                                {data?.name}
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8}>
                    <h1 className='text-center text-[#1565c0] mb-3 font-bold'>
                        {id}
                    </h1>
                    <Grid container spacing={1}>
                        {
                            selectedShortcutProduct?.map(item =>
                                <SingleData
                                    key={item?._id}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                />
                            )
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={2}>
                    <SideCategory id={id} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ShortCutDetail;