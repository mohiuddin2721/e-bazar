import React, { useEffect, useState } from 'react';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';
import SingleData from '../../components/ReceivAllData/SingleData';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(5);
  const [products, setProducts] = useState([]);

  const handlePaginationChange = (event, page) => {
    setCurrentPage(Number(page));
  };
  // console.log("products:", products)

  const getProducts = async () => {
    try {
      const result = await axios.get(`https://test-server-ten-psi.vercel.app/api/v1/products?page=${currentPage}&limit=8`)
      setPageCount(result?.data?.data?.pageCount);
      setProducts(result?.data?.data?.products);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [currentPage])

  if(products.length === 0) {
    return <Loader />
  }

  return (
    <Box sx={component_container} className='my-10 delay-500 mx-auto'>
      <Typography className='p-4 font-bold'>
        Just for you
      </Typography>
      <Grid container spacing={1}>
        {
          products?.map(item =>
            <SingleData
              key={item._id}
              item={item}
              xs={6}
              sm={6}
              md={3}
              lg={3}
            />
          )
        }
      </Grid>
      <Box sx={{ marginTop: '10px' }}>
        <Pagination
          count={pageCount}
          color="secondary"
          page={currentPage}
          onChange={handlePaginationChange}
          sx={{ w: 'full', display: 'flex', justifyContent: 'center' }}
        />
      </Box>
    </Box>
  )
}

export default AllProducts