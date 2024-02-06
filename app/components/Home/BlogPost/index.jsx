'use client'
import React from 'react';
import Image from 'next/image';
import blogone from '@/public/Home/BlogSection/blogfirst.png';
import blogtwo from '@/public/Home/BlogSection/blogsecond.png';
import blogthree from '@/public/Home/BlogSection/blogthird.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../../Global/NextArrow';
import PrevArrow from '../../Global/Header/PrevArrow';
import FooterBefore from '../../Global/FooterBefore';

const BlogPost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className='blog-post max-h-[75vh] relative site-wrapper bg-[#fafafa]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-[#131313] font-bold text-[24px]'>
                        Blog Post
                    </h2>
                    <button className='rounded-[4px] px-[24px] bg-white py-[8px] text-[#131313]'>View All</button>
                </div>

                <div className='blog-inner mt-10'>
                    <Slider {...settings}>
                        <div className='blog-box rounded-[4px]'>
                            <Image src={blogone} alt='blogone' className='w-full rounded-[4px]' />
                            <div className='blog-content py-6 px-3 '>
                                <h4 className='font-bold'>Diabetic Care</h4>
                                <p className='mt-4 text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...</p>
                                <button className='rounded-[4px] mt-4 px-[24px] border border-[#0AA79F] py-[8px] text-[#0AA79F]'>Read More</button>
                            </div>
                        </div>
                        <div className='blog-box rounded-[4px]'>
                            <Image src={blogtwo} alt='blogone' className='w-full rounded-[4px]' />
                            <div className='blog-content py-6 px-3 '>
                                <h4 className='font-bold'>Diabetic Care</h4>
                                <p className='mt-4 text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...</p>
                                <button className='rounded-[4px] mt-4 px-[24px] border border-[#0AA79F] py-[8px] text-[#0AA79F]'>Read More</button>
                            </div>
                        </div>

                        <div className='blog-box rounded-[4px]'>
                            <Image src={blogthree} alt='blogone' className='w-full rounded-[4px]' />
                            <div className='blog-content py-6 px-3 '>
                                <h4 className='font-bold'>Diabetic Care</h4>
                                <p className='mt-4 text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took...</p>
                                <button className='rounded-[4px] mt-4 px-[24px] border border-[#0AA79F] py-[8px] text-[#0AA79F]'>Read More</button>
                            </div>
                        </div>
                   
                    </Slider>
                </div>
            </div>
            <FooterBefore/>
        </>
    );
};

export default BlogPost;
