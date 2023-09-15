import { Collapse, LinearProgress } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AiFillHeart, AiTwotoneSetting } from 'react-icons/ai';
import { filterSectionBgColor } from '../../Utils/ConstantData';
import { ProductFilterContext } from '../../pages/ProductsFilter/ProductsFilter';


const FilterBgColor = () => {
    const { handleColor } = useContext(ProductFilterContext)
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <p
                onClick={handleClick}
                className='text-center ml-2 text-white font-bold mr-2 text-xl cursor-pointer'>
                colors
                <AiTwotoneSetting className='inline ml-1' />
            </p>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className='flex justify-center w-[60%] mx-auto my-2'>
                    {
                        filterSectionBgColor?.map((data, i) =>
                            <AiFillHeart key={i}
                                onMouseOver={() => handleColor(data.bgColor)}
                                className={`text-2xl text-center ${data.colorName} cursor-pointer`} />
                        )
                    }
                </div>
            </Collapse>
            <div className='w-[50%] mx-auto'>
                <LinearProgress />
            </div>
        </div>
    );
};

export default FilterBgColor;