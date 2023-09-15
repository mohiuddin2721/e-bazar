import React, { useState } from 'react';
import { glassStyle_1, glassStyle_2 } from '../../Styles/DashboardStyle';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import Headline from '../../components/Headline/Headline';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const ProductUpdate = () => {
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure()
    const [isHovered_1, setIsHovered_1] = useState(false);
    const [product, setProduct] = useState(location.state.selectedDataToUpdate)

    const handleUploadHover_1 = () => {
        setIsHovered_1(true);
    };
    const handleUploadMouseLeave_1 = () => {
        setIsHovered_1(false);
    };

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const id = product._id;

        const data = {
            name: e.target.name.value,
            quantity: +e.target.quantity.value,
            unit: e.target.unit.value,
            status: e.target.status.value,
            categories: e.target.categories.value,
            prePrice: +e.target.prePrice.value,
            price: +e.target.price.value,
            brand: e.target.brand.value,
            description: e.target.description.value,
        }
        // console.log(id)

        axiosSecure.patch(`/products/${id}`, data)
            .then(res => {
                console.log(res?.data)
                if (res?.data?.status === 'success') {
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'The product updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'error',
                        text: 'failed to update',
                    })
                }
            })
    };

    // console.log(product)
    return (
        <div>
            <div className='flex justify-center'>
                <Headline headline={"Products Update"} margin_Y={"4"} />
            </div>
            <div
                style={isHovered_1 ? glassStyle_1 : glassStyle_2}
                className="max-w-4xl p-6 mx-auto mt-4"
                onMouseEnter={handleUploadHover_1}
                onMouseLeave={handleUploadMouseLeave_1}>
                <form onSubmit={handleProductSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white">Product name <span className='text-red-500 text-2xl'>*</span></label>
                            <input
                                required
                                name='name'
                                type="text"
                                value={product.name}
                                onChange={(e) => setProduct({ ...product, name: e.target.value })}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Quantity <span className='text-red-500 text-2xl'>*</span></label>
                            <input
                                required
                                name='quantity'
                                min={1}
                                type="number"
                                placeholder={product?.quantity}
                                value={product.quantity}
                                onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Select unit <span className='text-red-500 text-2xl'>*</span></label>
                            <select
                                required
                                name='unit'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="select one">select one</option>
                                <option value="kg">kg</option>
                                <option value="litter">litter</option>
                                <option value="pcs">pcs</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product status <span className='text-red-500 text-2xl'>*</span></label>
                            <select
                                required
                                name='status'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="in-stock">in-stock</option>
                                <option value="out-of-stock">out-of-stock</option>
                                <option value="discontinued">discontinued</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Product categories <span className='text-red-500 text-2xl'>*</span></label>
                            <select
                                required
                                name='categories'
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            >
                                <option value="select one">select one</option>
                                <option value="Panjabi">Panjabi</option>
                                <option value="Shirt">Shirt</option>
                                <option value="Pant">Pant</option>
                                <option value="Sarees">Sarees</option>
                                <option value="Kameez">Kameez</option>
                                <option value="Abaya">Abaya</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-white ">Price $ <span className='text-red-500 text-2xl'>*</span></label>
                            <input
                                required
                                type="number"
                                name='price'
                                value={product.price}
                                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white">Previous price $</label>
                            <input
                                type="number"
                                name='prePrice'
                                value={product.prePrice}
                                onChange={(e) => setProduct({ ...product, prePrice: e.target.value })}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Brand name <span className='text-red-500 text-2xl'>*</span></label>
                            <input
                                required
                                type="text"
                                name='brand'
                                value={product.brand}
                                onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            />
                        </div>
                        <div>
                            <label className="text-white ">Description <span className='text-red-500 text-2xl'>*</span></label>
                            <textarea
                                required
                                name='description'
                                type="textarea"
                                value={product.description}
                                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                                className="w-full min-h-[100px] h-auto px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type='submit' className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductUpdate;