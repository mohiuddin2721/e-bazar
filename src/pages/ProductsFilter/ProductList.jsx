import React from 'react';
import SingleData from '../../components/ReceivAllData/SingleData';
import { Grid } from '@mui/material';
import ListSingleData from '../../components/ReceivAllData/ListSingleData';

const ProductList = ({ searchResults, grid_listView }) => {
    return (
        <div>
            <p className={`text-center`}>total searching product {searchResults.length}</p>
            {
                grid_listView == "grid" ?
                    <Grid container spacing={1}>
                        {
                            searchResults?.map((item, index) =>
                                <SingleData
                                    key={item._id}
                                    index={index}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                    lg={3}
                                />
                            )
                        }
                    </Grid>
                    :
                    <Grid container spacing={1}>
                        {
                            searchResults?.map((item) =>
                                <ListSingleData
                                    key={item._id}
                                    item={item}
                                />
                            )
                        }
                    </Grid>
            }

        </div>
    );
};

export default ProductList;