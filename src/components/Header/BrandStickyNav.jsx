import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'rsuite';
import useGetAllData from '../../Hooks/useGetAllData';


function BrandStickyNav() {
    const { allProduct } = useGetAllData();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    
    const getBrand = allProduct?.map((data) => data?.brand)
    const allBrand = Array.from(new Set(getBrand));
    // console.log(allBrand)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{ fontSize: '12px' }}
            >
                BRAND
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {
                                        // allProduct?.map((item, i)=>
                                        allBrand?.map((item, i) =>
                                            <MenuItem key={i} onClick={handleClose}>{item}</MenuItem>
                                        )
                                    }
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

export default BrandStickyNav