import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import { Checkbox, FormControlLabel } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [isCheck, setIsCheck] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState(null);
    const navigate = useNavigate()

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleCheckbox = (e) => {
        const isChecked = e.target.checked;
        setIsCheck(isChecked)
    }

    const handleSignUp = (data) => {
        setSignUpError('')
        // console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log("loggedUser",loggedUser);
                updateUserProfile(data.full_name, "https://drive.google.com/file/d/11dmGbBab_Wvd5BgaHHEA59yVVzgutkhX/view?usp=sharing")
                    .then(() => {
                        const userData = { name: data.full_name, email: data.email }
                        fetch("https://test-server-ten-psi.vercel.app/api/v1/users", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                // console.log(data)
                                if (data?.status === "success") {
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset();
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => setSignUpError(error))
            })
    };

    return (
        <div>
            <div className="login-container">
                <div className="login-title">Chengra Bazar</div>
                <form
                    className="login-form"
                    onSubmit={handleSubmit(handleSignUp)}
                >
                    <label>
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        {...register("full_name", { required: 'Your name is required' })}
                    />
                    {errors?.full_name && <p className='text-red-500'>{errors.full_name?.message}</p>}
                    <label>Your Email</label>
                    <input
                        type="email"
                        placeholder="Your email"
                        {...register("email", { required: 'valid email is required' })}
                    />
                    {errors?.email && <p className='text-red-500'>{errors.email?.message}</p>}

                    <label>
                        Your Password
                        <span onClick={handleClickShowPassword}>
                            {
                                showPassword
                                    ?
                                    <RemoveRedEyeIcon className='text-[#70a2d4] ml-1 cursor-pointer' />
                                    :
                                    <VisibilityOffIcon className='text-[#70a2d4] ml-1 cursor-pointer' />
                            }
                        </span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register("password", {
                            required: 'valid password is required',
                            minLength: { value: 6, message: "password must be 6 characters or longer" }
                        })}
                    />
                    {errors?.password && <p className='text-red-500'>{errors.password?.message}</p>}

                    <FormControlLabel
                        required
                        control=
                        {<Checkbox
                            onChange={(e) => handleCheckbox(e)} />
                        }
                        label="I agree with your conditions"
                    />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    <button
                        type='submit'
                        disabled={!isCheck ? true : false}
                        className={`${isCheck ? 'bg-[#140267]' : 'bg-[#140267b4]'}`}
                        variant="contained"
                    >
                        SIGN UP
                    </button>
                </form>
                <p className='mt-2'>
                    <small>Already have an account?</small>
                    <Link
                        to="/signIn"
                        className='text-[#140267] ml-2 text-sm font-bold'
                    >
                        Please Login
                    </Link>
                </p>
                <div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;