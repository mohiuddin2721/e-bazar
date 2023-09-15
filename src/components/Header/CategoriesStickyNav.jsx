import { Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'rsuite';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import { Link } from 'react-router-dom';


function CategoriesStickyNav() {
    const { allCategory } = useGetAllCategory()
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

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
                CATEGORIES
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
                                        allCategory?.map((item, index) =>
                                            <Link key={index} to={`/catagories/${item?.name}`}>
                                                <MenuItem key={item._id} onClick={handleClose}>
                                                    {item?.name}
                                                </MenuItem>
                                            </Link>
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

export default CategoriesStickyNav