import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';
import Headline from '../../components/Headline/Headline';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { FaImage } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { toastConfig } from '../../Utils/ConstantData';

const Administration = () => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const navigate = useNavigate()
    // console.log(filteredUsers)

    const getProducts = async () => {
        try {
            const response = await axios.get("https://test-server-ten-psi.vercel.app/api/v1/products");
            setUsers(response.data.data.products);
            setFilteredUsers(response.data.data.products);
            // console.log(response.data.data)
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteProduct = (id) => {
        fetch(`https://test-server-ten-psi.vercel.app/api/v1/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data.acknowledged);
                if (data?.data?.acknowledged) {
                    getProducts()
                    toast.success('Product deleted successfully', toastConfig)
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }

    const updateProduct = (data) => {
        navigate("/dashboard/Product_Update", { state: { selectedDataToUpdate: data } })
        // console.log(data)
    }
    const showImages = (data) => {
        const imageElements = data?.map(link => `<img src=${link} alt="Image"  style="max-width: 200px; max-height: 200px; margin-right: 10px" /><br>`);

        Swal.fire({
            html:
                `<div style="display: flex">${imageElements}</div>`,
            showCloseButton: false,
            focusConfirm: false,
        })
        // console.log(data)
    }

    const columns = [
        {
            name: "Name & Category & Brand",
            selector: row => (
                <div className='my-2'>
                    <p>{row?.name}</p>
                    <p>Category: {row?.categories}</p>
                    <p>Brand: {row?.brand}</p>
                </div>
            ),
            width: '230px',
        },
        {
            name: "Price $",
            selector: row => row?.price,
            sortable: true,
            center: true,
        },
        {
            name: "Quantity",
            selector: row => row?.quantity,
            sortable: true,
            center: true,
        },
        {
            name: "Images & Description",
            selector: row => (
                <div>
                    <p
                        onClick={() => showImages(row?.imageURL[0])}
                        className='cursor-pointer'>
                        <FaImage className='text-xl text-blue-500' />
                    </p>
                </div>
            ),
            sortable: true,
            center: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className='flex h-full items-center'>
                    <button
                        className="block mr-1 text-white p-1 rounded-md bg-green-500 hover:bg-green-300"
                        onClick={() => updateProduct(row)}
                    >
                        Update
                    </button>
                    <button
                        className='mr-1'
                        onClick={() => handleDeleteProduct(row._id)}
                    >
                        <AiFillDelete className='text-red-500 hover:text-red-300 text-2xl' />
                    </button>

                </div>
            ),
            // center: true,
            // width: '200px',
            center: true,
        },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
            },
        },
        headCells: {
            style: {
                color: 'white',
                backgroundColor: '#6DAAD7',
                fontWeight: "bold",
            },
        },
    };

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        const result = users?.filter((user) => {
            return user.name.toLowerCase().match(search.toLowerCase())
        });
        setFilteredUsers(result)
    }, [search])

    return (
        <div className='text-white'>
            <div className='flex justify-center'>
                <Headline headline={"Products management"} margin_Y={"4"} />
            </div>
            <div className='w-[98%] md:w-[70%] overflow-hidden mx-auto mt-4 rounded'>
                <DataTable
                    title={`Total products ${filteredUsers.length}`}
                    columns={columns}
                    data={filteredUsers}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='70vh'
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input
                            type='text'
                            placeholder='search by name'
                            className='w-[30%] form-control text-black border rounded-md'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                    customStyles={customStyles}
                    subHeaderAlign='left'
                    striped="true"
                    dense="false"
                    responsive="true"
                />
            </div>
        </div>
    )
}

export default Administration;