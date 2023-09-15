import { Box, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { component_container } from '../../Styles/ComponentStyle';
import useGetAllData from '../../Hooks/useGetAllData';
import SingleData from '../../components/ReceivAllData/SingleData';
import SideCategory from '../../components/ReceivAllData/SideCategory';

const SelectedCategories = () => {
    const { allProduct } = useGetAllData()
    const { id } = useParams();

    const filteredCategory = allProduct?.filter(item => item?.categories == id)

    window.scrollTo(top)

    return (
        <Box sx={component_container} className='my-10 mx-auto'>
            <Grid container spacing={.5}>
                <Grid item xs={12} sm={6} md={10}>
                    <Grid container spacing={.5}>
                        {
                            filteredCategory?.map(item =>
                                <SingleData
                                    key={item?._id}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                />)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                    <SideCategory id={id} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default SelectedCategories;