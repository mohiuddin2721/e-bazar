import React, { useState, useEffect, useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../../Styles/MiddleNav.module.css';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { Avatar, Badge, Box, ListItemIcon, Divider, IconButton, Tooltip, Collapse, Drawer, List, ListItemButton, ListItemText, MenuItem, Menu } from '@mui/material';
import { categories } from '../../Utils/ConstantData';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideCartProduct from './SideCartProduct';
import useCart from '../../Hooks/useCart';
import { CartContext } from '../../contexts/CartProvider';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Logout from '@mui/icons-material/Logout';
import useUserRole from '../../Hooks/useUserRole';


const MiddleNav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [userRole] = useUserRole()
    const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false);
    const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);
    const [openCollapseMenu1, setCollapseMenu1] = useState(false);
    const [cart, isLoading, refetch] = useCart()
    const { totalQuantityOrder, totalPrice } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.pathname)
    // console.log(userRole)

    const goCheckOutPage = () => {
        navigate("/dashboard/Check_Out_Route", { state: { totalPrice: totalPrice, totalQuantityOrder: totalQuantityOrder } })
    }
    // console.log(getSearchValue)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCollapseMenu1 = () => {
        setCollapseMenu1(!openCollapseMenu1);
    };

    const [openSearch, setOpenSearch] = useState(false);
    useEffect(() => {
        const hidePopUp = () => setOpenSearch(false);
        window.addEventListener('click', hidePopUp);
        return () => {
            window.removeEventListener('click', hidePopUp);
        };
    }, []);

    const handleDrawerClose1 = () => {
        setIsOpenMenuDrawer(false);
    };


    const handleDrawerOpen2 = () => {
        if (user) {
            setIsOpenCartDrawer(true);
        } else {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Must need to login',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<Link to='/signIn'>Login</Link>`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showCancelButton: true,
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/signIn';
                }
            });
            toast.error("Must need to be logged in")
        }

    };

    const handleDrawerClose2 = () => {
        setIsOpenCartDrawer(false);
    };
    const handleLogout = () => {
        Swal.fire({
          title: 'Logout',
          text: 'Are you sure you want to log out?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Logout',
          cancelButtonText: 'Cancel',
        }).then((result) => {
          if (result.isConfirmed) {
            // User clicked "Logout," perform logout action
            logOut();
            toast.success('Logged out successfully');
          } else {
            // User clicked "Cancel" or closed the popup
          }
        });
      };
    const handleNoUserPic = () => {
        Swal.fire({
            position: 'top-middle',
            icon: 'error',
            title: 'Must need to login',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: `<Link to='/signIn'>Login</Link>`,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/signIn';
            }
        });
        toast.error("Must need to be logged in")
    }

    const handleSearchValue = (e) => {
        navigate("/productsFilter")
    }
    const navigateWithSearchValue = (e) => {
        navigate("/productsFilter")
    }

    return (
        <>
            <div className={`border-t border-b lg:border-b-0 duration-500 z-20 bg-white left-0 right-0 border-[#E7E7E7]`}>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='px-[10px] flex items-center gap-[40px]'>
                        <div className='w-[10%] lg:hidden block'>
                            <button onClick={() => setIsOpenMenuDrawer(true)}>
                                <GiHamburgerMenu className='text-[#0088CC] font-bold text-2xl' />
                            </button>
                        </div>
                        <div className='hidden md:flex'>
                            <Link to='/'>
                                <p className='font-bold capitalize text-[#4a31b1]'>chengra_Bazar</p>
                            </Link>
                        </div>
                        <div className='w-full flex gap-[30px] text-[13px] justify-end lg:justify-start  text-[#8d8d8d]'>
                            {
                                location.pathname != "/productsFilter" ?
                                    <div className='w-full h-[40px] hidden lg:flex items-center rounded-[50px] bg-[#f1f1f1]'>
                                        <input
                                            type="text"
                                            placeholder='Search...'
                                            onChange={handleSearchValue}
                                            className='h-full w-[95%] outline-none px-[20px] py-[10px]  bg-transparent rounded-tl-[50px] rounded-bl-[50px]' />
                                        <div className='w-[5%] flex items-center'>
                                            <BsSearch
                                                onClick={navigateWithSearchValue}
                                                className='text-[#222529] text-lg cursor-pointer' />
                                        </div>
                                    </div>
                                    :
                                    <div className='w-full h-[40px] hidden lg:flex items-center rounded-[50px] bg-[#f1f1f1]'>

                                    </div>

                            }
                            <div className='hidden lg:flex items-center'>
                                <FiPhoneCall className='text-[30px] mr-[7px]' />
                                <div className='flex flex-col'>
                                    <span className='text-[11px] text-[#777] font-semibold'>CALL IS NOW</span>
                                    <span className='text-[16px] font-bold flex gap-1'><span>+016</span><span>8010</span>6149</span>
                                </div>
                            </div>
                            <div className='flex gap-3 sm:gap-5 text-2xl items-center'>
                                <div className='relative block lg:hidden'>
                                    {
                                        location.pathname != "/productsFilter" ?
                                            <div className='flex md:hidden'>
                                                <input
                                                    type="text"
                                                    placeholder='Searchs...'
                                                    className='h-full w-[88%]'
                                                    onChange={handleSearchValue}
                                                />
                                            </div>
                                            :
                                            <div className='w-full h-[40px] hidden lg:flex items-center rounded-[50px] bg-[#f1f1f1]'>

                                            </div>
                                    }

                                </div>
                                {
                                    user?.photoURL ?
                                        <>
                                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                                <Tooltip title="Account">
                                                    <IconButton
                                                        onClick={handleClick}
                                                        size="small"
                                                        sx={{ ml: 2 }}
                                                        aria-controls={open ? 'account-menu' : undefined}
                                                        aria-haspopup="true"
                                                        aria-expanded={open ? 'true' : undefined}
                                                    >
                                                        <Avatar alt="pic" src={user?.photoURL} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Box>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                PaperProps={{
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem onClick={handleClose}>
                                                    <Link to={userRole === "admin" ? '/dashboard' : '/dashboard/userDash'}>Dashboard</Link>
                                                </MenuItem>
                                                {
                                                    userRole != "admin" &&
                                                    <MenuItem onClick={handleClose}>
                                                        <Link to='/dashboard/My_cart'>My cart</Link>
                                                    </MenuItem>
                                                }
                                                <Divider />
                                                <MenuItem onClick={handleClose}>
                                                    <Box onClick={handleLogout} sx={{ display: 'flex' }}>
                                                        <ListItemIcon>
                                                            <Logout fontSize="small" />
                                                        </ListItemIcon>
                                                        Logout
                                                    </Box>
                                                </MenuItem>
                                            </Menu>
                                        </>
                                        :
                                        <AiOutlineUser onClick={handleNoUserPic} className='text-[#222529] hidden lg:block cursor-pointer' />
                                }
                                <FiHeart className='text-[#222529] hidden lg:block' />
                                <button
                                    className='relative'
                                    onClick={handleDrawerOpen2}
                                >
                                    <Badge color="secondary" badgeContent={cart?.data?.length}>
                                        <AiOutlineShopping className='text-[#222529]' />
                                    </Badge>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <>
                    <Drawer
                        anchor='right'
                        open={isOpenCartDrawer}
                    >
                        <Box style={{ fontFamily: "'Poppins', sans-serif" }} className={`py-[25px] px-[20px] overflow-y-auto ${styles.customScroll}`}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className='mb-[17px] leading-10 font-bold text-[#212529] text-[20px]'>Shopping Cart</p>
                                <CloseOutlinedIcon
                                    className='text-black cursor-pointer text-right text-2xl ml-10'
                                    onClick={handleDrawerClose2} />
                            </Box>

                            {cart?.data?.map((item, i) => <SideCartProduct key={i} item={item} refetch={refetch} />)}
                            <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                                <span>ITEM:</span>
                                <span className='text-[15px]'>{totalQuantityOrder}</span>
                            </div>
                            <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                                <span>SUBTOTAL:</span>
                                <span className='text-[15px]'>{totalPrice}</span>
                            </div>
                            <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                                <span>DELIVERY CHARGE:</span>
                                <span className='text-[15px]'>{totalQuantityOrder * 20}</span>
                            </div>
                            <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                                <span>TOTAL:</span>
                                <span className='text-[15px]'>{(totalQuantityOrder * 20) + totalPrice}</span>
                            </div>
                            <div className='mt-[10px] flex flex-col gap-[15px]'>
                                <Link to='/dashboard/My_cart'>
                                    <button className='bg-[#e7e7e7] hover:bg-[#f1f1f1] duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'>
                                        VIEW CART
                                    </button>
                                </Link>
                                <button
                                    onClick={goCheckOutPage}
                                    className='bg-[#222529] hover:bg-[#34393F] text-white duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'
                                >
                                    CHECKOUT
                                </button>
                            </div>
                        </Box>
                    </Drawer>
                </>
            </div>
            <div>
                <>
                    <Drawer
                        anchor='left'
                        open={isOpenMenuDrawer}
                        sx={{
                            '.MuiBox-root': {
                                width: '300px'
                            },
                            '.css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
                                backgroundColor: '#240838'
                            }
                        }}
                    >
                        <Box style={{ fontFamily: "'Poppins', sans-serif", overflow: 'auto', backgroundColor: '#240838', color: 'white', maxWidth: '500px' }}>
                            <CloseOutlinedIcon sx={{ width: '100%', alignItems: 'end', mt: 2, fontSize: 35 }}
                                onClick={handleDrawerClose1} />
                            <div className='mt-[20px] mb-[30px]'>
                                <div>
                                    <List
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to="/">
                                                <ListItemText primary="Home" />
                                            </Link>
                                        </ListItemButton>
                                        <ListItemButton onClick={handleCollapseMenu1} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="Categories" />
                                            {openCollapseMenu1 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openCollapseMenu1} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    categories?.map((item, i) =>
                                                        <Link key={i} to={`/catagories/${item?.name}`}>
                                                            <MenuItem sx={{ pl: 4, '&:hover': { borderBottom: '1px solid red' } }}>
                                                                {item?.name}
                                                            </MenuItem>
                                                        </Link>
                                                    )
                                                }
                                            </List>
                                        </Collapse>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to="/offerProducts">
                                                <ListItemText primary="Special offer!" />
                                            </Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to="/productsFilter">
                                                <ListItemText primary="Filter product" />
                                            </Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to="/Customer_care">
                                                <ListItemText primary="Customer care" />
                                            </Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to="/">
                                                <ListItemText primary="Track My Order" />
                                            </Link>
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <Link to={userRole === "admin" ? '/dashboard' : '/dashboard/userDash'}>
                                                <ListItemText primary="Dashboard" />
                                            </Link>
                                        </ListItemButton>
                                        {user ?
                                            <Box onClick={handleLogout} sx={{ marginLeft: '15px' }}>
                                                Logout
                                            </Box>
                                            :
                                            <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                                <Link to="/signIn">
                                                    <ListItemText primary="Log in" />
                                                </Link>
                                            </ListItemButton>
                                        }
                                    </List>
                                </div>
                                <div className='flex justify-center gap-[10px]'>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#3b5a9a] cursor-pointer duration-500'>
                                        <FaFacebookF />
                                    </div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#1aa9e1] cursor-pointer duration-500'>
                                        <FaTwitter />
                                    </div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#7c4a3a] cursor-pointer duration-500'>
                                        <FaInstagram />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </>
            </div>
        </>
    )
}

export default MiddleNav;