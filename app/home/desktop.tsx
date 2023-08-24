'use client';

import Image from 'next/image';
import frame1 from '../../public/assets/images/card-1.png';
import frame2 from '../../public/assets/images/card-2.png';
import bgMemantikLong from '../../public/assets/images/memantik-bg.png';
import flower from '../../public/assets/images/flower.png';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GIF from '@/videos/home-content.gif';

import Pattern2 from '@/images/pattern_gelora.png';
import awanKanan from '@/images/awan-kanan.png';
import awanKiri from '@/images/awan-kiri.png';
import objekKanan from '@/images/objek-kanan.png';
import objekKiri from '@/images/objek-kiri.png';
import Button from '@/components/shared/Button';
import { textBlurAnimationProps } from '@/utils/data/animation';

import Photo from '@/images/home-photo-2.png';
import Splash from '@/images/home-splash.png';
import X from '@/images/home-x-2.png';
import UnknownSpeaker from '@/images/unknown-speaker.png';

export default function MemantikDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const scrollCloudRef = useRef<HTMLDivElement | null>(null);
  const [horizontalScrollEnd, setHorizontalScrollEnd] =
    useState<boolean>(false);

  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  });

  const { scrollYProgress } = useScroll({
    target: scrollCloudRef,
    offset: ['end end', 'start start'],
  });

  const scale = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.75, 1],
    [1, 1, 1.3, 1]
  );

  const xRight = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.65, 1],
    ['0vw', '0vw', '0vw', '10vw', '30vw']
  );

  const xLeft = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.65, 1],
    ['0vw', '0vw', '0vw', '-10vw', '-30vw']
  );

  const xRightObj = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.75, 1],
    ['5vw', '5vw', '10vw', '20vw', '40vw']
  );

  const xLeftObj = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.75, 1],
    ['-5vw', '-5vw', '-10vw', '-20vw', '-40vw']
  );

  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.5, 0.6, 0.7, 1],
    ['0', '0', '0', '50vh', '70vh', '100vh']
  );

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const isEndReached =
        containerRef.current.scrollLeft ===
        containerRef.current.scrollWidth - containerRef.current.clientWidth;

      if (e.deltaY < 0 && window.scrollY !== 0) return;
      if (e.deltaY < 0 && window.scrollY === 0) {
        document.body.style.overflow = 'hidden';
        setHorizontalScrollEnd(false);
      }

      if (isEndReached && e.deltaY > 0) {
        document.body.style.overflowY = 'auto';
        setHorizontalScrollEnd(true);
      }

      if (e.deltaY > 0 && !isEndReached) {
        document.body.style.overflow = 'hidden';
        setHorizontalScrollEnd(false);
      }
      containerRef.current.scrollTo({
        left: (containerRef.current.scrollLeft += e.deltaY * 2),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
    // document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <div className="relative bg-wall-texture" ref={extendedRef}>
        <motion.div
          className={`w-screen  ${
            horizontalScrollEnd
              ? 'static overflow-x-hidden'
              : 'relative overflow-x-hidden'
          }`}
          ref={containerRef}
          onWheel={handleScroll}>
          <div className="h-screen bg-wall-texture bg-[#1E373E] bg-contain flex w-max">
            {!horizontalScrollEnd && (
              <motion.div
                animate={{ opacity: 1 }}
                className="h-screen w-max absolute left-0 right-0 opacity-5">
                <Image
                  src={bgMemantikLong}
                  alt="bg"
                  className="h-screen w-max object-cover"
                  priority
                />
              </motion.div>
            )}
            <div className="w-screen h-screen  flex flex-col items-center justify-center relative z-[1]">
              <h1 className="text-[40px] text-cream rosela font-bold text-center">
                “Memantik Baskara: <br />
                Tersulut Tak Membara, Terbakar Tak Bersuara”
              </h1>
              <div className="flex justify-center items-center mt-[50px] gap-[40px]">
                <div className="-rotate-6">
                  <Image alt="frame" src={frame1} priority />
                </div>
                <div className="rotate-6">
                  <Image alt="frame" src={frame2} priority />
                </div>
              </div>
            </div>
            <div className="w-screen h-screen flex items-center  justify-between">
              <div className="flex justify-center gap-[50px] pl-[100px] flex-1 flex-col ">
                <div className="-rotate-6 w-[60%] ">
                  <Image alt="frame" src={frame1} className="w-full" priority />
                </div>
                <div className="rotate-6 w-[60%]">
                  <Image alt="frame" src={frame2} className="w-full" priority />
                </div>
              </div>
              <div className="flex-1 ">
                <div className="max-w-[90%]">
                  <Image
                    src={flower}
                    alt="flower"
                    className="w-full"
                    priority
                  />
                </div>
              </div>
            </div>
            {horizontalScrollEnd && (
              <div className="w-screen h-screen flex items-center  justify-between"></div>
            )}

            <motion.div
              className={`w-screen h-screen flex items-center justify-center  ${
                horizontalScrollEnd ? 'absolute z-[30]' : 'relative'
              }`}>
              <motion.div
                style={horizontalScrollEnd ? { scale, y } : {}}
                className="overflow-hidden w-[60%] aspect-[16/9]">
                <Image
                  src={GIF}
                  alt="gif"
                  className="object-cover w-full"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className="min-h-screen bg-wall-texture bg-[#1E373E] bg-cover flex w-full"></div>
      </div>
      <div className="min-h-screen bg-wall-texture bg-[#1E373E] bg-contain w-full relative">
        <div className="relative w-full">
          <Image
            src={Pattern2}
            alt="Pattern 2"
            className="object-cover w-full"
            priority
          />
        </div>
        <div className="text-justify flex justify-between items-center gap-[100px] w-full relative z-[2] px-[5%]">
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
        <div ref={scrollCloudRef} className="relative top-[-60vh]">
          <div className="relative flex">
            <motion.div
              style={{ x: xLeft }}
              className="relative z-[1] translate-x-[-40vw]">
              <Image
                alt="awan"
                src={awanKiri}
                className="w-[1000px]"
                priority
              />
            </motion.div>
            <motion.div
              style={{ x: xRight }}
              className="relative z-[1] translate-x-[40vw]">
              <Image
                alt="awan"
                src={awanKanan}
                className="w-[1000px]"
                priority
              />
            </motion.div>
          </div>
          <div className="flex justify-between absolute left-0 right-0 items-center top-[0vh]">
            <motion.div
              style={{ x: xLeftObj }}
              className="relative z-[2]  translate-x-[-40vw] ">
              <Image alt="awan" src={objekKiri} priority />
            </motion.div>
            <motion.div
              style={{ x: xRightObj }}
              className="relative z-[2] translate-x-[40vw]  ">
              <Image alt="awan" src={objekKanan} priority />
            </motion.div>
          </div>
        </div>
      </div>
      <section className="flex flex-col gap-10 bg-paper-retak w-full pt-[20vh] bg-no-repeat bg-cover mt-[-5%] relative z-[7]">
        <div className="flex flex-col gap-10 px-[60px]">
          <div className="flex gap-10 w-full">
            <div className="relative w-full max-w-[480px] ml-3 md:ml-4 aspect-square flex-1">
              <Image src={X} alt="X image" fill className="object-center" />
            </div>
            <div className="flex-1 flex flex-col ">
              <motion.h2
                {...textBlurAnimationProps}
                className="font-bold text-[48px] mb-3 w-full max-w-[512px]">
                Segera Hadir: <br /> Panggung Swara Insan
              </motion.h2>
              <motion.p
                {...textBlurAnimationProps}
                className="italic linux-libertine-slanted font-bold text-[32px] w-full max-w-[652px]">
                “Mari berikan ide dan gagasan kamu dalam Panggung Swara Insan!”
              </motion.p>
              <motion.p
                {...textBlurAnimationProps}
                className="font-medium text-justify text-[24px] w-full max-w-[512px] self-end mt-auto">
                Di panggung pre-event ini, kamu akan merasakan sensasi berbeda
                dalam eksplorasi ide-ide bersama para pembicara terkurasi.
              </motion.p>
            </div>
          </div>
          <div className="flex w-full gap-[50px] mt-[80px]">
            <div className="flex flex-col gap-2 flex-1">
              <div className="relative w-full aspect-square">
                <Image src={UnknownSpeaker} alt="Speaker" fill />
              </div>
              <p className="font-bold text-xl ">?????</p>
              <p className="font-medium text-lg">The Speaker</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="relative w-full aspect-square">
                <Image
                  src={UnknownSpeaker}
                  alt="Speaker"
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <p className="font-bold text-xl">?????</p>
              <p className="font-medium text-lg">The Speaker</p>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="relative w-full aspect-square">
                <Image src={UnknownSpeaker} alt="Speaker" fill />
              </div>
              <p className="font-bold text-xl">?????</p>
              <p className="font-medium text-lg">The Speaker</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Button
              as="client-link"
              type="secondary"
              href="/home"
              className="w-max">
              Apa itu Pre-Event?
            </Button>
            <Button
              as="client-link"
              type="primary"
              href="/home"
              className="w-max">
              Jadilah Speaker!
            </Button>
          </div>
        </div>
        <div className="pb-28 flex flex-row-reverse justify-between items-center gap-[50px] mt-[100px] bg-paper-desktop bg-cover bg-no-repeat">
          <div className="z-0 relative flex-1">
            <div className="relative w-full aspect-[4/3]">
              <Image src={Photo} alt="Staff photo" />
              <div className="absolute -z-10 w-full aspect-[16/15] -top-14">
                <Image src={Splash} alt="Staff photo" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 ml-[60px] flex-1">
            <motion.h2
              {...textBlurAnimationProps}
              className="font-[800] text-[90px] max-w-[20vw] creato-display">
              Tickets Dropping Soon!
            </motion.h2>
            <Button
              as="client-link"
              type="primary"
              href="/home"
              className="w-full max-w-[300px] text-[20px]">
              Grab Yours
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
