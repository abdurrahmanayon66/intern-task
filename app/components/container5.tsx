import React from 'react'
import CardCarousel from './cardCarousel'
import images from "../assets/images";
import Image from "next/image";

function Container5() {
  return (
    <div className='px-16 text-black'>
        <p className='text-3xl font-bold mb-10'>DISCOVER MORE</p>
        <div className='flex justify-between mb-16'>
            <ul className='flex justify-between w-[40%]'>
                <li className='bg-[#3f05d5] text-white  px-2 py-1 rounded-3xl font-medium'>All categories</li>
                <li className='bg-[#e9e9e9] px-2 py-1 rounded-3xl font-medium'>Art</li>
                <li className='bg-[#e9e9e9] px-2 py-1 rounded-3xl font-medium'>Celebrities</li>
                <li className='bg-[#e9e9e9] px-2 py-1 rounded-3xl font-medium'>Gaming</li>
                <li className='bg-[#e9e9e9] px-2 py-1 rounded-3xl font-medium'>Sport</li>
                <li className='bg-[#e9e9e9] px-2 py-1 rounded-3xl font-medium'>Music</li>
            </ul>
            <span className='flex bg-[#e6e9e8] text-[#3f05d5] font-medium px-2 py-1 rounded-3xl'> <Image src={images.filter} alt='card' className='size-[13px] mt-1.5 mr-1'></Image> <span>All Filters</span></span>
        </div>
        <CardCarousel/>
        <CardCarousel/>
    </div>
  )
}

export default Container5