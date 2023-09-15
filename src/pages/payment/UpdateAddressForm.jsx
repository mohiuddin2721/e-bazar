import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Country } from 'country-state-city';
import PhoneInput from 'react-phone-input-2'
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css'
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { toastConfig } from '../../Utils/ConstantData';
import useAuth from '../../Hooks/useAuth';

const UpdateAddressForm = ({ closeAddress, setZip }) => {
    const { user } = useAuth();
    const [userAddress, isLoading] = useAddress();
    const [phoneNumber, setPhoneNumber] = useState('');
    const countryData = Country.getAllCountries();
    const [country, setCountry] = useState(countryData[230]);
    const [id, setId] = useState(userAddress?.data[0]?._id)
    const queryClient = useQueryClient()

    if (isLoading) {
        return <Loader />
    }

    useEffect(() => {
        setId(userAddress?.data[0]?._id)
    }, [])

    const handleChange = (value) => {
        setPhoneNumber(value)
    }

    const handleUpdateAddress = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            phone: phoneNumber,
            country: country?.name,
            address: e.target.address.value,
            state: e.target.state.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value,
            email: user?.email,
        }

        fetch(`https://test-server-ten-psi.vercel.app/api/v1/address/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result?.status)
                if (result?.status === 'success') {
                    queryClient.invalidateQueries({ queryKey: ['address'] })
                    toast.success('Your address successfully updated', toastConfig)
                    e.target.reset();
                    setZip(false);
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
        // console.log(data);
    }

    return (
        <div className="flex items-center justify-center rounded-sm">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 relative">
                        <span
                            onClick={closeAddress}
                            className='absolute top-4 right-4 flex cursor-pointer text-green-500 hover:text-green-300 underline'
                        >
                            Close <AiFillCloseCircle className='ml-1 text-xl' />
                        </span>
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Update your address</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <form onSubmit={handleUpdateAddress}>
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                        <div className="md:col-span-5">
                                            <label>Full Name *</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label>Phone *</label>
                                            <PhoneInput
                                                country={'ae'}
                                                value={phoneNumber}
                                                onChange={handleChange}
                                                // countryCodeEditable={false}
                                                inputProps={{
                                                    required: true
                                                }}
                                            />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label>Address / Street *</label>
                                            <input
                                                required
                                                type="text"
                                                name="address"
                                                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="country">Country * </label>
                                            <div className="h-10 bg-gray-50 w-full flex border border-gray-200 rounded items-center mt-1">
                                                <Select
                                                    options={countryData.map((country) => ({
                                                        value: country.isoCode,
                                                        label: country.name,
                                                    }))}
                                                    value={{
                                                        value: country.isoCode,
                                                        label: country.name,
                                                    }}
                                                    onChange={(selectedOption) =>
                                                        setCountry(
                                                            Country.getCountryByCode(selectedOption.value)
                                                        )
                                                    }
                                                    styles={{
                                                        container: (provided) => ({
                                                            ...provided,
                                                            width: '100%',
                                                        }),
                                                        control: (provided) => ({
                                                            ...provided,
                                                            minHeight: '2.5rem',
                                                        }),
                                                        menu: (provided) => ({
                                                            ...provided,
                                                            width: '100%',
                                                        }),
                                                    }}
                                                    isRequired
                                                />

                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="state">State / province *</label>
                                            <div className="h-10 bg-gray-50 w-full flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    required
                                                    type='text'
                                                    name="state"
                                                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label>City * </label>
                                            <div className='h-10 bg-gray-50 w-full flex border border-gray-200 rounded items-center mt-1'>
                                                <input
                                                    required
                                                    type="text"
                                                    name="city"
                                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label>Zipcode *</label>
                                            <input
                                                required
                                                type="text"
                                                name="zipCode"
                                                className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button
                                                    type='submit'
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    update current address
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAddressForm;