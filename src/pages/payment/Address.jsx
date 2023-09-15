import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import useAddress from '../../Hooks/useAddress';

const Address = ({ handleAddress, zip }) => {
    const [userAddress] = useAddress();
    // console.log(userAddress)
    return (
        <div className='text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>

            <div className='w-full md:w-2/4 p-2'>
                <p className='font-bold text-xl'>1. Shipping address:</p>
            </div>
            <div className='w-full md:w-2/4 p-2 text-sm font-sans'>
                {
                    userAddress?.data?.map(item => <div key={item?._id}>
                        <p className="font-bold mb-2">{item?.name} ({item?.phone})</p>
                        <p className="text-white">{item?.email}</p>
                        <p className="text-white">{item?.address} (Zip: {item?.zipCode})</p>
                        <p className="text-white">{item?.country}, {item?.state}</p>
                    </div>
                    )
                }

            </div>
            {
                !zip && <span
                    onClick={handleAddress}
                    className='absolute top-4 right-4 flex cursor-pointer text-green-500 hover:text-green-300 underline'>
                    change <BsFillPencilFill className='ml-2' />
                </span>
            }
        </div>
    );
};

export default Address;