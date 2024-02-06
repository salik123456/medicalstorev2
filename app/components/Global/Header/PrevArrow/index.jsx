import Image from 'next/image';
import React from 'react'

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <Image src="/Home/CommonSec/prev.png" alt="Previous" width={100} height={100}/>
      </div>
    );
  };

export default PrevArrow
