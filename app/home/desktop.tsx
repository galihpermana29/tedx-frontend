'use client';

import Image from 'next/image';
import frame1 from '../../public/assets/images/card-1.png';
import frame2 from '../../public/assets/images/card-2.png';
import bgMemantikLong from '../../public/assets/images/memantik-bg.png';
import flower from '../../public/assets/images/flower.png';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GIF from '@/videos/home-content.gif';

export default function MemantikDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const [horizontalScrollEnd, setHorizontalScrollEnd] =
    useState<boolean>(false);

  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [2, 3, 1.7, 1]
  );

  const opacity = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 0.25, 0.75, 1]
  );

  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ['0vw', '0vw', '0vw', '0vw']
  );
  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    ['25vh', '50vh', '75vh', '150vh']
  );

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const isEndReached =
        containerRef.current.scrollLeft ===
        containerRef.current.scrollWidth - containerRef.current.clientWidth;

      if (e.deltaY < 0 && window.scrollY === 0) {
        console.log('1');
        document.body.style.overflow = 'hidden';
        setHorizontalScrollEnd(false);
      }

      if (isEndReached && e.deltaY > 0) {
        console.log('2');
        document.body.style.overflow = 'auto';
        setHorizontalScrollEnd(true);
      }

      if (e.deltaY > 0 && !isEndReached) {
        console.log('3');
        document.body.style.overflow = 'hidden';
        setHorizontalScrollEnd(false);
      }
      containerRef.current.scrollTo({
        left: (containerRef.current.scrollLeft += e.deltaY * 2),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="relative" ref={extendedRef}>
        <motion.div
          className={`scroll-container w-screen overflow-x-scroll ${
            horizontalScrollEnd ? 'static' : 'relative'
          }`}
          ref={containerRef}
          onWheel={handleScroll}>
          <div className="h-screen bg-wall-texture bg-[#1E373E] bg-cover flex w-max">
            {!horizontalScrollEnd && (
              <motion.div
                animate={{ opacity: 1 }}
                className="h-screen w-max absolute left-0 right-0 opacity-5">
                <Image
                  src={bgMemantikLong}
                  alt="bg"
                  className="h-screen w-max object-cover"
                />
              </motion.div>
            )}
            <div className="w-screen h-screen  flex flex-col items-center justify-center relative z-[1]">
              <h1 className="text-[40px] text-cream linux-libertine-slanted text-center">
                “Mamantik Baskara: <br />
                Tersulut Tak Membara, Terbakar Tak Bersuara”
              </h1>
              <div className="flex justify-center items-center mt-[50px] gap-[40px]">
                <div className="-rotate-6">
                  <Image alt="frame" src={frame1} />
                </div>
                <div className="rotate-6">
                  <Image alt="frame" src={frame2} />
                </div>
              </div>
            </div>
            <div className="w-screen h-screen flex items-center  justify-between">
              <div className="flex justify-center gap-[50px] pl-[100px] flex-1 flex-col ">
                <div className="-rotate-6 w-[60%] ">
                  <Image alt="frame" src={frame1} className="w-full" />
                </div>
                <div className="rotate-6 w-[60%]">
                  <Image alt="frame" src={frame2} className="w-full" />
                </div>
              </div>
              <div className="flex-1 ">
                <div className="max-w-[90%]">
                  <Image src={flower} alt="flower" className="w-full" />
                </div>
              </div>
            </div>

            <div
              className={`w-screen h-screen flex items-center justify-center  ${
                horizontalScrollEnd
                  ? 'absolute z-[30]  top-[-50vh]'
                  : 'relative'
              }`}>
              <motion.div
                style={horizontalScrollEnd ? { scale, x, y, opacity } : {}}
                className="overflow-hidden w-[70%] aspect-[16/9]">
                <Image src={GIF} alt="gif" className="object-cover w-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="min-h-screen bg-wall-texture bg-[#1E373E] bg-cover flex w-full"></div>
      </div>
      <div className="min-h-screen bg-wall-texture bg-[#1E373E] bg-cover flex w-full  px-[70px]">
        <div className="px-5 text-justify flex justify-between items-center w-full">
          <h2 className="text-[128px] font-bold text-cream rosela mb-20 flex-1 max-w-min">
            Gelora Djiwa
          </h2>
          <p className="text-white max-w-[700px] text-[20px] creato-display flex-1">
            Reaksi fisiologis akan sukacita, keresahan, dan ragam lainnya muncul
            saat seseorang mampu memanifestasikan penerimaan diri. Dalam acara
            ini, masing-masing insan yang memiliki faktor luar biasa mampu
            menggerakkan &quot;Gelora Djiwa&quot; sebagai dorongan kuat untuk
            bertindak sebagai wujud proses untuk merayakan pengalaman kompleks
            yang secara alami dirasakan sebagai manusia hingga mampu mencapai
            penerimaan diri seutuhnya dan sisi eksternal secara apa adanya.
          </p>
        </div>
      </div>
    </>
  );
}
