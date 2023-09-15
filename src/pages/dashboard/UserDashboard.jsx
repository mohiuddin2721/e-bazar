import { Avatar, Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import { userDashMiniCardData } from '../../Utils/ConstantData';
import useAuth from '../../Hooks/useAuth';
import UserDashChart from './UserDashChart';
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';
import { BsFillPencilFill } from 'react-icons/bs';
import UpdateAddressForm from '../payment/UpdateAddressForm';
import AddressForm from '../payment/AddressForm';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const UserDashboard = () => {
    const { user } = useAuth();
    const [userAddress, isLoading, refetch] = useAddress();
    const [zip, setZip] = useState(null)
    const [addressSection, setAddressSection] = useState(null)
    // console.log(userAddress?.data?.[0])

    const handleAddress = () => {
        setZip(true)
    }
    const closeAddress = () => {
        setZip(false);
    }
    const addAddress = () => {
        setAddressSection(true);
    }
    const closeAddressForm = () => {
        setAddressSection(false);
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <section>
                <Grid container spacing={2}>
                    {
                        userDashMiniCardData?.map((data, index) =>
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
                                        <p className='text-xl text-white font-bold'>
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
            <section className='mt-[50px]'>
                <div className="flex flex-wrap">
                    <div className="w-[96%] md:w-[30%] mx-auto p-2 bg-[#260c29] h-[250px] rounded-md">
                        <Box className='flex justify-center items-center h-full'>
                            <Box>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user?.photoURL}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                    }}
                                />
                                <p className='text-white text-center pt-2 font-bold'>{user?.displayName}</p>
                            </Box>
                        </Box>
                    </div>
                    <div className="w-[96%] md:w-[40%] bg-[#0c0e29] rounded-md mx-auto p-2">
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <div>
                                    <p className='text-xl text-white font-bold mb-4'>Your activities</p>
                                </div>
                                <div className='text-white text-center'>
                                    <p>Orders: 3</p>
                                    <p>Payments: 4</p>
                                    <p>Reviews: 2</p>
                                    <p>Whitelist: 7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[96%] md:w-[30%] bg-[#260c29]  mx-auto p-2 rounded-md h-auto">
                        <div className='h-full'>
                            <UserDashChart />
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-[10px]'>
                <div
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
                    }}
                    className='w-[96%] md:w-[40%] min-h-[50vh] mx-auto bg-[#260c29] relative rounded-md'
                >
                    <div className='w-full p-4'>
                        <div className='flex justify-center items-center'>
                            {
                                userAddress?.data?.map(item => <div key={item?._id} className='text-white'>
                                    <p className='font-bold text-white text-xl underline my-3'>Your shipping address:</p>
                                    <p className="font-bold mb-2"> Name: <span className='text-green-500 ml-1'>{item?.name || user?.displayName}</span></p>
                                    <p>Phone: <span className='text-green-500 ml-1'>{item?.phone || "click change to update"}</span></p>
                                    <p>Email: <span className='text-green-500 ml-1'>{item?.email || "click change to update"}</span></p>
                                    <p>Road N.: <span className='text-green-500 ml-1'>{item?.address || "click change to update"}</span></p>
                                    <p>Zip: <span className='text-green-500 ml-1'>{item?.zipCode || "click change to update"}</span></p>
                                    <p>State: <span className='text-green-500 ml-1'>{item?.state || "click change to update"}</span></p>
                                    <p>Country: <span className='text-green-500 ml-1'>{item?.country || "click change to update"}</span></p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        userAddress?.data?.length === 0 &&
                        <div className='w-full p-4'>
                            <div className='flex justify-center items-center'>
                                <div className='text-white'>
                                    <p className="font-bold mb-2"> Name: <span className='text-green-500 ml-1'>{user?.displayName}</span></p>
                                    <p
                                        onClick={addAddress}
                                        className='text-green-500 my-8 underline cursor-pointer'>Add your address</p>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        userAddress?.data != 0 &&
                        <span
                            onClick={handleAddress}
                            className='absolute top-4 right-4 flex cursor-pointer text-green-500 hover:text-green-300 underline'>
                            change <BsFillPencilFill className='ml-2' />
                        </span>
                    }
                </div>
            </section>
            <section className='mt-[15px]'>
                {
                    zip && <UpdateAddressForm closeAddress={closeAddress} setZip={setZip} />
                }
            </section>
            <section className='mt-[15px] relative'>
                {
                    addressSection && <AddressForm />
                }
                {
                    addressSection &&
                    <span>
                        <AiOutlineCloseCircle
                            onClick={closeAddressForm}
                            className='text-3xl md:text-4xl text-green-500 bg-[#1c0202] rounded-md cursor-pointer absolute top-1 right-5 md:right-60'
                        />
                    </span>
                }
            </section>
        </div>
    );
};

export default UserDashboard;