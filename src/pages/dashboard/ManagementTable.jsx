import React from 'react';
import { Fragment } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQueryClient } from '@tanstack/react-query';

const tableHead = ['Email', 'Quantity', 'Amount', 'Order date', 'Action']

const ManagementTable = ({ paymentData }) => {
    const [axiosSecure] = useAxiosSecure()
    const queryClient = useQueryClient()

    const handleDetails = (data) => {
        // console.log("data",data)
        const imageElements = data?.itemImages?.map(link => `<img src=${link} alt="Image"  style="max-width: 300px; max-height: 300px; margin-right: 10px" /><br>`);
        const itemsName = data?.itemNames?.map(name => name);

        Swal.fire({
            title: `<strong>Items: ${data?.quantity}</strong>`,
            html:
                `<div style="margin-bottom: 15px;">
                <p style="color: green;">Items: ${itemsName}</p><br>
            </div>`
                +
                `<p style="color: blue; margin-bottom: 15px;">ordered product:</p>`
                +
                `<div style="display: flex">${imageElements}</div>`,
            showCloseButton: true,
            focusConfirm: false,
        })
    }

    const sendToCourier = (id) => {
        console.log(id)
        const status = {
            status: "courier"
        }
        axiosSecure.patch(`/payment/${id}`, status)
            .then(res => {
                console.log(res?.data)
                if(res?.data?.status === 'success'){
                    queryClient.invalidateQueries({ queryKey: ['allPaymentHistory'] })
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'The product handover to the Courier',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {
                                        tableHead.map((item, i) =>
                                            <th key={i}
                                                className="px-5 py-3 border-b-4 border-green-500 text-white text-left text-xs font-semibold uppercase tracking-wider"
                                            >
                                                {item}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentData?.map((item, index) =>
                                        <Fragment key={item?._id}>
                                            <tr className='hover:bg-black'>
                                                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                    <div className="flex items-center">
                                                        <p className='text-white'>{index + 1}</p>
                                                        <BsThreeDotsVertical
                                                            className='text-2xl text-green-500 cursor-pointer'
                                                            onClick={() => handleDetails(item)}
                                                        />
                                                        <p className="text-white ">
                                                            {item?.email}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                    <p className="text-white font-bold">{item?.quantity} - ({item?.status})</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                    <p className="text-green-400 font-bold">${item?.totalPrice}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-white text-sm">
                                                    <p className=" ">{new Date(item?.createdAt).toLocaleString()}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                    {
                                                        item?.status === "courier" &&
                                                        <p className="text-white">{new Date(item?.updatedAt).toLocaleString()}</p>
                                                    }
                                                    {
                                                        item?.status === "pending" &&
                                                        <span
                                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                        >
                                                            <span
                                                                aria-hidden
                                                                className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                                                            ></span>
                                                            <span
                                                                onClick={() => sendToCourier(item?._id)}
                                                                className="relative text-gray-300 cursor-pointer"
                                                            >
                                                                courier
                                                            </span>
                                                        </span>
                                                    }
                                                </td>
                                            </tr>
                                        </Fragment>
                                    )
                                }
                            </tbody>
                            <thead>
                                <tr>
                                    {
                                        tableHead.map((item, i) =>
                                            <th key={i}
                                                className="px-5 py-3 border-b-4 border-green-500 text-white text-left text-xs font-semibold uppercase tracking-wider"
                                            >
                                                {item}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagementTable;