import React, { useContext } from 'react';
import { ProductFilterContext } from '../../pages/ProductsFilter/ProductsFilter';

const SelectSortingPrice = () => {
    const { selectedPriceValue, setSelectedPriceValue } = useContext(ProductFilterContext)


    const handleSelectChange = (event) => {
        setSelectedPriceValue(event.target.value);
    };

    return (
        <select
            className='w-full'
            value={selectedPriceValue}
            onChange={handleSelectChange}
        >
            <option value="-price">Highest price</option>
            <option value="price">Lowest price</option>
            <option value="-price">Price (A-Z)</option>
            <option value="price">Price (Z-A)</option>
        </select>
    );
};

export default SelectSortingPrice;