'use client';
import Image from 'next/image';
import xImage from '../public/assets/images/x5.png';
import logo from '../public/assets/images/logo.png';
import el1 from '../public/assets/images/el1.png';
import el2 from '../public/assets/images/el2.png';
import el3 from '../public/assets/images/el3.png';

import { motion } from 'framer-motion';
import { useXAnimation } from '@/utils/useXAnimation';
import Button from '@/components/shared/Button';
import { SetStateAction, useEffect, useRef } from 'react';

interface HomeDesktopProps {
  isClicked: boolean;
  setIsClicked: React.Dispatch<SetStateAction<boolean>>;
}

export default function HomeDesktop({
  isClicked,
  setIsClicked,
}: HomeDesktopProps) {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const handlePlayVideo = () => {
    if (vidRef.current) {
      vidRef.current.play();
    }
  };
  const scope = useXAnimation(isClicked, 'desktop');

  const MotionButton = motion(Button);

  useEffect(() => {
    localStorage.setItem('isClicked', 'false');
  }, []);

  return (
    <main className="relative z-[2] h-screen overflow-hidden" ref={scope}>
      <div className="relative z-[4] w-[60%] h-screen ">
        <motion.div
          animate={{ top: '10%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[4] xl:top-[-50%] xl:left-[15%] w-[26%] el1 lg:left-[10%]">
          <Image src={el1} alt="element" priority />
        </motion.div>
        <motion.div
          animate={{ left: '60%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[4] xl:top-[20%] xl:left-[200%] w-[26%] el2 lg:top-[20%]">
          <Image src={el2} alt="element" priority />
        </motion.div>
        <motion.div
          animate={{ top: '60%' }}
          transition={{ duration: 1.5 }}
          className="absolute z-[4] xl:top-[100%] xl:left-[40%] w-[26%] el3 lg:left-[30%]">
          <Image src={el3} alt="element" priority />
        </motion.div>
      </div>
      <video
        ref={vidRef}
        className="absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] object-cover"
        loop={true}
        muted
        playsInline
        preload="auto">
        <source
          src={require('../public/assets/video/bumper_long.mp4')}
          type="video/mp4"
        />
      </video>
      <video
        className={`absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] object-cover ${
          isClicked ? 'z-[1]' : 'z-[3]'
        }`}
        autoPlay={true}
        loop={true}
        muted
        playsInline
        preload="auto">
        <source
          src={require('../public/assets/video/bumper_for_x.mp4')}
          type="video/mp4"
        />
      </video>

      <div className="absolute top-0 z-[3]  h-screen w-full">
        <div className="x">
          <Image
            src={xImage}
            alt="ximages"
            className="h-screen w-full object-cover"
            priority
          />
        </div>
      </div>
      <div className="absolute top-[50%] right-[50%] translate-y-[-50%] translate-x-[100%] m-auto z-[5] text">
        <Image alt="images" src={logo} className="w-[320px] mb-[30px]" />
        <h1 className="text-white text-[24px] text-[700] mb-[30px] max-w-[550px] linux-libertine-slanted italic">
          &quot;Memantik Baskara: Tersulut Tak Membara, Terbakar Tak
          Bersuara&quot;
        </h1>
        <MotionButton
          as="button"
          onClick={() => {
            handlePlayVideo();
            setIsClicked(true);
            localStorage.setItem('isClicked', 'true');
          }}
          type="primary">
          Pantikkan Baskaramu
        </MotionButton>
      </div>
    </main>
  );
}
