import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/Header/logo.png'
import heart from '@/public/Header/heart.png'
import wallet from '@/public/Header/wallet.png'
import bag from '@/public/Header/bag.png'
import { CiSearch } from "react-icons/ci";
import appstore from '@/public/Header/Appstore.png'
import call from '@/public/Header/call.png'
import playstore from '@/public/Header/Playstore.png'

const Header = () => {
  return <>
    <div className='site-wrapper header-sec bg-primary py-[1rem]'>
      <div className='flex flex-row justify-between items-center'>
        <Link href='#'>
          <Image src={logo} alt='logo'/>
        </Link>
        <div className="flex items-center w-1/2 bg-white rounded border border-gray-300 px-2 py-1">
  <div className='px-[1rem]'>
    <p className='text-[#8E8E8E] font-bold text-[12px]'>Deliver to:</p>
    <select className="bg-white  border-gray-300 pr-2 font-bold text-[#131313]">
      <option value="abu_dhabi" className='font-bold text-[#131313]'>Abu Dhabi</option>
      <option value="dubai" className='font-bold text-[#131313]'>Dubai</option>
      {/* Add more options as needed */}
    </select>
  </div>
  <div className="relative flex-grow">
    {/* Search icon */}
    <div className='absolute top-[8px] left-[8px]'>
    <CiSearch />
    </div>
    <input type="text" placeholder="Search your items here" className="bg-white border-l border-gray-300 pl-8 py-1 pr-10 placeholder-opacity-50 w-full" />
  </div>
</div>

<div className="flex justify-between items-center bg-primary py-2 px-4 w-[33%] rounded-md">
  <div className="flex items-center">
    <div className="relative mr-4 px-3 border-r border-[#4EBFB9] flex items-center min-h-[4vh]">
        <div className='flex items-center'>
        <div className='relative'>
      <sup className="bg-white rounded-full px-1 py-2 border border-gray-200 top-[-15px] absolute right-0 border-opacity-50">0</sup>
      <Image src={heart} className="h-5 w-5 text-white mr-2" />
      </div>
      <span className="text-white text-[12px] font-bold">Wishlist</span>
    </div>
    </div>
    <div className="relative mr-4 px-3 pl-0 border-r border-[#4EBFB9] flex items-center min-h-[4vh] max-h-[4vh]">
        <div className='flex items-center'>
        <div className='relative'>
      <sup className="bg-white hidden rounded-full px-1 py-2 border border-gray-200 top-[-15px] absolute right-0 border-opacity-50">0</sup>
      <Image src={wallet} className="h-5 w-5 text-white mr-2" />
      </div>
      <div className='flex flex-col'>
      <span className="text-white text-[12px] font-bold">Rewards</span>
      <span className="text-white text-[12px] font-bold">0</span>
      </div>
    </div>
    </div>
    <div className="relative mr-4 px-3 pl-0 ">
        <div className='flex items-center'>
        <div className='relative'>
      <sup className="bg-white  rounded-full px-1 py-2 border border-gray-200 top-[-15px] absolute right-0 border-opacity-50">99</sup>
      <Image src={bag} className="h-5 w-5 text-white mr-2" />
      </div>
      <div className='flex flex-col'>
      <span className="text-white text-[12px] font-bold">My Cart</span>
      <span className="text-white text-[12px] font-bold">100.13 AED</span>
      </div>
    </div>
    </div>
  
 
  </div>
  <button className="bg-white w-[30%}] text-#0AA79F text-primary py-2 px-4 rounded-md">
    Login
  </button>
</div>


      </div>
    </div>
    <div className='below-sec site-wrapper bg-[#C4EAE8] flex justify-between items-center py-2 px-4'>
  <div className="flex">
    <div className="border-r border-[#8AD5D1] pr-4">
      <p className="text-[#06645F] font-bold">Free delivery and returns*</p>
    </div>
    <div className="border-r border-[#8AD5D1] px-4">
      <p className="text-[#06645F] font-bold">24x7 delivery service*</p>
    </div>
    <div className=" flex flex-row items-center border-[#8AD5D1] pl-4">
      <Image src={call} alt="call-image" width={20} height={20} className="h-3 w-3 inline mr-2" />
      <p className="text-[#06645F] font-bold">+971-365-698-13</p>
    </div>
  </div>
  <div className="flex items-center w-[25%]">
    <p className="mr-2 w-full font-bold">Download App</p>
    <Image src={appstore} width={20} height={20}  alt="app-image1" className=" w-full h-auto" />
    <Image src={playstore} width={20} height={20}  alt="app-image2" className="w-full h-auto ml-2" />
  </div>
</div>

    </>
}

export default Header