'use client';

import Image from 'next/image';
import frame1 from '../../public/assets/images/card-1.png';
import frame2 from '../../public/assets/images/card-2.png';
import bgMemantikLong from '../../public/assets/images/memantik-bg.png';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MemantikDesktop() {
  const containerRef = useRef<HTMLDivElement>();

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: (containerRef.current.scrollLeft += e.deltaY * 2),
        behavior: 'smooth',
      });
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <motion.div
        className="scroll-container w-screen overflow-x-scroll relative"
        // ref={containerRef}
        onWheel={handleScroll}>
        <div className="h-screen bg-wall-texture bg-[#1E373E] bg-cover flex w-max ">
          <div className="h-screen w-max absolute left-0 right-0">
            <Image
              src={bgMemantikLong}
              alt="bg"
              className="h-screen w-max object-cover"
            />
          </div>
          {/* page1 */}
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
          {/* page2 */}
          <div className="w-screen h-screen  flex flex-col  justify-center">
            <div className="flex justify-center gap-[50px] ml-[100px] flex-col">
              <div className="-rotate-6 w-[30%]">
                <Image alt="frame" src={frame1} className="w-full" />
              </div>
              <div className="rotate-6 w-[30%]">
                <Image alt="frame" src={frame2} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
