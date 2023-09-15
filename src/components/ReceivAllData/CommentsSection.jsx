import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { AiOutlineComment } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Avatar, Rating } from '@mui/material';
import { toastConfig } from '../../Utils/ConstantData';
import { toast } from 'react-toastify';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const CommentsSection = ({ productName, id }) => {
    const { user } = useAuth()
    const queryClient = useQueryClient();
    const [ratingValue, setRatingValue] = useState(5)
    const [textAreaValue, setTextAreaValue] = useState("")
    const [openCommentReview, setOpenCommentReview] = useState(false);
    const navigate = useNavigate();
    const { isLoading: commentsLoading, data: commentsFromDB, refetch } = useQuery({
        queryKey: ['comments', id],
        queryFn: async () => {
            const res = await axios.get(`https://test-server-ten-psi.vercel.app/api/v1/comments_hub?productId=${id}`)
            return res.data.data;
        }
    })

    // console.log(isAdmin)
    const submitComment = () => {
        if (textAreaValue) {
            const commentData = {
                productId: id,
                name: user?.displayName,
                rate: ratingValue,
                review: textAreaValue,
                userPhoto: user?.photoURL
            }
            // console.log(commentData)
            const url = "https://test-server-ten-psi.vercel.app/api/v1/comments_hub";
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentData)
            })
                .then(res => res.json())
                .then(posted => {
                    // console.log("posted", posted)
                    if (posted.status === 'fail') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Product is not inserted. please try again',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product data Successfully updated',
                        })
                    }
                    setTextAreaValue("")
                    setOpenCommentReview(false)
                    toast.success("Thanks for your review", toastConfig)
                    queryClient.invalidateQueries('comments')
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Type something in comment box within 250 characters',
            })
        }
    }
    const keepCommentReview = () => {
        if (user) {
            setOpenCommentReview(true);
        } else {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Must need to login',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<Link to='/signIn'>Login</Link>`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showCancelButton: true,
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn');
                }
            });
        }
    }

    return (
        <div className='h-auto'>
            <section>
                <div>
                    <p className='text-xl font-bold'>Ratings & Reviews of {productName}</p>
                    <p
                        onClick={keepCommentReview}
                        className={`underline cursor-pointer ${openCommentReview ? 'hidden' : 'inline-block'}`}
                    >
                        Keep your comment and give valuable review <AiOutlineComment className='text-2xl text-green-500 inline ml-2' />
                    </p>
                </div>
                {
                    openCommentReview &&
                    <div className='relative my-4 bg-[#f7dbf8] rounded-sm p-4'>
                        <span
                            onClick={() => setOpenCommentReview(false)}
                            className='text-green-500 font-bold absolute top-2 right-5 cursor-pointer'
                        >
                            X
                        </span>
                        <div className='flex h-full items-center relative'>
                            <Avatar
                                alt={user?.displayName}
                                src={user?.photoURL}
                                sx={{ width: 56, height: 56 }}
                            />
                            <p className='ml-2 font-bold text-green-500'>{user?.displayName}</p>

                        </div>
                        <div className='mt-2'>
                            <Rating
                                value={ratingValue}
                                onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }}
                            />
                            <div>
                                <textarea
                                    onChange={(e) => setTextAreaValue(e.target.value)}
                                    placeholder='comment here....'
                                    className="resize rounded-md w-full md:w-[80%] lg:w-[70%] h-[100px]"></textarea>
                            </div>
                            <div className='mt-3'>
                                <button
                                    onClick={submitComment}
                                    className='bg-[#171150] text-white py-1 px-2 rounded-md mx-4'
                                >
                                    comment
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </section>
            <section>
                {
                    commentsLoading ?
                        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                        </div>
                                        <div className="h-2 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </section>
            <section className='bg-[#eaf8e9] p-4 rounded-md mt-6'>
                {
                    commentsFromDB?.length === 0 && <p>No comments yet. you can be first commenter.</p>
                }
                {
                    commentsFromDB?.map(item =>
                        <div key={item._id} className='relative border-b-2 border-green-600 p-4'>
                            <Rating value={item?.rate} size="small" readOnly />
                            <div className='flex h-full items-center relative'>
                                <Avatar
                                    src={item?.userPhoto}
                                    sx={{ width: 40, height: 40 }}
                                />
                                <p className='ml-2 font-bold text-green-500 text-sm'>{item?.name}</p>
                            </div>
                            <div>
                                <p>{item?.review}</p>
                            </div>
                            <span
                                onClick={() => deleteCommentHandler(_id)}
                                className='absolute top-0 right-4'
                            >
                                ....
                            </span>
                        </div>
                    )
                }
            </section>

        </div>
    );
};

export default CommentsSection;