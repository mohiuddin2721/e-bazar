import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AuthContext } from '../contexts/AuthProvider';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { toastConfig } from '../Utils/ConstantData';


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disableLoginButton, setDisableLoginButton] = useState(true)
    const captchaRef = useRef(null)
    const { signIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [googleCaptchaValue, setGoogleCaptchaValue] = useState(false)
    const [getCaptcha, setGetCaptcha] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    useEffect(() => {
        if (googleCaptchaValue && getCaptcha) {
            setDisableLoginButton(false)
        } else {
            setDisableLoginButton(true)
        }
    }, [googleCaptchaValue, getCaptcha])

    const handleLogin = (event) => {
        event.preventDefault();
        setLoginError('')
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error.message)
            })
    };

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value)) {
            setGetCaptcha(true)
            toast.success("successfully validated", toastConfig)
        } else {
            setGetCaptcha(false)
            toast.error("not validate, try again", toastConfig)
        }
    }

    const handleGoogleImageReCaptcha = (value) => {
        // console.log("Captcha value:", value);
        if (value) {
            setGoogleCaptchaValue(true)
        } else {
            setGoogleCaptchaValue(false)
        }
    }

    return (
        <div>
            <div className="login-container">
                <div className="login-title">Chengra Bazar</div>
                <form
                    className="login-form"
                    onSubmit={handleLogin}
                >
                    <label>Your Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                    />
                    {/* {errors?.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>} */}
                    <label>
                        Your Password
                        <span onClick={handleClickShowPassword}>
                            {
                                showPassword
                                    ?
                                    <RemoveRedEyeIcon className='text-[#70a2d4] ml-1' />
                                    :
                                    <VisibilityOffIcon className='text-[#70a2d4] ml-1' />
                            }
                        </span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder="password"
                    />
                    <label>
                        <LoadCanvasTemplate />
                    </label>
                    <input
                        type='text'
                        name='captcha'
                        placeholder="type the captcha above"
                        ref={captchaRef}
                    />
                    {/* {errors?.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>} */}
                    <div className='w-full'>
                        <p
                            onClick={handleValidateCaptcha}
                            className={`text-sm font-bold underline text-end cursor-pointer ${getCaptcha ? 'text-green-500' : 'text-[#140267]'}`}
                        >
                            validate captcha
                        </p>
                    </div>
                    <div>
                        <ReCAPTCHA
                            sitekey="6LfSlsYnAAAAAJACTyO02edCMFsykoMVq35talOU"
                            onChange={handleGoogleImageReCaptcha}
                        />
                    </div>
                    <div>
                        {loginError && <p className='text-red-500 text-xs'>{loginError}</p>}
                    </div>
                    <button
                        type='submit'
                        disabled={disableLoginButton}
                        className='bg-[#140267] hover:bg-[#140267b4] disabled:bg-[rgb(136,150,239)]'
                    >
                        Login
                    </button>
                </form>
                <p className='mt-2'>
                    <small>Don't have an account?</small>
                    <Link to="/signUp"
                        className='text-[#140267] ml-2 text-sm font-bold'
                    >
                        Sign Up
                    </Link>
                </p>

                <div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignIn;