import React from 'react';
import Headline from '../../components/Headline/Headline';
import ManagementTable from './ManagementTable';
import useGetPaymentHistory from '../../Hooks/useGetPaymentHistory';
import Loader from '../../components/Loader/Loader';

const Management = () => {
    const [paymentData, isLoading] = useGetPaymentHistory();

    if(isLoading){
        return <Loader />
    }

    return (
        <div>
            <div className='flex justify-center'>
                <Headline headline={"Manage order"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-8 rounded'>
                <ManagementTable paymentData={paymentData} />
            </div>
        </div>
    );
};

export default Management;