import React from 'react';
import { BiDetail } from 'react-icons/bi';
import Swal from 'sweetalert2';

const tableHead = ['Email', 'Amount', 'Issued date', 'Status']

const MyOrderTable = ({ orderData }) => {
    // console.log(orderData)

    const handleDetails = (data) => {
        // console.log("data",data)
        const imageElements = data?.itemImages?.map(link => `<img src=${link} alt="Image"  style="max-width: 300px; max-height: 300px; margin-right: 10px" /><br>`).join('');

        Swal.fire({
            title: `<strong>Items: ${data?.quantity}</strong>`,
            html:
                `<div style="margin-bottom: 15px;">
                <p style="color: green;">your transaction id: ${data?.transactionId}</p>
            </div>`
                +
                `<p style="color: blue; margin-bottom: 15px;">your product picture</p>`
                +
                `<div style="display: flex">${imageElements}</div>`,
            showCloseButton: true,
            focusConfirm: false,
        })
    }

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl text-white font-semibold leading-tight">All of orders</h2>
                </div>
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
                                                className="px-5 py-3 border-b-2 border-gray-200 text-white text-left text-xs font-semibold uppercase tracking-wider"
                                            >
                                                {item}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderData?.map((item) =>
                                        <tr key={item?._id} className='hover:bg-black'>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <div className="flex items-center">
                                                    <p
                                                        onClick={() => handleDetails(item)}
                                                        className='underline text-green-400 font-bold cursor-pointer text-xl'><BiDetail /></p>
                                                    <div className="ml-3">
                                                        <p className="text-white whitespace-no-wrap">
                                                            {item?.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <p className=" whitespace-no-wrap text-green-400 font-bold">${item.totalPrice}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-white text-sm">
                                                <p className=" whitespace-no-wrap">{new Date(item?.updatedAt).toLocaleString()}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                                                    ></span>
                                                    <span className="relative text-gray-300">{item.status}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderTable;