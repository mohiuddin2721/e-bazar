import React from 'react';
import Headline from '../../components/Headline/Headline';
import MyOrderTable from './MyOrderTable';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loader from '../../components/Loader/Loader';
import useAuth from '../../Hooks/useAuth';


const MyOrder = () => {
    const {user}= useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: orderData, isLoading } = useQuery({
        queryKey: ['myAllOrder', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`https://test-server-ten-psi.vercel.app/api/v1/payment/email?email=${user?.email}`)
            return res.data.data;
        }
    })

    if(isLoading){
        return <Loader />
    }

    return (
        <div className='min-h-[100vh]'>
            <div className='flex justify-center'>
                <Headline headline={"My Order"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-8 rounded'>
                <MyOrderTable orderData={orderData} />
            </div>
        </div>
    );
};

export default MyOrder;