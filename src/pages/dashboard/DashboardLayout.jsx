import React, { useContext, useState } from 'react';
import '../../Styles/Dashboard.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BackupIcon from '@mui/icons-material/Backup';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';
import { TbSlash } from 'react-icons/tb';
import { AiTwotoneSetting } from 'react-icons/ai';
import { AuthContext } from '../../contexts/AuthProvider';
import { dashboardLink } from '../../Utils/ConstantData';
import useUserRole from '../../Hooks/useUserRole';
import SmallFooter from './SmallFooter';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // left short bar for small devices 
    width: `calc(${theme.spacing(0)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function DashboardLayout() {
    const { user } = useContext(AuthContext)
    const [userRole] = useUserRole();
    let location = useLocation();
    const path = (location?.pathname?.split('/')[2])
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [outletMargin, setOutletMargin] = useState(false)
    // console.log(userRole)

    const handleDrawerOpen = () => {
        setOpen(true);
        setOutletMargin(true)
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setOutletMargin(false)
    };

    return (
        <Box
            style={{ background: "linear-gradient(180deg, rgba(1,10,79,1) 0%, rgba(11,11,207,1) 45%, rgba(6,1,95,1) 100%)" }}
            sx={{ minHeight: '120vh' }}
        >
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    sx={{ height: '50px', backgroundColor: '#06015f' }}
                    position="fixed"
                    open={open}
                >
                    <Box sx={{ display: 'flex', width: '90%', marginX: 'auto' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: 1
                            }}
                        >
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 1,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Link to={userRole == "admin" ? "/dashboard" : "/dashboard/userDash"}>
                                <BackupIcon /> <TbSlash className='inline text-xl font-bold' />
                            </Link>
                            <Typography variant='h8' sx={{ display: 'block' }}>{path ? path : 'Dashboard'}</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Link to='/' className='underline'> Home </Link>
                            <Box>
                                <AiTwotoneSetting
                                    className='cursor-pointer text-white mx-4'
                                />
                            </Box>
                            <p>
                                <MdNotifications className='cursor-pointer' />
                            </p>
                        </Box>
                    </Box>
                </AppBar>

                <Drawer
                    variant="permanent"
                    open={open}
                    sx={{
                        '.MuiDrawer-paper': {
                            backgroundColor: '#041389',
                            color: 'white',
                        },
                    }}
                >
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                            Chengra Bazar
                        </Typography>
                        <IconButton
                            onClick={handleDrawerClose}
                            sx={{ color: 'white' }}
                        >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <Box sx={{ marginTop: '10px' }}>
                        <img
                            alt="Remy Sharp"
                            src={user?.photoURL}
                            className='w-full'
                            style={{ borderRadius: "159px 159px 0px 0px" }}
                        />
                    </Box>
                    <List>
                        {
                            dashboardLink?.[userRole]?.map((link, index) => (
                                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                    <NavLink
                                        to={`${link?.to}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "text-green-500 font-bold underline"
                                                : "text-white"
                                        }
                                    >
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <i className={`text-2xl ${location?.pathname === link?.to ? 'text-green-500' : 'text-white'}`}>{link?.icon}</i>
                                                {/* <i className='text-2xl text-white'>{link?.icon}</i> */}
                                            </ListItemIcon>
                                            <ListItemText primary={link.name} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </NavLink>
                                </ListItem>
                            ))
                        }
                    </List>
                    <Divider />
                    <div className="pyramid-loader mb-[20px]">
                        <div className="pyramid_wrapper">
                            <span className="pyramid_side pyramid_side1"></span>
                            <span className="pyramid_side pyramid_side2"></span>
                            <span className="pyramid_side pyramid_side3"></span>
                            <span className="pyramid_side pyramid_side4"></span>
                            <span className="pyramid_shadow"></span>
                        </div>
                    </div>
                </Drawer>

            </Box>
            <div className={outletMargin ? 'ml-[0px] md:ml-[260px] transition-all duration-300 ease-in-out' : 'ml-[0px] md:ml-[90px] transition-all duration-300 ease-in-out'}>
                <DrawerHeader />
                <Outlet />
            </div>
            <section className='h-[20vh]'>
                <SmallFooter />
            </section>
        </Box>
    );
}