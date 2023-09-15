import React from 'react';
import Headline from '../../components/Headline/Headline';
import Loader from '../../components/Loader/Loader';
import useGetPaymentHistory from '../../Hooks/useGetPaymentHistory';
import PaymentHistoryTable from './PaymentHistoryTable';

const PaymentHistory = () => {
    const [paymentData, isLoading] = useGetPaymentHistory()
    // console.log(paymentData)
    const turnover = paymentData?.reduce((total, item)=> total + item?.totalPrice, 0)

    if(isLoading){
        return <Loader />
    }

    return (
        <div>
            <div className='flex justify-center'>
                <Headline headline={"Payment history"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-8 rounded'>
                <PaymentHistoryTable paymentData={paymentData} turnover={turnover} />
            </div>
        </div>
    );
};

export default PaymentHistory;
