import { Suspense } from 'react'

import Image from 'next/image';

import starMap from '/public/banner.png';

export function Banner() {
  return(
    <div className='w-full border-2 border-red-500'>
      <Image 
        src={starMap}
        alt='Star Map'
        priority
      />
    </div>
  );
}
