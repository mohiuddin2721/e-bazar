import React, { useContext, useEffect, useState } from 'react'
import useGetAllData from '../../Hooks/useGetAllData';
import { Link, useLocation, useParams } from 'react-router-dom';
// import ImageMagnify from '../../features/ZoomImage/ImageMagnify';
import ZoomImage from '../../features/ZoomImage/ZoomImage';
import PriceFormate from '../../features/priceFormate/PriceFormate';
import Stars from '../stars/Stars';
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import SingleData from './SingleData';
import { component_container } from '../../Styles/ComponentStyle';
import Swal from 'sweetalert2';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { delivery_replacement_data } from '../../Utils/ConstantData';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { FaDollarSign } from 'react-icons/fa';
import CommentsSection from './CommentsSection';


function DetailSingleData() {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const { allProduct } = useGetAllData();
    const [quantityOrder, setQuantityOrder] = useState(1)
    const [upperImage, setUpperImage] = useState("");
    const [selectedProductImg, setSelectedProductImg] = useState("");
    const queryClient = useQueryClient()
    const location = useLocation()
    // console.log(location.state.item)

    const selectedProduct = location.state.item;
    const { _id, name, imageURL, description, price, unit, quantity, status, brand, ratting, categories, prePrice } = selectedProduct;
    const relatedProduct = allProduct?.filter(item => item?.categories == categories)

    useEffect(() => {
        window.scrollTo(top)
        setUpperImage(imageURL[0][0])
        setSelectedProductImg("")
    }, [id])

    const handleSelectProductImg = (event) => {
        setSelectedProductImg(event.target.value);
        setUpperImage(event.target.value)
    };

    const handleUpperImage = (pic) => {
        setUpperImage(pic)
    };

    const handle_delivery_replacement = (d) => {
        // console.log(d)
        let text;
        if (d === 1) text = "Delivery will complete within 20 to 30 days"
        if (d === 2) text = "If you don't damage the product, you can replace the product within 30 days"
        if (d === 3) text = "Fast delivery ever, ( within 1 or 2 days ). You need to pay for this service"
        Swal.fire({
            title: text,
        })
    }
    const handleAddToCart = async () => {
        const formData = new FormData();

        if (!user) {
            return Swal.fire({
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
        }
        // console.log(selectedProductImg)
        if (!selectedProductImg) {
            return Swal.fire({
                icon: 'error',
                title: 'Chose one image',
                text: 'Which one do you want to purchase, just click on the phone',
            })
        }
        const userEmail = user.email;
        const cartData = {
            brand: brand,
            categories: categories,
            selectedId: _id,
            name: name,
            price: price,
            selectedProductImg: selectedProductImg,
            quantity: quantity,
            quantityOrder: quantityOrder,
            unit: unit,
            status: status,
            userEmail: userEmail,
            shifting: quantityOrder * 5,
            total: price * quantityOrder,
        }

        Object.keys(cartData).forEach(prop => {
            formData.append(`${prop}`, cartData[prop])
        })
        // console.log(cartData)
        try {
            const response = await fetch("https://test-server-ten-psi.vercel.app/api/v1/addCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Convert data to JSON string
                body: JSON.stringify(cartData),
            });

            const responseData = await response.json();
            if (responseData.status === 'success') toast("Product stored in your cart")
            queryClient.invalidateQueries({ queryKey: ['cart'] })
            // console.log(responseData)
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white mb-10">
            <div className="container px-2 pt-10 pb-20 mx-auto">
                <div className="lg:w-4/5 mx-auto h-auto flex flex-wrap">
                    <div className='lg:w-1/2 relative w-full max-h-[80vh] rounded border border-gray-200'>
                        {/* <div className='hidden lg:block'>
                            <ImageMagnify
                                upperImage={upperImage}
                                name={name}
                            />
                        </div> */}
                        <div style={{ overflow: 'hidden' }}>
                            <ZoomImage
                                upperImage={upperImage}
                                name={name}
                            />
                            {/* <img alt="ecommerce" className="w-[100%] h-[100%]" src={upperImage} /> */}
                        </div>
                        <div className='w-full h-[80px] flex'>
                            {
                                imageURL[0]?.map((pic, index) =>
                                    <div key={index} className='border border-red-500 hover:border-green-500 mr-2'>
                                        <img
                                            onClick={() => handleUpperImage(pic)}
                                            alt="ecommerce"
                                            className="w-[100%] h-[100%]"
                                            src={pic} />
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                        <div className="flex mb-4">
                            <Stars ratting={ratting} />
                        </div>

                        <div className='mb-4'>
                            {prePrice && <p className='text-xs line-through ml-3'> {prePrice} <FaDollarSign className='inline text-xs' /></p>}
                            {/* <p className='text-gray-500'>USD <span className='line-through'>{price + 10}</span></p> */}
                            <p className='text-green-500'
                            >
                                Deal of the day:
                                <span className="title-font font-medium"><PriceFormate price={price} /></span>
                            </p>
                        </div>

                        <p className="leading-relaxed mb-2">{description}</p>
                        <hr />
                        <div className='flex my-4 text-3xl w-full justify-around'>
                            {
                                delivery_replacement_data.map(data =>
                                    <div
                                        key={data.id}
                                        onClick={() => handle_delivery_replacement(data?.id)}
                                        className={`${data?.textColor} cursor-pointer`}
                                    >
                                        <i>
                                            {data.icon}
                                        </i>
                                        <p className='text-sm'>{data?.name}</p>
                                    </div>
                                )
                            }
                        </div>
                        <hr />
                        <p>Available: {status} <span className='text-xs'>({quantity}{unit})</span></p>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Brand: {brand}</h2>
                        <hr className='my-2' />
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <FormControl sx={{ zIndex: 0 }}>
                                <FormLabel id="demo-row-radio-buttons-group-label">Choose one</FormLabel>
                                <RadioGroup
                                    row
                                    value={selectedProductImg}
                                    onChange={handleSelectProductImg}
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    {
                                        imageURL[0]?.map((data, index) =>
                                            <FormControlLabel
                                                key={index}
                                                value={data}
                                                control={<Radio />}
                                                label={<img src={data} alt={`Image`} width="100" />}
                                            />
                                        )
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className='my-2'>
                            <p className='flex'>
                                Quantity:
                                <span>
                                    <button
                                        onClick={() => setQuantityOrder(quantityOrder - 1)}
                                        className={`ml-4 cursor-pointer text-2xl ${quantityOrder <= 1 ? 'text-gray-400' : 'text-green-500'}`}
                                        disabled={quantityOrder <= 1}
                                    >
                                        <BiMinus />
                                    </button>
                                </span>
                                <span className='mx-6'>
                                    {quantityOrder}
                                </span>
                                <span>
                                    <button
                                        onClick={() => setQuantityOrder(quantityOrder + 1)}
                                        className={`ml-4 cursor-pointer text-2xl ${quantityOrder >= quantity ? 'text-gray-400' : 'text-green-500'}`}
                                        disabled={quantityOrder >= quantity}
                                    >
                                        <BiPlus />
                                    </button>
                                </span>
                            </p>
                        </div>
                        <hr className='my-4' />
                        <div className="flex">
                            {
                                quantity === 0 ?
                                    <>
                                        <p className='text-red-500 font-bold text-xl'>Sorry, Out of stock</p>
                                        <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                        >
                                            add to wishlist <AiFillHeart />
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link to='/dashboard/My_cart'>
                                            <button className='flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'>VIEW CART</button>
                                        </Link>
                                        <button
                                            // onClick={() => handleAddToCart({ selectedId, name, description, price, unit, quantity, status, categories, quantityOrder })}
                                            onClick={handleAddToCart}
                                            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                                        >
                                            Add to cart
                                        </button>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* All comments of the product */}
            <div className='w-[98%] md:w-[90%] lg:w-[84%] mx-auto'>
                <CommentsSection
                    productName={name}
                    id={_id}
                />
            </div>

            {/* related products bellow */}
            <div className='mt-4'>
                <p className='text-2xl text-center font-bold text-green-500 my-2'>Related Products</p>
                <div>
                    <Box sx={component_container} className='my-10 mx-auto'>
                        <Grid container spacing={.5}>
                            {
                                relatedProduct?.map(item =>
                                    <SingleData
                                        key={item?._id}
                                        item={item}
                                        xs={6}
                                        sm={6}
                                        md={3}
                                    />)
                            }
                        </Grid>
                    </Box>
                </div>
            </div>
        </section>
    )
}

export default DetailSingleData