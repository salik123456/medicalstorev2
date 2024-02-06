import Image from 'next/image';
import React from 'react';
import iconone from '@/public/Home/IconSec/iconone.png';
import icontwo from '@/public/Home/IconSec/icontwo.png';
import iconthree from '@/public/Home/IconSec/iconthree.png';
import iconfour from '@/public/Home/IconSec/iconfour.png';
import iconfive from '@/public/Home/IconSec/iconfive.png';
import iconsix from '@/public/Home/IconSec/iconsix.png';
import iconseven from '@/public/Home/IconSec/iconseven.png';
import iconeight from '@/public/Home/IconSec/iconeight.png';
import iconnine from '@/public/Home/IconSec/iconnine.png';
import iconten from '@/public/Home/IconSec/iconten.png';

const IconSec = () => {
  const icons = [
    { src: iconone, text: 'Latest Offers' },
    { src: icontwo, text: 'Symptoms' },
    { src: iconthree, text: 'Medical Essential' },
    { src: iconfour, text: 'Nutrition' },
    { src: iconfive, text: 'Personal Care' },
    { src: iconsix, text: 'Beauty Care' },
    { src: iconseven, text: 'Mom & Baby' },
    { src: iconeight, text: 'Home Care' },
    { src: iconnine, text: 'Lifestyles' },
    { src: iconten, text: 'Top Brands' }
  ];

  return (
    <div className='site-wrapper icons-sec'>
      <div className='flex flex-row justify-center'>
        {icons.map((icon, index) => (
          <div key={index} className='icon-box w-[9%] flex items-center flex-col mx-[1rem]'>
            <Image src={icon.src} alt={`icon-${index}`} />
            <p className='font-bold mt-2 text-[#131313] text-[12px] text-center'>{icon.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSec;
