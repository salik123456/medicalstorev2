import React from 'react'
import '@/app/styles/home.scss'
import IconSec from './components/Home/IconSec'
import HeroSec from './components/Home/HeroSec'
import CommonSec from './components/Home/SpecialOffers'
import BlogPost from './components/Home/BlogPost'

const HomeWrapper = () => {
  return (
    <div className='home-wrapper '>
<IconSec/>
<HeroSec/>
<CommonSec/>
<BlogPost/>
    </div>
  )
}

export default HomeWrapper