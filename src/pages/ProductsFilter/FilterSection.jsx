import React, { useContext } from 'react';
import FilterContent from '../../components/filterContent/FilterContent';
import { ProductFilterContext } from './ProductsFilter';

const FilterSection = () => {
    const { filterBgColor } = useContext(ProductFilterContext)

    return (
        <div className={`${filterBgColor} rounded min-h-[100vh]`}>
            <FilterContent />
        </div>
    );
};

export default FilterSection;