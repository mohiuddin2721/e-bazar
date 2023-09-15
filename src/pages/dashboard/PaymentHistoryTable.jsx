import React from 'react';

const tableHead = ['Email', 'Quantity', 'Amount', 'Issued date', 'Status']

const PaymentHistoryTable = ({ paymentData, turnover }) => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl text-white font-semibold leading-tight">Turnover: <span className='text-green-500 text-sm'>(total - ${turnover})</span> </h2>
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
                                    paymentData?.map((item) =>
                                        <tr key={item?._id} className='hover:bg-black'>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <div className="flex items-center">
                                                    <p className="text-white ">
                                                        {item?.email}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <p className="  text-white font-bold">{item?.quantity}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <p className={`font-bold ${item?.totalPrice >= 65 ? 'text-red-400' : 'text-green-400'}`}>${item?.totalPrice}</p>
                                                {/* <p className="text-green-400 font-bold">${item?.totalPrice}</p> */}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-white text-sm">
                                                <p className=" ">{new Date(item?.updatedAt).toLocaleString()}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                                                    ></span>
                                                    <span className="relative text-gray-300">{item?.status}</span>
                                                </span>
                                            </td>
                                        </tr>
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

export default PaymentHistoryTable;