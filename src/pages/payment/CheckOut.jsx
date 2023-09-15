import React, { useEffect, useState } from 'react';
import AddressForm from './AddressForm';
import Address from './Address';
import UpdateAddressForm from './UpdateAddressForm';
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';
import mastercard from "../../assets/payment-mastercard.png";
import bkash from "../../assets/bkash.png";
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { SiAmericanexpress, SiPayoneer } from 'react-icons/si';
// import { CartContext } from '../../contexts/CartProvider';
import Headline from '../../components/Headline/Headline';
import PriceFormate from '../../features/priceFormate/PriceFormate';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_REACT_STRIPE_KEY);

const CheckOut = () => {
    console.log('reached to checkout page')
    const [userAddress, isLoading] = useAddress();
    const [zip, setZip] = useState(null)
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
    const location = useLocation();
    const [priceToPay, setPriceToPay] = useState(0)
    const totalPrice = location?.state?.totalPrice;
    const totalQuantityOrder = location?.state?.totalQuantityOrder;
    console.log("totalPrice", totalPrice)
    console.log("totalQuantityOrder", totalQuantityOrder)
    console.log("location", location)
    console.log("userAddress", userAddress)
    console.log("priceToPay1", priceToPay)



    const handleAddress = () => {
        setZip(true)
    }
    const closeAddress = () => {
        setZip(false);
    }

    useEffect(() => {
        const total = (totalQuantityOrder * 5) + totalPrice;
        console.log("total", total)
        const price = parseFloat(total.toFixed(2))
        setPriceToPay(price)
        console.log("priceInsideUseEffect", price)
    }, [])

    console.log("priceToPayUnderUseEffect", priceToPay)

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <div className='flex justify-center'>
                <Headline headline={"Payment"} margin_Y={"4"} />
            </div>
            <hr className='my-4' />
            {userAddress?.data?.length != 0 ? (
                <Address handleAddress={handleAddress} zip={zip} />
            ) : (
                <AddressForm />
            )}
            <div className={zip ? 'block my-3 duration-300 ease-in-out opacity-100 transition-transform transform translate-y-0' : 'hidden'}>
                <UpdateAddressForm closeAddress={closeAddress} setZip={setZip} />
            </div>
            <div className='text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                <div className='w-full md:w-[40%]'>
                    <p className='font-bold text-xl'>2. Payment option:</p>
                </div>
                {
                    userAddress?.data?.length != 0 &&
                    <div className='w-full md:w-[60%] flex mt-3 md:mt-0'>
                        <div className='w-[40%] md:w-[30%] mx-auto'>
                            <div
                                className='cursor-pointer'
                                onClick={() => setSelectedPaymentOption("mastercard")}
                            >
                                <img src={mastercard} alt="Mastercard" />
                                <span>Mastercard</span>
                            </div>
                        </div>
                        <div className='w-[40%] md:w-[30%] mx-auto'>
                            <div
                                className='cursor-pointer'
                                onClick={() => setSelectedPaymentOption('bkash')}
                            >
                                <img src={bkash} alt="Bkash" />
                                <span>Bkash</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {
                selectedPaymentOption === "mastercard" &&
                <div className='min-h-[40vh] mt-4 bg-white w-full md:w-[60%] mx-auto relative border-dashed hover:border-solid border-b-2 border-[rgb(169,51,94)] hover:border-green-400 rounded-lg p-8'>
                    <div>
                        <p className="text-center text-blue-500 font-bold">International master / visa card</p>
                        <div className='flex w-full md:w-[60%] justify-evenly mx-auto my-2'>
                            <FaCcMastercard className='text-red-500 text-xl' />
                            <FaCcVisa className='text-blue-500 text-xl' />
                            <FaCcPaypal className='text-green-500 text-xl' />
                            <SiAmericanexpress className='text-blue-500 text-xl' />
                            <SiPayoneer className='text-purple-500 text-xl' />
                        </div>
                        <div className='w-full flex justify-center text-blue-500'>
                            <PriceFormate price={priceToPay} />
                        </div>
                    </div>
                    <div className='mt-[20px] ml-[10px] w-full'>
                        <Elements stripe={stripePromise}>
                            <CheckOutForm price={priceToPay} />
                        </Elements>
                    </div>
                </div>
            }
            {
                selectedPaymentOption === "bkash" &&
                <div className='h-[40vh] mt-4 bg-[#e2136e] w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                    <p className="text-center text-white font-bold">bkash</p>
                </div>
            }
        </div>
    );
};

export default CheckOut;