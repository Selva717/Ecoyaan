import React from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

import './hero.css';

// import required modules
import { Pagination } from 'swiper/modules';
import c1 from '../img/hero/carousel-1.png'
import c2 from '../img/hero/carousel-2.png'
import c3 from '../img/hero/carousel-3.png'

export const Hero = () => {
  return (
    <div className='w-[100%] h-[80vh]'>
        <Swiper
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
            
        >
            <div className='relative'>
                <SwiperSlide>
                    <img src={c1} alt="" />
                        <div>
                            <div className='absolute top-10 left-10 z-10  w-[30%] mt-[70px] ml-[50px] flex flex-col gap-3'>
                                <div className=' font-bold text-4xl text-left max-[700px]:text-2xl '>Buy Less, Buy Better!</div>
                                <div className='text-left text-[13px] max-[700px]:text-[12px]'>Authentic source of truth for your sustainability needs.</div>
                                <button className=' text-white border bg-[#16A34A] py-2 px-4 rounded-[22px] w-[110px] text-center'>About Us</button>
                            </div>
                            
                        </div>
                </SwiperSlide>
                
            </div>

            <div className='relative'>
                <SwiperSlide>
                    <img src={c2} alt="" />
                        <div>
                            <div className='absolute top-10 left-10 z-10  w-[50%] mt-[70px] ml-[50px] flex flex-col gap-3'>
                                <div className=' font-bold text-4xl text-left max-[700px]:text-2xl '>Follow us on Instagram</div>
                                <div className='text-left text-[13px] max-[700px]:text-[12px]'>For climate news, lifestyle tips, & updates.</div>
                                <button className=' text-white border bg-[#16A34A] py-2 px-4 rounded-[22px] w-[140px] text-center'>Follow Us</button>
                            </div>
                            
                        </div>
                </SwiperSlide>
                
            </div>

            <div className='relative'>
                <SwiperSlide>
                    <img  src={c3} alt="" />
                        <div>
                            <div className='absolute top-10 left-10 z-10  w-[60%] mt-[70px] ml-[50px] flex flex-col gap-3'>
                                <div className=' font-bold text-2xl text-left max-[700px]:text-xl '>Are you a business that truly cares about sustainability? </div>
                                <div className='text-left text-[13px] max-[700px]:text-[12px]'>We would love to work with you.</div>
                                <button className=' text-white border bg-[#16A34A] py-2 px-4 rounded-[22px] w-[140px] text-center'>Get In Touch</button>
                            </div>
                            
                        </div>
                </SwiperSlide>
                
            </div>

            
            
        
      </Swiper>
    </div>
  )
}
