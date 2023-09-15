import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { CartContext } from '../../contexts/CartProvider';

function SideCartProduct({ item, refetch }) {
    const { deleteCartProduct } = useContext(CartContext)

    return (
        <div className='py-[20px] flex gap-[15px] border-b border-[#E6EBEE]'>
            <div className='w-[70%] mb-[3px] flex flex-col gap-[11px]'>
                <p className='text-[14px] text-[#222529] cursor-pointer font-medium'>{item?.name}</p>
                <p className='text-[#696969] leading-[18px] text-[13px]'>{item?.quantityOrder} x {item?.price} <span className='text-xs'>BDT</span></p>
            </div>
            <figure className='w-[30%] h-[78px] border relative border-[#f4f4f4]'>
                <img src={item?.selectedProductImg} alt="" className='w-full h-full' />
                <span 
                onClick={()=> deleteCartProduct(item?._id, refetch)}
                className='absolute h-[20px] group w-[20px] rounded-full bg-white shadow-[0_2px_6px_0px_rgb(0,0,0,0.5)] top-[-10px] right-[-10px] flex justify-center items-center cursor-pointer'>
                    <MdClose className='group-hover:text-[#0088CC] duration-500' />
                </span>
            </figure>
        </div>
    )
}

export default SideCartProduct;