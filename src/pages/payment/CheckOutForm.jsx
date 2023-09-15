import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import useCart from '../../Hooks/useCart';
import { CartContext } from '../../contexts/CartProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CheckOutForm = ({ price }) => {
    const [cart] = useCart()
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const { totalQuantityOrder } = useContext(CartContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/payment/create-payment-intent', { price })
                .then(res => {
                    console.log(res?.data?.clientSecret)
                    setClientSecret(res?.data?.clientSecret)
                })
        }
    }, [price, axiosSecure])



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked to pay')
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }
        setProcessing(true)

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            // console.log('Payment Method', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }
        // console.log("paymentIntent", paymentIntent)
        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            // save payment information to the server 
            const paymentData = {
                email: user?.email,
                transactionId: paymentIntent.id,
                totalPrice: price,
                quantity: totalQuantityOrder,
                item: cart?.data?.length,
                itemId: cart?.data?.map(item => item?._id),
                itemNames: cart?.data?.map(item => item?.name),
                itemImages: cart?.data?.map(item => item?.selectedProductImg),
                itemPrices: cart?.data?.map(item => item.price)
            }
            // console.log("paymentData", paymentData)
            axiosSecure.post('/payment', paymentData)
                .then(res => {
                    console.log("res", res.data)
                    if (res.data.status === "success") {
                        toast('payment successfully completed')
                        Swal.fire({
                            position: 'top-middle',
                            icon: 'success',
                            title: 'payment successfully completed',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate("/dashboard/My_order")
                    }
                })
        }
        // console.log(paymentIntent)

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='border border-indigo-800 bg-indigo-600 rounded-md py-1 px-3 mt-2 text-white font-bold hover:bg-purple-500 cursor-pointer'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 w-full text-center'>{cardError}</p>}
            {transactionId && <p className='text-green-500 w-full text-center'>Successfully complete your transaction. {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;