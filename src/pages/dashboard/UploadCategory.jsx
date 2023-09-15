import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UploadCategory = () => {
    const [selectedCategoryImage, setSelectedCategoryImage] = useState(null);
    const imgStorKey = import.meta.env.VITE_REACT_IMGBB_SECRET_KEY;
    // console.log(selectedCategoryImage)

    function handleFileChange(event) {
        setSelectedCategoryImage(event.target.files[0])
    }
    const handleCategory = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        if (!selectedCategoryImage) {
            return Swal.fire({
                icon: 'error',
                title: 'Image',
                text: 'Must upload a photos',
            })
        }

        formData.append('image', selectedCategoryImage)

        const url = `https://api.imgbb.com/1/upload?key=${imgStorKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                if (result.success) {
                    const imgLink = result.data.url;
                    const data = {
                        name: event.target.name.value,
                        photo: imgLink,
                    }

                    fetch("https://test-server-ten-psi.vercel.app/api/v1/category", {
                        method: "POST",
                        headers: {
                            'content-type' : 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log("data", data)
                            if (data.status === 'fail') {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    text: 'Category is not inserted. please try again',
                                })
                            } else {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Successful',
                                    text: 'Category data Successfully updated',
                                })
                                setSelectedCategoryImage(null)
                                event.target.reset();
                            }
                        })
                }
            })

    };

    // if i want to store image in local server
    // const handleCategory = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData();

    //     if (!selectedCategoryImage) {
    //         // return window.alert("Must upload maximum 4 photos")
    //         return Swal.fire({
    //             icon: 'error',
    //             title: 'Image',
    //             text: 'Must upload a photos',
    //         })
    //     }

    // const data = {
    //     name: event.target.name.value,
    // }
    // Object.keys(data).forEach(prop => {
    //     formData.append(`${prop}`, data[prop])
    // })

    //     formData.append('image', selectedCategoryImage)

    // fetch("https://test-server-ten-psi.vercel.app/api/v1/category", {
    //     method: "POST",
    //     body: formData
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data)
    //         if (data.status === 'fail') {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Error',
    //                 text: 'Category is not inserted. please try again',
    //             })
    //         } else {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Successful',
    //                 text: 'Category data Successfully updated',
    //             })
    //             setSelectedCategoryImage(null)
    //             event.target.reset();
    //         }
    //     })
    // };


    function deleteCategoryImage() {
        setSelectedCategoryImage(null)
    };

    return (
        <div>
            <h2 className="text-lg font-semibold text-white capitalize">Add category</h2>
            <form
                onSubmit={handleCategory}
            >
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-white ">Product category <span className='text-red-500 text-2xl'>*</span></label>
                        <input
                            required
                            name='name'
                            type="text"
                            placeholder="category name"
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"

                        />
                    </div>
                    <div>
                        <label className="text-white ">Upload just 1 photo <span className='text-red-500 text-2xl'>*</span></label>
                        <input
                            required
                            name='photo'
                            type="file"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    </div>
                    <div>
                        {
                            selectedCategoryImage ?
                                <div className='h-auto relative'>
                                    <span
                                        className='absolute left-1 top-0 text-2xl text-red-500 cursor-pointer'
                                        onClick={deleteCategoryImage}
                                    >
                                        &times;
                                    </span>
                                    <img
                                        className='w-[150px] max-h-[150px]'
                                        src={URL.createObjectURL(selectedCategoryImage)}
                                        alt="Category Image" />
                                </div>
                                :
                                " "
                        }
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type='submit'
                        className="px-6 py-2 text-white rounded-md transition-colors duration-200 transform bg-pink-500 hover:bg-pink-700"
                    >
                        Add category
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UploadCategory;