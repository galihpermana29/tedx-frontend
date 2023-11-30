'use client';

import flower from '@/images/flower.png';
import Frame1 from '@/images/frame-1.png';
import Frame2 from '@/images/frame-2.png';
import Frame3 from '@/images/frame-3.png';
import Frame4 from '@/images/frame-4.png';
import bgMemantikLong from '@/images/memantik-bg.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Button from '@/components/shared/Button';
import awanKanan from '@/images/awan-kanan.png';
import awanKiri from '@/images/awan-kiri.png';
import objekKanan from '@/images/objek-kanan.png';
import objekKiri from '@/images/objek-kiri.png';
import Pattern2 from '@/images/pattern_gelora.png';
import {
  textBlurAnimationProps,
  textFadeLeftAnimationProps,
  textFadeRightAnimationProps,
  textFadeUpAnimationProps,
} from '@/utils/data/animation';

import MainEventSpeakersCarousel from '@/components/shared/MainEventSpeakersCarousel';
import SpeakerCard from '@/components/shared/SpeakerCard';
import Photo from '@/images/home-photo.png';
import X from '@/images/home-x-2.png';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';

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
    [1, 1, 0.9, 0.8]
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
    ['0vw', '5vw', '10vw', '20vw', '40vw']
  );

  const xLeftObj = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.55, 0.75, 1],
    ['-0vw', '-5vw', '-10vw', '-20vw', '-40vw']
  );

  const y = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.4, 0.5, 0.6, 0.7, 1],
    ['0', '0', '0', '30vh', '40vh', '100vh']
  );

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const isEndReached =
        containerRef.current.scrollLeft ===
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      if (e.deltaY <= 0 && window.scrollY !== 0) return;
      if (e.deltaY <= 0 && window.scrollY === 0) {
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
    window.scrollTo({ top: -1, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
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
              <div className="flex justify-center items-center gap-[40px]">
                <div className="-rotate-6 relative w-[40%] aspect-video">
                  <Image alt="frame" src={Frame1} priority />
                </div>
                <div className="rotate-6 relative w-[40%] aspect-video">
                  <Image alt="frame" src={Frame2} priority />
                </div>
              </div>
            </div>
            <div className="w-screen h-screen flex items-center  justify-between">
              <div className="flex justify-center gap-[2px] pl-[100px] flex-1 flex-col">
                <div className="-rotate-6 w-[60%] ">
                  <Image alt="frame" src={Frame3} className="w-full" priority />
                </div>
                <div className="rotate-6 w-[60%]">
                  <Image alt="frame" src={Frame4} className="w-full" priority />
                </div>
              </div>
              <div className="flex-1 ">
                <div className="max-w-[70%]">
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
                className="overflow-hidden w-[70%] aspect-[16/9]">
                <ReactPlayer
                  width={'100%'}
                  height={'100%'}
                  controls={true}
                  url={
                    'https://res.cloudinary.com/braiwjaya-university/video/upload/v1701333730/osd6qqsk2u7yvhqukz1j.mp4'
                  }
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
          <motion.h2
            {...textFadeRightAnimationProps}
            className="text-[128px] font-bold text-cream rosela mb-20 flex-1 max-w-min">
            Gelora Djiwa
          </motion.h2>
          <motion.p
            {...textFadeLeftAnimationProps}
            className="text-white max-w-[700px] text-[20px] creato-display flex-1">
            Reaksi fisiologis akan sukacita, keresahan, dan ragam lainnya muncul
            saat seseorang mampu memanifestasikan penerimaan diri. Dalam acara
            ini, masing-masing insan yang memiliki faktor luar biasa mampu
            menggerakkan &quot;Gelora Djiwa&quot; sebagai dorongan kuat untuk
            bertindak sebagai wujud proses untuk merayakan pengalaman kompleks
            yang secara alami dirasakan sebagai manusia hingga mampu mencapai
            penerimaan diri seutuhnya dan sisi eksternal secara apa adanya.
          </motion.p>
        </div>
        <div ref={scrollCloudRef} className="relative top-[-60vh]">
          <div className="relative flex">
            <motion.div
              transition={{ ease: 'easeInOut' }}
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
              transition={{ ease: 'easeInOut' }}
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
              transition={{ ease: 'easeInOut' }}
              style={{ x: xLeftObj }}
              className="relative z-[2]  translate-x-[-40vw] ">
              <Image alt="awan" src={objekKiri} priority />
            </motion.div>
            <motion.div
              transition={{ ease: 'easeInOut' }}
              style={{ x: xRightObj }}
              className="relative z-[2] translate-x-[40vw]  ">
              <Image alt="awan" src={objekKanan} priority />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 bg-paper w-full pb-32 pt-[20vh] bg-no-repeat bg-cover mt-[-5%] relative z-[7]">
        <section className="flex flex-col gap-10 px-[60px]">
          <div className="flex gap-10 w-full">
            <div className="relative w-full max-w-[480px] ml-3 md:ml-4 aspect-square flex-1">
              <Image src={X} alt="X image" fill className="object-center" />
            </div>
            <div className="flex-1 flex flex-col ">
              <motion.h2
                {...textBlurAnimationProps}
                className="font-bold text-[48px] mb-3 w-full max-w-[512px]">
                Panggung Swara Insan
              </motion.h2>
              <motion.p
                {...textFadeUpAnimationProps}
                className="font-bold text-2xl w-full max-w-[652px]">
                Di panggung pre-event ini, kamu akan merasakan sensasi berbeda
                dalam eksplorasi ide-ide bersama para pembicara terkurasi.
              </motion.p>
              <motion.p
                {...textFadeUpAnimationProps}
                className="italic linux-libertine-slanted font-bold text-justify text-[32px] w-full max-w-[512px] self-end mt-auto">
                Kolaborasikan ide dan gagasan yang luar biasa unik darimu!
              </motion.p>
            </div>
          </div>
          <div className="flex w-full gap-[50px] mt-[80px]">
            <SpeakerCard variant={1} delay={1} className="w-full" />
            <SpeakerCard variant={2} delay={1} className="w-full" />
            <SpeakerCard variant={3} delay={1} className="w-full" />
          </div>
          <div className="flex gap-3 bg-black w-full justify-center">
            <Button
              as="client-link"
              type="primary"
              href="/pre-event"
              className="w-max">
              Apa itu Pre-Event?
            </Button>
          </div>
        </section>
        <section className="flex relative flex-col -z-10 -mt-44 items-center">
          <div className="relative select-none translate-y-20 w-full aspect-[16/5]">
            <Image src={'/assets/images/home-notes.png'} alt="notes" fill />
          </div>
          <h2 className="rosela text-center text-6xl">
            <span>Memantik Baskara</span>
            <br />
            <span className="text-4xl">Tak Membara, Terbakar Tak Bersuara</span>
          </h2>
          <p className="text-center w-2/3 text-lg mt-14">
            Penantian akan segera berakhir. Di puncak acara
            TEDxUniversitasBrawijaya 2023, kami menghadirkan “Memantik Baskara:
            Tersulut Tak Membara, Terbakar Tak Bersuara”. Beberapa insan yang
            berjuang di tengah ambiguitas atas jati dirinya hingga akhirnya
            memantik sebuah pencerahan maupun melahirkan gagasan baru yang
            berkembang dari serangkaian variabel yang saling terhubung. Era
            dunia saat ini menuju era inovasi dan kolaborasi, di mana ide dan
            sumber daya dapat dibagikan secara global untuk mencapai tujuan yang
            lebih besar. Dengan potensi yang ada, pelibatan alam, sesama, dan
            entitas manusia bersama berusaha untuk membaca, memahami, meneliti,
            dan menghayati fenomena-fenomena dalam upaya penerimaan diri
            seutuhnya. Dalam pencarian kali ini, audiens akan dibawa ke dalam
            perjalanan menarik melalui instalasi interaktif yang dipadukan
            dengan panggung inspiratif yaitu talks, oleh para speaker
            TEDxUniversitasBrawijaya 2023 yang akan menjadikan sebuah pengalaman
            tak terlupakan, merajut satu cerita, dan berjalan bersama.
          </p>
        </section>
        <section>
          <div className="w-full h-48 relative">
            <div className="absolute -bottom-[26rem] w-full -z-10 aspect-[16/9]">
              <Image src={'/assets/images/home-root.png'} alt="roots" fill />
            </div>
          </div>
          <h2 className="text-6xl text-outline-yellow text-center rosela">
            List Speakers
          </h2>
          <div className="mt-20 text-orange-darker">
            <MainEventSpeakersCarousel />
          </div>
          <div className="flex gap-3 mt-10 justify-center">
            <Button
              as="client-link"
              type="primary"
              href="/main-event"
              className="w-max">
              Apa itu Main Event?
            </Button>
          </div>
        </section>
        <div className="relative w-full aspect-[16/4] flex justify-end items-center">
          <Image
            src={'/assets/images/home-cloud-separator.png'}
            alt="Cloud"
            fill
            className="object-cover"
          />
        </div>
        <section className="flex flex-row-reverse justify-between items-center gap-[50px] mt-10 bg-cover bg-no-repeat">
          <div className="z-0 relative flex-1 basis-2/3">
            <div className="relative w-full flex justify-end items-center">
              <Image src={Photo} alt="Event photo" />
            </div>
          </div>
          <div className="flex flex-col basis-1/3 gap-10 ml-[60px]">
            <motion.h2
              {...textBlurAnimationProps}
              className="font-[800] text-6xl italic w-full creato-display">
              Secure Your Spot. Grab Your Tickets Here!
            </motion.h2>
            <Link href={'/ticket-main-event'}>
              <Button
                as="button"
                type="primary"
                onClick={() => {}}
                className="max-w-[300px] text-[20px]">
                Grab Yours
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
