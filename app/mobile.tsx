'use client';
import Image from 'next/image';
import xImage from '../public/assets/images/xmob.png';
import logo from '../public/assets/images/logo.png';
import el1 from '../public/assets/images/el1.png';
import el2 from '../public/assets/images/el2.png';
import el3 from '../public/assets/images/el3.png';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useXAnimation } from '@/utils/useXAnimation';

export default function HomeMobile() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const scope = useXAnimation(isClicked, 'mobile');

  return (
    <main className="relative z-[2] h-screen overflow-hidden" ref={scope}>
      <div className="relative z-[3] w-full h-screen">
        <motion.div
          animate={{ top: '10%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] left-[5%] top-[-100%]  w-[30%] el1 ">
          <Image src={el1} alt="element" />
        </motion.div>
        <motion.div
          animate={{ left: '70%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] w-[30%] left-[200%] el2 top-[20%]">
          <Image src={el2} alt="element" />
        </motion.div>
        <motion.div
          animate={{ top: '65%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[3] top-[100%]  w-[30%] el3 left-[35%]">
          <Image src={el3} alt="element" />
        </motion.div>
      </div>
      <video
        className="absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] object-cover"
        autoPlay={true}
        loop={true}
        muted
        playsInline
        preload="auto">
        <source
          src={require('../public/assets/video/dummy.mp4')}
          type="video/mp4"
        />
      </video>
      <div className="absolute top-0 z-[1]  h-screen w-full">
        <div className="x">
          <Image
            src={xImage}
            alt="ximages"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] m-auto z-[5] text px-[10%]">
        <Image
          alt="images"
          src={logo}
          className="w-[200px] md:w-[300px] mb-[30px]"
        />
        <h1 className="text-white text-[20px] md:text-[24px] md:max-w-[80%] text-[700] mb-[30px] max-w-[550px] linux-libertine-slanted italic">
          {"'' "}Memantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara{' '}
          {"'' "}
        </h1>
        <motion.div
          onClick={() => setIsClicked(true)}
          className="bg-[#E83F1C] px-[30px] py-[16px] rounded-[8px] max-w-max text-white cursor-pointer creato-display text-[16px] md:text-[20px] font-[700] ">
          Pantikan Baskaramu
        </motion.div>
      </div>
    </main>
  );
}
