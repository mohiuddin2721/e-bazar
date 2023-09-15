import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CategoriesStickyNav from './CategoriesStickyNav';
import { NavLink } from 'react-router-dom';

const StickyNav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavVisible(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{
            display: isNavVisible ? 'block' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '50px',
            zIndex: 1000,
            backgroundColor: '#fff',
            
            '@media (max-width: 767px)': {
                display: 'none',
            },
        }}
        >
            <Box className='flex h-full items-center justify-around'>
                <Box sx={{ display: 'flex', gap: 2, pb: 1 }}>
                    <CategoriesStickyNav />
                    {/* <BrandStickyNav /> */}
                </Box>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-500 font-bold underline"
                            : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to='/productsFilter'
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-500 font-bold underline"
                            : ""
                    }
                >
                    Choose Products
                </NavLink>
                <NavLink
                    to='/offerProducts'
                    className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-500 font-bold underline"
                            : "text-[#960000] text-[12px] font-bold"
                    }
                >
                    Special offer
                </NavLink>
            </Box>
        </Box>
    );
};

export default StickyNav;