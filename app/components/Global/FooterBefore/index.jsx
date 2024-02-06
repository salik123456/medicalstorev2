import React from 'react'
import iconone from '@/public/Home/BlogSection/iconone.png'
import icontwo from '@/public/Home/BlogSection/icontwo.png'
import iconthree from '@/public/Home/BlogSection/iconthree.png'
import iconfour from '@/public/Home/BlogSection/iconfour.png'
import Image from 'next/image'
const FooterBefore = () => {
  return (
    <div className='site-wrapper py-[2rem] flex justify-between'>
        <div className='medical-box w-[23%] flex items-center'>
<Image src={iconone} alt='icon-one'/>
<div className='ml-2'>
<p className='text-[#0081CF] font-bold text-[14px]'>Free Shipping</p>
<p className='mt-1 text-[#8E8E8E] text-[12px] font-bold w-[75%]'>Across UAE for the orders greater
than 100 AED</p>
</div>
        </div>
        <div className='medical-box w-[23%]  flex items-center'>
<Image src={icontwo} alt='icon-two'/>
<div className='ml-2'>
<p className='text-[#0081CF] font-bold text-[14px]'>1000+ Brands</p>
<p className='mt-1 text-[#8E8E8E] text-[12px] font-bold w-[75%]'>New additions everyday</p>
</div>
        </div>

        <div className='medical-box w-[23%]  flex items-center'>
<Image src={iconthree} alt='icon-three'/>
<div className='ml-2'>
<p className='text-[#0081CF] font-bold text-[14px]'>Secure Payment</p>
<p className='mt-1 text-[#8E8E8E] text-[12px] font-bold w-[75%]'>100% payment protection</p>
</div>
        </div>

        <div className='medical-box w-[23%]  flex items-center'>
<Image src={iconfour} alt='icon-four'/>
<div className='ml-2'>
<p className='text-[#0081CF] font-bold text-[14px]'>Easy Returns</p>
<p className='mt-1 text-[#8E8E8E] text-[12px] font-bold w-[75%]'>Simple return policy</p>
</div>
        </div>
    </div>
  )
}

export default FooterBefore