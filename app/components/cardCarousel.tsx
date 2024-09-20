import React from 'react'
import images from "../assets/images";
import Image from "next/image";

function CardCarousel() {
  return (
    <div className='flex justify-between pb-20'>
        <div className='w-[23%] h-[370px] p-4 shadow-[#c2c0c0c6] shadow-xl rounded-xl'>
            <Image src={images.card1} alt='card'></Image>
            <div className='relative bottom-5 space-y-3'>
            <Image src={images.avatars} alt='card' className='px-3'></Image>
            <p className='text-xl px-3 font-medium'>Art stuff</p>
            <div className='flex justify-between text-sm px-3'><span>598 TK</span><span>1 of 09</span></div>
            <div className='flex justify-between'>
            <Image src={images.btn1} alt='card'></Image>
            <Image src={images.btn2} alt='card'></Image>
            </div>
            </div>
        </div>
        
        <div className='w-[23%] h-[370px] p-4 shadow-[#c2c0c0c6] shadow-xl rounded-xl'>
            <Image src={images.card2} alt='card'></Image>
            <div className='relative bottom-5 space-y-3'>
            <Image src={images.avatars} alt='card' className='px-3'></Image>
            <p className='text-xl px-3 font-medium'>ABCD</p>
            <div className='flex justify-between text-sm px-3'><span>777 TK</span><span>1 of 19</span></div>
            <div className='flex justify-between'>
            <Image src={images.btn1} alt='card'></Image>
            <Image src={images.btn3} alt='card'></Image>
            </div>
            </div>
        </div>

        <div className='w-[23%] h-[370px] p-4 shadow-[#c2c0c0c6] shadow-xl rounded-xl'>
            <Image src={images.card3} alt='card'></Image>
            <div className='relative bottom-5 space-y-3'>
            <Image src={images.avatars} alt='card' className='px-3'></Image>
            <p className='text-xl px-3 font-medium'>EFGH</p>
            <div className='flex justify-between text-sm px-3'><span>58 TK</span><span>1 of 64</span></div>
            <div className='flex justify-between'>
            <Image src={images.btn2} alt='card'></Image>
            <Image src={images.btn4} alt='card'></Image>
            </div>
            </div>
        </div>

        <div className='w-[23%] h-[370px] p-4 shadow-[#c2c0c0c6] shadow-xl rounded-xl'>
            <Image src={images.card4} alt='card'></Image>
            <div className='relative bottom-5 space-y-3'>
            <Image src={images.avatars} alt='card' className='px-3'></Image>
            <p className='text-xl px-3 font-medium'>XYZ</p>
            <div className='flex justify-between text-sm px-3'><span>0 TK</span><span>1 of 06</span></div>
            <div className='flex justify-between'>
            <Image src={images.btn2} alt='card'></Image>
            <Image src={images.btn4} alt='card'></Image>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardCarousel