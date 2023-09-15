import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import useCart from '../../Hooks/useCart';
import { CartContext } from '../../contexts/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import PriceFormate from '../../features/priceFormate/PriceFormate';
import Headline from '../../components/Headline/Headline';

const MyCart = () => {
    const [cart, isLoading, refetch] = useCart()
    const { totalPrice, totalQuantityOrder } = useContext(CartContext)
    const navigate = useNavigate()

    // console.log(cart.data)

    const goCheckOutPage = () => {
        navigate("/dashboard/Check_Out_Route", { state: { totalPrice: totalPrice, totalQuantityOrder: totalQuantityOrder } })
    }

    const cartProduct = cart?.data?.map(item =>
        <CartProduct
            key={item._id}
            item={item}
            isLoading={isLoading}
            refetch={refetch}
        />)
    const noCartData = <p
        className='text-white font-bold flex h-full justify-center items-center'>
        Your cart is empty, <Link to="/productsFilter"><span className='ml-2 underline hover:text-green-500'>select your product</span></Link>
    </p>

    return (
        <div className='min-h-[70vh]'>
            <div className='flex justify-center'>
                <Headline headline={"Shopping cart"} margin_Y={"4"} />
            </div>
            <div className='flex w-full justify-around items-center'>
                <p className='text-white flex md:hidden mr-2'>Item: <span className='font-bold text-green-400'>{totalQuantityOrder}</span></p>
                <p className='text-white flex md:hidden mx-2'><span className='font-bold text-green-400'><PriceFormate price={(totalQuantityOrder * 5) + totalPrice} /></span></p>
                
                <button
                    onClick={goCheckOutPage}
                    className='text-white flex md:hidden font-bold my-4 mx-auto px-3 bg-green-500 hover:bg-green-700 rounded'
                >
                    Pay
                </button>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                <div className="col-span-5 md:col-span-4 mb-4 md:mb-0 md:mr-2">
                    {
                        cart?.data?.length === 0 ? <div className='h-[60vh]'>{noCartData}</div> : cartProduct
                    }
                </div>
                <div className="col-span-5 md:col-span-1 md:sticky top-0 relative">
                    {
                        cart?.data?.length > 0 && <div className='relative md:fixed text-white text-center'>
                            <div>
                                <p>Items:</p>
                                <p className='my-2 font-bold text-green-400'>{totalQuantityOrder}</p>
                            </div>
                            <div>
                                <p>Subtotal:</p>
                                <p className='my-2 font-bold text-green-400'><PriceFormate price={totalPrice} /> <span className='text-xs'>USD</span></p>
                            </div>
                            <div>
                                <p>Shifting:</p>
                                <p className='my-2 font-bold text-green-400'>{totalQuantityOrder * 5} <span className='text-xs'>USD</span></p>
                            </div>
                            <div>
                                <p>Total:</p>
                                <p className='my-2 font-bold text-green-400'>{(totalQuantityOrder * 5) + totalPrice} <span className='text-xs'>SUD</span></p>
                            </div>
                            <button
                                onClick={goCheckOutPage}
                                className='w-full text-white font-bold my-4 px-3 bg-green-500 hover:bg-green-700 rounded'
                            >
                                Proceed to buy
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;