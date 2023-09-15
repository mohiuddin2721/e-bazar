import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { topSliderNewArrivalData } from '../../Utils/AllSliderData';
import Banner from '../../components/Banner/Banner';
import { component_container, topSliderBoxInMapSx } from '../../Styles/ComponentStyle';
import { useNavigate } from 'react-router-dom';

function TopSlider() {
    const navigation = useNavigate()

    const topSliderLink = (data) => {
        navigation(`${data}`)
    }
    return (
        <Box style={{ marginTop: '20px' }} sx={component_container}>
            <Grid container
                rowSpacing={{ xs: 1, sm: 0, md: 3 }}
                columnSpacing={{ xs: 0, sm: 0, md: 2 }}
                sx={{ height: 'auto' }}
            >
                <Grid item xs={12} sm={12} md={6} sx={{ pt: 40 }}>
                    <Banner />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container
                        rowSpacing={{ xs: 1, sm: 0, md: 3 }}
                        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                    >
                        {
                            topSliderNewArrivalData?.map((data, i) =>
                                <Grid key={i} item xs={6}>
                                    <Box
                                        sx={topSliderBoxInMapSx}
                                        onClick={() => topSliderLink(data?.link)}
                                    >
                                        <img src={data?.imageLink} className='rounded-md' alt="" />
                                        <Typography sx={{ position: 'absolute', top: 20, left: 20, color: 'red' }}>
                                            {data?.title}
                                        </Typography>
                                        <Typography sx={{ position: 'absolute', top: 40, left: 20, fontSize: '25px', fontWeight: 700 }}>
                                            {data?.name}
                                        </Typography>
                                        <Typography sx={{ position: 'absolute', top: 70, left: 20, fontWeight: 400 }}>
                                            {data?.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        }

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopSlider