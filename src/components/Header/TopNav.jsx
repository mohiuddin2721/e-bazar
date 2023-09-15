import React, { useContext, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../../Styles/TopNav.module.css';
import { currencies, languages, topNavItemsLink } from '../../Utils/ConstantData';
import { Link } from '@mui/material';
import { topNavSocialButtonStyle } from '../../Styles/ComponentStyle';
import { AuthContext } from '../../contexts/AuthProvider';
import { NavLink } from 'react-router-dom';
import useUserRole from '../../Hooks/useUserRole';

function TopNav() {
    const { user } = useContext(AuthContext)
    const [userRole] = useUserRole()
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const [currentCur, setCurrentCur] = useState(currencies[0]);

    return (
        <div className='py-2 bg-[#240838] text-[#bab8b8] text-[11px] font-semibold tracking-wide leading-6 top-nav'>
            <div className='max-w-[1200px] mx-auto px-[10px] flex justify-between items-center'>
                <div className='hidden sm:block text-[#1976d2]'>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</div>
                <div className='flex gap-[28px] items-center justify-between  w-full sm:w-auto'>
                    <div className='hidden lg:block'>
                        <ul className='flex tracking-wide leading-4 items-center gap-6'>
                            {
                                topNavItemsLink?.map((item, i) =>
                                    <NavLink
                                        key={i}
                                        to={item.to}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "text-green-500 font-bold underline"
                                                : "text-white"
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )
                            }
                            {
                                userRole != "admin" &&
                                <NavLink
                                    to='/dashboard/My_cart'
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "text-green-500 font-bold underline"
                                            : "text-white"
                                    }
                                >
                                    My cart
                                </NavLink>
                            }
                            {/* <NavLink
                                to={userRole === "admin" ? '/dashboard' : '/dashboard/userDash'}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "text-green-500 font-bold underline"
                                        : "text-white"
                                }
                            >
                                Dashboard
                            </NavLink> */}
                            <li>
                                {!user && <Link href='/signIn'>Login</Link>}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex gap-1 sm:gap-4 items-center'>
                            <li className={`px-[5px] w-[80px] flex gap-[5px] cursor-pointer items-center relative ${styles['lang-title']}`}>
                                <img src={currentLang.icon} alt="" />
                                <span>{currentLang.name}</span>
                                <MdKeyboardArrowDown />
                                <ul className={`absolute z-1 left-0 right-0 text-[#1976d2] cursor-pointer shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                    {languages.filter(item => item.id !== currentLang.id).map((item, i) => <li onClick={() => setCurrentLang(item)} className='flex gap-[5px] items-center cursor-pointer' key={i}>
                                        <img src={item.icon} alt="" />
                                        <span>{item.name}</span>
                                    </li>)}
                                </ul>
                            </li>
                            <li className={`px-[5px] w-[80px] flex gap-[5px] cursor-pointer items-center relative ${styles['lang-title']}`}>
                                <span>{currentCur.symbol}</span>
                                <span>{currentCur.name}</span>
                                <MdKeyboardArrowDown />
                                <ul className={`absolute z-1 left-0 right-0 cursor-pointer shadow-md duration-500 ${styles['lang-dropdown']}`}>
                                    {currencies.filter(item => item.id !== currentCur.id)
                                        .map((item, i) => <li onClick={() => {
                                            setCurrentCur(item);
                                        }}
                                            key={i} className='flex gap-[5px] items-center cursor-pointer' >
                                            <span>{item.symbol}</span>
                                            <span className='text-[#1976d2]'>{item.name}</span>
                                        </li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-start text-[13px]'>
                            <Link href='https://www.facebook.com/' target='_blank' className={topNavSocialButtonStyle}><FaFacebookF /></Link>
                            <Link href='https://twitter.com/' target='_blank' className={topNavSocialButtonStyle}><FaTwitter /></Link>
                            <Link href='https://www.instagram.com/' target='_blank' className={topNavSocialButtonStyle}><FaInstagram /></Link>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TopNav