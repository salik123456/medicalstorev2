import React from 'react'
import hero from '@/public/Home/HeroSec/hero.png'
import Image from 'next/image'

const HeroSec = () => {
  return (
    <div class='w-full '>
<Image  src={hero} alt='hero' className='w-full'/>
    </div>
  )
}

export default HeroSec