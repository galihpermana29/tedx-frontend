'use client'
import Image from 'next/image';
import xImage from '../public/assets/images/x5.png'
import logo from '../public/assets/images/logo.png'

import {motion, useAnimate} from 'framer-motion'
import { useEffect, useState } from 'react';


function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [".text", { opacity: isOpen ? 0 : 1},{ ease: 'easeOut', duration: isOpen ? 0.9 : 0 }],
      [".x", { transform: isOpen ? "translateX(400%) scale(2000%) " : "scale(100%) translateX(0px)", opacity: isOpen ? 1 : 1},{ ease: 'circOut', duration: isOpen ? 3.5 : 0 }]
    ] );

    // animate();
  }, [isOpen]);

  return scope;
}


export default function Home() {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const scope = useMenuAnimation(isClicked);

  return (
    <main className='relative z-[2] h-screen overflow-y-hidden' ref={scope}>
      <video
        className="w-full"
        autoPlay={true}
        loop={true}
        muted
        playsInline
        preload="auto">
        <source src={(require('../public/assets/video/dummy.mp4'))} type="video/mp4" />
      </video>
      <div  className='absolute top-0 z-[1]  h-screen w-full'>
        <div className='x'>
          <Image src={xImage} alt='ximages' className='h-screen w-full'/>
        </div>
      </div>
      <div className='absolute top-[50%] right-[45%] translate-y-[-50%] translate-x-[100%] m-auto z-[2] text'>
          <Image alt='images' src={logo} className='w-[320px] mb-[30px]'/>
          <h1 className='text-white text-[24px] text-[700] mb-[30px] max-w-[550px]'>Memantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara</h1>
          <motion.div onClick={() => setIsClicked(true)} whileHover={{ scale: 1.2 }}
        className='bg-[#E83F1C] px-[30px] py-[16px] rounded-[8px] max-w-max text-white cursor-pointer'>Pantikan Baskaramu</motion.div>
        </div>
    </main>
  );
}
