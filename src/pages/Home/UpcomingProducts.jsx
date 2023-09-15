import React from 'react';
import blueNewBannerPic from '../../assets/blue_new_banner-1.png'
import blue_new_1 from '../../assets/blue_new-1.jpg'
import blue_new_2 from '../../assets/blue_new-2.jpg'
import blue_new_3 from '../../assets/blue_new-3.jpg'
import blue_new_4 from '../../assets/blue_new-4.jpg'
import blue_new_5 from '../../assets/blue_new-5.jpg'
import blue_new_6 from '../../assets/blue_new-6.jpg'
import blue_new_7 from '../../assets/blue_new-7.jpg'
import blue_new_8 from '../../assets/blue_new-8.jpg'
import blue_new_9 from '../../assets/blue_new-9.jpg'
import blue_new_10 from '../../assets/blue_new-10.jpg'
import blue_new_11 from '../../assets/blue_new-11.jpg'
import blue_new_12 from '../../assets/blue_new-12.jpg'

const upcomingBannerPic = [
    { id: 1, name: "calculator", pic: blue_new_1 },
    { id: 2, name: "mobile", pic: blue_new_2 },
    { id: 3, name: "TV", pic: blue_new_3 },
    { id: 4, name: "smart TV", pic: blue_new_4 },
    { id: 5, name: "head phone", pic: blue_new_5 },
    { id: 6, name: "keyboard", pic: blue_new_6 },
    { id: 7, name: "camera", pic: blue_new_7 },
    { id: 8, name: "watch", pic: blue_new_8 },
    { id: 9, name: "printer", pic: blue_new_9 },
    { id: 10, name: "games", pic: blue_new_10 },
    { id: 11, name: "notepad", pic: blue_new_11 },
    { id: 12, name: "piano", pic: blue_new_12 },
]

const UpcomingProducts = () => {

    return (
        <div className='min-h-[100vh]'>
            <div className='w-full md:w-[90%] mx-auto mt-8'>
                <img className='w-full' src={blueNewBannerPic} alt="" />
            </div>
            <div>
                <p className='text-xl md:text-2xl font-bold text-center my-2'>Coming soon</p>
            </div>
            <div className='w-full md:w-[90%] mx-auto flex flex-wrap mt-12 mb-8'>
                {
                    upcomingBannerPic.map(item =>
                        <div key={item.id} className='basis-2/6 md:basis-1/6 my-1'>
                            <div>
                                <img src={item.pic} alt="" />
                            </div>
                            <div>
                                <p className='text-center font-bold capitalize'>{item.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UpcomingProducts;