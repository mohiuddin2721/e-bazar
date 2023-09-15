import React from 'react';
import dashBack from '../../assets/dashBack.png'
import { Box, Grid } from '@mui/material';
import { BsArrowRightShort } from 'react-icons/bs';
import DashboardColor from '../../assets/colors/DashboardColor';
import useAuth from '../../Hooks/useAuth';
import SatisfactionChart from '../dashboardChart/SatisfactionChart';
import Last7DaysSell from '../dashboardChart/Last7DaysSell';
import CategoryChart from '../dashboardChart/CategoryChart';
import UserChart from '../dashboardChart/UserChart';
import AdminUserChart from '../dashboardChart/AdminUserChart';
import DashShortOrderTable from './DashShortOrderTable';
import { Link } from 'react-router-dom';
import { dashMiniCardData } from '../../Utils/ConstantData';

export default function Dashboard() {
    const { user } = useAuth()
    const { chartBackGradient } = DashboardColor;
    return (
        <div className='text-white'>
            <section className='mb-8'>
                <Grid container spacing={2}>
                    {
                        dashMiniCardData?.map((data, index) =>
                            <Grid key={index} item xs={12} sm={12} md={3} lg={3}>
                                <Box
                                    sx={{
                                        backgroundColor: '#0c0e29',
                                        display: 'flex', padding: '20px',
                                        justifyContent: 'space-between',
                                        borderRadius: '20px'
                                    }}>
                                    <div>
                                        <p className='text-xs text-gray-400'>
                                            {data?.name}
                                        </p>
                                        <p className='text-xl font-bold'>
                                            {data?.value}
                                            <span className='text-green-500 text-sm ml-2'>{data?.percent}%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className='w-12 h-12 rounded-[10px] bg-[#0075ff]'>
                                            <i className='text-white text-2xl flex justify-center items-center h-full'>{data?.icon}</i>
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </section>
            <section className='mb-8'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                        <Box sx={{
                            backgroundImage: `url(${dashBack})`,
                            padding: '40px', borderRadius: '20px', backgroundPosition: 'center',
                            minHeight: '340px', backgroundRepeat: 'no-repeat',
                            marginX: { xs: '10px', md: '7px', lg: '0px' },
                        }}
                        >
                            <div className='flex flex-col space-y-12'>
                                <div>
                                    <p>Welcome back,</p>
                                    <p className='text-2xl font-extrabold'>{user?.displayName}</p>
                                </div>
                                <div className='mt-6'>
                                    <p>Glad to see you again!</p>
                                    <p>Enjoy the work.</p>
                                </div>
                                <div className='mr-0 hover:mr-3'>
                                    <p>Tap to record <BsArrowRightShort className='inline-block text-2xl' /></p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            maxHeight: '340px',
                            marginX: { xs: '10px', md: '7px', lg: '0px' },
                        }}>
                            <SatisfactionChart />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            minHeight: { xs: '350px', lg: '320px' },
                            paddingTop: '20px',
                            paddingRight: '20px',
                            marginX: { xs: '10px', md: '7px', lg: '7px' },
                        }}>
                            <Last7DaysSell />
                        </Box>
                    </Grid>
                </Grid>
            </section>
            <section className='mb-4'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            // minHeight: { xs: '350px', lg: '320px' },
                            paddingTop: '20px',
                            paddingRight: '20px',
                            marginX: { xs: '10px', md: '7px', lg: '7px' },
                        }}>
                            <UserChart />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            paddingTop: '20px',
                            paddingRight: '20px',
                            marginX: { xs: '10px', md: '7px', lg: '7px' },
                        }}>
                            <CategoryChart />
                        </Box>
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            // maxHeight: '350px',
                            paddingTop: '20px',
                            paddingRight: '20px',
                            marginX: { xs: '10px', md: '7px', lg: '7px' },
                        }}>
                            <DashShortOrderTable />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Box sx={{
                            background: chartBackGradient.background,
                            borderRadius: '20px',
                            width: 'full',
                            minHeight: '350px',
                            paddingRight: '20px',
                            marginX: { xs: '10px', md: '7px', lg: '7px' },
                        }}>
                            <Box>
                                <p className='py-4 text-xl font-bold ml-3'>Admin & store manager</p>
                                <AdminUserChart />
                                <p className='underline hover:text-green-500 text-end pb-2'>
                                    <Link to='/dashboard/Manage_account'>
                                        see all
                                    </Link>
                                </p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </section>
            <section>
                {/* <p>chart 2nd</p> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <p></p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <p></p>
                    </Grid>
                </Grid>
            </section>
        </div>
    );
}