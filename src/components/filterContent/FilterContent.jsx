import React, { useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Box, Checkbox, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Rating, Slider } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterBgColor from '../filterBgColor/FilterBgColor';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import SelectSortingPrice from '../selectSortingPrice/SelectSortingPrice';
import { ProductFilterContext } from '../../pages/ProductsFilter/ProductsFilter';


const minDistance = 10;

const FilterContent = () => {
    const { filterBgColor,
        setIsOpenFilterDrawer,
        checkedCategory,
        setCheckedCategory,
        checkedBrand,
        setCheckedBrand,
        priceSlideValue,
        setPriceSlideValue,
        rattingValue,
        setRattingValue,
    } = useContext(ProductFilterContext)
    const { allCategory } = useGetAllCategory()
    const [openCollapseCategoryFilter1, setCollapseCategoryFilter1] = useState(true);
    // const [openCollapseCategoryFilter2, setCollapseCategoryFilter2] = useState(false);

    const handleCategoryToggle = (value) => () => {
        const currentIndex = checkedCategory.indexOf(value);
        const newChecked = [...checkedCategory];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedCategory(newChecked);
    };
    // const handleBrandToggle = (value) => () => {
    //     const currentIndex = checkedBrand.indexOf(value);
    //     const newChecked = [...checkedBrand];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setCheckedBrand(newChecked);
    // };
    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPriceSlideValue([Math.min(newValue[0], priceSlideValue[1] - minDistance), priceSlideValue[1]]);
        } else {
            setPriceSlideValue([priceSlideValue[0], Math.max(newValue[1], priceSlideValue[0] + minDistance)]);
        }
    };
    const handleCollapseMenu1 = () => {
        setCollapseCategoryFilter1(!openCollapseCategoryFilter1);
    };
    // const handleCollapseMenu2 = () => {
    //     setCollapseCategoryFilter2(!openCollapseCategoryFilter2);
    // };
    const handleDrawerClose1 = () => {
        setIsOpenFilterDrawer(false);
    };

    return (
        <Box
            className={`${filterBgColor}`}
            style={{
                fontFamily: "'Poppins', sans-serif",
                overflow: 'auto',
                color: 'white',
                maxWidth: '500px'
            }}
        >
            <AiOutlineClose
                className='w-full justify-normal text-white mt-2 text-4xl font-semibold lg:hidden block'
                onClick={handleDrawerClose1}
            />
            <div className='mt-[20px] mb-[30px]'>
                <div className='w-full flex justify-center md:hidden'>
                    <div className='text-black'>
                        <p className='text-white'>Sort by price</p>
                        <SelectSortingPrice />
                    </div>
                </div>
                <div>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleCollapseMenu1} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                            <ListItemText primary="CATEGORIES" />
                            {openCollapseCategoryFilter1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openCollapseCategoryFilter1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    allCategory?.map((item, i) =>
                                        <ListItem
                                            key={i}
                                            sx={{ '&:hover': { borderBottom: '1px solid red' } }}
                                            disablePadding
                                        >
                                            <ListItemButton role={undefined} onClick={handleCategoryToggle(item?.name)} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checkedCategory.indexOf(item?.name) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': i }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={i} primary={item?.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </Collapse>
                        {/* <ListItemButton onClick={handleCollapseMenu2} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                            <ListItemText primary="BRANDS" />
                            {openCollapseCategoryFilter2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton> */}
                        {/* <Collapse in={openCollapseCategoryFilter2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    brands?.map((item, i) =>
                                        <ListItem
                                            key={i}
                                            sx={{ '&:hover': { borderBottom: '1px solid red' } }}
                                            disablePadding
                                        >
                                            <ListItemButton role={undefined} onClick={handleBrandToggle(item)} dense>
                                                <ListItemIcon>
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checkedBrand.indexOf(item) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': i }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText id={i} primary={item} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </Collapse> */}
                    </List>
                    <div className='my-2'>
                        <p className='text-center'>Filter by price</p>
                        <div className='w-[90%] flex mx-auto justify-center mt-2'>
                            <Slider
                                className='mt-6'
                                getAriaLabel={() => 'Minimum distance'}
                                value={priceSlideValue}
                                onChange={handleChange1}
                                min={5}
                                max={200}
                                valueLabelDisplay="on"
                                disableSwap
                            />
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className='text-center'>Filter by rating</p>
                        <div className='w-full flex justify-center mt-2'>
                            <Rating
                                name="simple-controlled"
                                value={rattingValue}
                                onChange={(event, newValue) => {
                                    setRattingValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <FilterBgColor />
            </div>
        </Box>
    );
};

export default FilterContent;