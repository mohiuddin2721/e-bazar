import React, { useContext } from 'react';
import { Link, Navigate, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { Button } from '@mui/material';

const DisplayError = () => {
    const { logOut, user } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='w-full min-h-[100vh] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='text-white'>
                <p className='text-center font-bold text-2xl'>404</p>
                {/* <p className='text-center'>{error.statusText || error.message}</p> */}
                <p className='text-center'>Something went wrong!!!</p>
                <div>
                    {
                        user && <h4
                            variant="contained"
                            onClick={handleLogOut}
                            className='underline inline cursor-pointer'
                        >Sign out</h4>
                    }

                    <h4 className='underline inline ml-4'><Link to='/'>Back to Home</Link></h4>
                    {/* <Navigate to='/'>Back to Home</Navigate> */}
                </div>
            </div>
        </div>
    );
};

export default DisplayError;