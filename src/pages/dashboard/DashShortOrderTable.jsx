import React from 'react';
import { Link } from 'react-router-dom';

const tableHead = ['Client / Invoice', 'Amount', 'Issued date', 'Status']
const tableBody = [
    {
        name: 'Molly Sanders',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        total: '285',
        date: 'Sept 28, 2019',
        status: 'pending',
    },
    {
        name: 'Michael Roberts',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        total: '340',
        date: 'Sept 28, 2019',
        status: 'pending',
    },
    {
        name: 'Devin Childs',
        photo: 'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        total: '180',
        date: 'Sept 28, 2019',
        status: 'pending',
    },
    {
        name: 'Frederick Nicholas',
        photo: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
        total: '265',
        date: 'Sept 28, 2019',
        status: 'pending',
    },
    {
        name: 'Frederick Nicholas',
        photo: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
        total: '405',
        date: 'Sept 28, 2019',
        status: 'pending',
    },
]

const DashShortOrderTable = () => {

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl text-white font-semibold leading-tight">Last five order</h2>
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
                                    tableBody.map((item, i) =>
                                        <tr key={i} className='hover:bg-black'>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src={item.photo}
                                                            alt="pic"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className=" whitespace-no-wrap">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-sm">
                                                <p className=" whitespace-no-wrap text-green-400 font-bold">${item.total}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 text-white text-sm">
                                                <p className=" whitespace-no-wrap">{item.date}</p>
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
                <div>
                    <p className='underline hover:text-green-500 text-end'>
                        <Link to='/dashboard/history_of_payment'>
                            see all
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashShortOrderTable;