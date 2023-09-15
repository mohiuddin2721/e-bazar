import React from 'react';
import offerBG from '../../assets/offerBG-1.jpg'
import { Grid } from '@mui/material';
import SingleData from '../../components/ReceivAllData/SingleData';
import useGetAllData from '../../Hooks/useGetAllData';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
import upcoming_2 from '../../assets/upcoming-2.jpg';
import upcoming_3 from '../../assets/upcoming-3.jpg';
import upcoming_4 from '../../assets/upcoming-4.jpg';
import upcoming_5 from '../../assets/upcoming-5.jpg';
import upcoming_6 from '../../assets/upcoming-6.jpg';
import upcoming_7 from '../../assets/upcoming-7.jpg';
import upcoming_8 from '../../assets/upcoming-8.jpg';
import upcoming_9 from '../../assets/upcoming-9.jpg';
import upcoming_10 from '../../assets/upcoming-10.jpg';
import upcoming_11 from '../../assets/upcoming-11.jpg';
import upcoming_12 from '../../assets/upcoming-12.jpg';
import upcoming_13 from '../../assets/upcoming-13.jpg';
import upcoming_14 from '../../assets/upcoming-14.jpg';
import upcoming_15 from '../../assets/upcoming-15.jpg';
import upcoming_16 from '../../assets/upcoming-16.jpg';

const percentOffPic = [
    { id: 1, pic: upcoming_2, percentOff: 30 },
    { id: 2, pic: upcoming_3, percentOff: 50 },
    { id: 3, pic: upcoming_4, percentOff: 40 },
    { id: 4, pic: upcoming_5, percentOff: 40 },
    { id: 5, pic: upcoming_6, percentOff: 50 },
    { id: 6, pic: upcoming_7, percentOff: 40 },
    { id: 7, pic: upcoming_8, percentOff: 50 },
    { id: 8, pic: upcoming_9, percentOff: 50 },
    { id: 9, pic: upcoming_10, percentOff: 30 },
    { id: 10, pic: upcoming_11, percentOff: 40 },
    { id: 11, pic: upcoming_12, percentOff: 30 },
    { id: 12, pic: upcoming_13, percentOff: 30 },
    { id: 13, pic: upcoming_14, percentOff: 40 },
    { id: 14, pic: upcoming_15, percentOff: 30 },
    { id: 15, pic: upcoming_16, percentOff: 30 },
]

const OfferRoute = () => {
    const { allProduct, isLoading } = useGetAllData()
    const [products, setProducts] = useState(percentOffPic)
    const [offerHeadline, setOfferHeadline] = useState("Products 1-30% off")
    // console.log(allProduct)

    if (isLoading) {
        return <Loader />
    }

    const oneToThirty = (data, percent) => {
        setOfferHeadline(data)
        const result = percentOffPic.filter(items => items.percentOff >= 1 && items.percentOff <= percent)
        setProducts(result)
    }
    const thirtyOneToForty = (data, percent) => {
        setOfferHeadline(data)
        const result = percentOffPic.filter(items => items.percentOff >= 31 && items.percentOff <= percent)
        setProducts(result)
    }
    const fortyOneToFifty = (data, percent) => {
        setOfferHeadline(data)
        const result = percentOffPic.filter(items => items.percentOff >= 41 && items.percentOff <= percent)
        setProducts(result)
    }
    const fiftyOneToSixty = (data, percent) => {
        setOfferHeadline(data)
        const result = percentOffPic.filter(items => items.percentOff >= 51 && items.percentOff <= percent)
        setProducts(result)
    }
    const sixtyOneToSeventy = (data, percent) => {
        setOfferHeadline(data)
        const result = percentOffPic.filter(items => items.percentOff >= 61 && items.percentOff <= percent)
        setProducts(result)
    }

    return (
        <div className='min-h-[100vh]'>
            <div className='relative'>
                <img className='w-full h-[45vh]' src={offerBG} alt="" />
                <span className='absolute top-[45%] right-[40%]'>
                    <p className='text-4xl text-white font-bold'>Special offers for you</p>
                </span>
            </div>
            <div className='flex w-full justify-center text-white'>
                <div className='rounded-sm'>
                    <button
                        onClick={() => oneToThirty('Products 1-30% off', 30)}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>1-30% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => thirtyOneToForty('Products 31-40% off', 40)}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>31-40% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => fortyOneToFifty('Products 41-50% off', 50)}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>41-50% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => fiftyOneToSixty('Products 51-60% off', 60)}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>51-60% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => sixtyOneToSeventy('Products 61-70% off', 70)}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>61-70% off</button>
                </div>
            </div>

            <div>
                <div className='flex justify-center my-[10px]'>
                    <p className='bg-[#378ebd50] py-1 px-3 rounded-sm'>{offerHeadline}</p>
                </div>
                <div className='my-10'>
                    <div className='w-full md:w-[90%] mx-auto flex flex-wrap mt-12 mb-8'>
                        {
                            products.map(item =>
                                <div key={item.id} className='basis-2/6 md:basis-1/6 my-1'>
                                    <div>
                                        <img src={item.pic} alt="offer product" />
                                    </div>
                                    {/* <div>
                                        <p className='text-center font-bold capitalize'>{item.name}</p>
                                    </div> */}
                                </div>
                            )
                        }
                    </div>
                    <div>
                        {products.length === 0 && <p className='text-xl md:text-2xl font-bold text-center'>No products</p>}
                    </div>
                </div>
                <div className='w-[96%] md:w-[90%] mx-auto'>
                    <p className='text-xl md:text-2xl font-bold'>Others product</p>
                </div>
                <div className='my-[30px] w-full md:w-[90%] mx-auto'>
                    <Grid container spacing={1}>
                        {
                            allProduct?.map(item =>
                                <SingleData
                                    key={item._id}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                    lg={3}
                                />
                            )
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default OfferRoute;