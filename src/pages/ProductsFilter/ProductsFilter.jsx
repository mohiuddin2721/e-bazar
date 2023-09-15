import React, { createContext, useEffect, useState } from 'react';
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductList from './ProductList';
import { Box, Grid } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';

export const ProductFilterContext = createContext()

const ProductsFilter = () => {
    const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);
    const [filterBgColor, setFilterBgColor] = useState('bg-[#024160]');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedPriceValue, setSelectedPriceValue] = useState('');
    const [checkedCategory, setCheckedCategory] = useState([]);
    const [checkedBrand, setCheckedBrand] = useState([]);
    const [priceSlideValue, setPriceSlideValue] = useState([5, 60]);
    const [rattingValue, setRattingValue] = useState();
    const [grid_listView, setGrid_listView] = useState('grid')
    const [searchValue, setSearchValue] = useState();
    // console.log(searchResults)

    const gridView = () => {
        setGrid_listView("grid")
    }
    const listView = () => {
        setGrid_listView("list")
    }

    const handleColor = (clr) => {
        setFilterBgColor(clr)
    }

    const filterFunction = {
        gridView, listView,
        filterBgColor, handleColor,
        searchResults, setSearchResults,
        searchValue, setSearchValue,
        isOpenFilterDrawer, setIsOpenFilterDrawer,
        selectedPriceValue, setSelectedPriceValue,
        checkedCategory, setCheckedCategory,
        checkedBrand, setCheckedBrand,
        priceSlideValue, setPriceSlideValue,
        rattingValue, setRattingValue,
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setSearchResults([])
                // Construct the dynamic URL with query parameters
                let url = "https://test-server-ten-psi.vercel.app/api/v1/products?";
                if (checkedCategory) {
                    {
                        checkedCategory?.map((category) => url += `categories=${category}&`)
                    }
                }
                if (checkedBrand) {
                    {
                        checkedBrand?.map((brand) => url += `brand=${brand}&`)
                    }
                }
                if (priceSlideValue) url += `price[gte]=${priceSlideValue[0]}&price[lte]=${priceSlideValue[1]}&`
                if (selectedPriceValue) url += `sort=${selectedPriceValue}&`
                if (rattingValue) url += `ratting=${rattingValue}&`
                // console.log(url)
                // Fetch the data
                const results = await fetch(url);
                const data = await results.json();
                // console.log(data.data.products)
                setSearchResults(data?.data?.products)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [checkedCategory, checkedBrand, priceSlideValue, selectedPriceValue, rattingValue])


    return (
        <ProductFilterContext.Provider value={filterFunction}>
            <Box
                sx={component_container}
                className='min-h-[100vh]'
            >
                <Grid container spacing={1}>
                    <Grid item xs={8} sm={8} md={3} lg={2} className='hidden md:block'>
                        {/* left side products filter section */}
                        <FilterSection />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10}>
                        <div>
                            {/* product grid and list view, price sorting section */}
                            <SortSection />
                        </div>
                        <div>
                            {/* all of filtering product appear here */}
                            <ProductList
                                grid_listView={grid_listView}
                                searchResults={searchResults}
                            />

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </ProductFilterContext.Provider>
    );
};

export default ProductsFilter;