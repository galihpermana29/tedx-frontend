'use client';

import Button from '@/components/shared/Button';
import Carousel from '@/components/shared/Carousel';
import SpeakerCard from '@/components/shared/SpeakerCard';
import TimeCountdown from '@/components/shared/TimeCountdown';
import WidthFlower from '@/images/flowergroup.png';
import LeftHand from '@/images/lefthanded.png';
import BigFlower from '@/images/pre-event-big-flower.png';
import FAQ1 from '@/images/pre-event-faq-1.png';
import FAQ2 from '@/images/pre-event-faq-2.png';
import FAQ3 from '@/images/pre-event-faq-3.png';
import FAQ4 from '@/images/pre-event-faq-4.png';
import TEDx from '@/images/pre-event-tedx-chars.png';
import FAQCover from '@/images/pre-event-faq-cover.png';
import SmallFlower from '@/images/pre-event-small-flower.png';
import LeftSplash from '@/images/pre-event-splash-left.png';
import RightSplash from '@/images/pre-event-splash-right.png';
import Venue from '@/images/pre-event-venue.png';
import RightHand from '@/images/righthanded.png';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import backCatat from '@/images/Back.png';
import frontCatat from '@/images/Fornt.png';
import bgCatat from '@/images/bg-catat-mobile.png';

function PreEventMobile() {
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const extendedRefVid = useRef<HTMLDivElement | null>(null);
  const handRefMobile = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: extendedRefVid,
    offset: ['start end', 'end end'],
  });
  const { scrollYProgress: scrollFlower } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  });
  const { scrollYProgress: scrollHand } = useScroll({
    target: handRefMobile,
    offset: ['start end', 'end end'],
  });
  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 60,
    restDelta: 0.001,
  });

  const y = useTransform(scrollYProgress, [0.7, 1], ['10vh', '20vh']);

  const scale = useTransform(
    scaleSpring,
    [0.6, 0.7, 1],
    ['10vh', '20vh', '70vh']
  );
  const widthFlow = useTransform(scrollFlower, [0.1, 0.6], ['10px', '800px']);
  const widthFlow2 = useTransform(scrollFlower, [0.1, 0.6], ['200px', '600px']);
  const rotateFlow = useTransform(
    scrollFlower,
    [0.1, 0.5],
    ['-180deg', '0deg']
  );

  const right = useTransform(scrollHand, [0.1, 1], ['400px', '10px']);
  const left = useTransform(scrollHand, [0.1, 1], ['-400px', '50px']);

  return (
    <main className="bg-wall-texture py-20 overflow-hidden">
      <section ref={extendedRefVid} className="flex w-full flex-col text-white">
        <div className="h-1/5 px-5 sm:px-20 md:px-44 flex justify-center items-center mt-20 text-center">
          <h1 className="text-5xl min-[300px]:text-6xl text-cream rosela">
            Panggung Swara Insan
          </h1>
        </div>
        <div className="flex flex-col gap-5 px-5 sm:px-20 md:px-44 mt-10 text-center">
          <p>
            Panggung Swara Insan adalah wadah yang mendorong pembicara berbakat
            dari kalangan mahasiswa untuk menemukan keberanian mereka dalam
            menyuarakan ide dan gagasan yang unik dan berpengaruh.
          </p>
          <p>
            Panggung Swara Insan adalah bagian pra acara
            TEDxUniversitasBrawijaya 2023 yang menampilkan pembicara mahasiswa
            terpilih dengan beragam latar belakang, memiliki satu persamaan
            kuat, yaitu keinginan untuk menyampaikan pesan bermakna melalui
            konsep sesi intim yang menginspirasi.
          </p>
          <p>
            Bergabunglah dalam perjalanan TEDxUniversitasBrawijaya 2023 untuk
            merayakan ragam ekspresi batin manusia dan merasakan gelora
            gagasan-gagasan luar biasa dari para pembicara di Panggung Swara
            Insan.
          </p>
        </div>
        <div className="relative min-h-[93vh]">
          <motion.div
            style={{ height: scale, y }}
            className="mt-[30px] flex justify-center h-screen w-full absolute">
            <iframe
              className="aspect-[16/9]"
              src="https://www.youtube.com/embed/nAkCmxc8cwI?si=zra8MAgrXfZDfVYl&amp;controls=1"
              title="YouTube video"></iframe>
          </motion.div>
        </div>
      </section>
      <section
        ref={extendedRef}
        className="bg-paper-flat z-0 px-5 sm:px-20 md:px-44 flex flex-col gap-10 items-center pt-16 pb-32">
        <div className="relative w-full aspect-square">
          <div className="absolute w-full z-[2] top-[50%] ml-5 translate-y-[-50%] flex justify-center">
            <motion.div
              style={{ rotate: rotateFlow, width: widthFlow2 }}
              className="w-full max-w-[600px]">
              <Image src={BigFlower} alt="Flower" className=" w-full" />
            </motion.div>
          </div>
          <div className="absolute w-full z-[1] top-[50%] ml- translate-y-[-50%] flex justify-center">
            <motion.div
              style={{ width: widthFlow }}
              className="w-full max-w-[900px]">
              <Image src={WidthFlower} alt="Flower" className=" w-full" />
            </motion.div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold mb-6">
            Apa yang Kamu Dapatkan?
          </h1>
          <ul className="flex flex-col gap-3">
            <li>Intimate Session</li>
            <li>Student Speakers</li>
            <li>Special Performers</li>
          </ul>
        </div>
        <div className="relative w-[120vw] -translate-y-[20rem]">
          <div className="absolute w-full aspect-square">
            <Image src={TEDx} alt="TEDx characters" fill sizes="100vh" />
          </div>
        </div>
        <Carousel
          containerClassName="w-full"
          className="w-1/2 text-white"
          options={{ dragFree: false, align: 'center' }}>
          <div className="shrink-0 w-full flex flex-col gap-2">
            <div className="relative w-full aspect-video">
              <Image src={Venue} alt="Venue" fill sizes="100vh" />
            </div>
            <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted">
              <div className="grow h-[1px] bg-black-primary"></div>
              <span>Venue</span>
            </div>
          </div>
          <div className="shrink-0 w-full flex flex-col gap-2">
            <div className="relative w-full aspect-video">
              <Image src={Venue} alt="Venue" fill sizes="100vh" />
            </div>
            <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted">
              <div className="grow h-[1px] bg-black-primary"></div>
              <span>Venue</span>
            </div>
          </div>
          <div className="shrink-0 w-full flex flex-col gap-2">
            <div className="relative w-full aspect-video">
              <Image src={Venue} alt="Venue" fill sizes="100vh" />
            </div>
            <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted">
              <div className="grow h-[1px] bg-black-primary"></div>
              <span>Venue</span>
            </div>
          </div>
        </Carousel>
      </section>
      <div className="relative w-full" ref={handRefMobile}>
        <motion.div
          style={{ x: left }}
          className="absolute w-[50%] sm:w-[40%] -top-24 sm:-top-44 -left-14 aspect-[16/9]">
          <Image src={LeftHand} alt="Left Hand" fill sizes="100vh" />
        </motion.div>
        <motion.div
          style={{ x: right }}
          className="absolute w-[40%] sm:w-[35%] -top-3 sm:-top-14 right-0 aspect-[16/9]">
          <Image src={RightHand} alt="Right Hand" fill sizes="100vh" />
        </motion.div>
      </div>
      <section className="text-white flex flex-col gap-14 items-center pt-32">
        <div className="flex flex-col items-center px-5 sm:px-20 md:px-44">
          <h1 className="rosela text-cream text-2xl mb-8 w-2/3 text-center">
            Catat Tanggalnya Sekarang Juga
          </h1>
          <table>
            <tr>
              <td className="whitespace-nowrap pr-4 text-lg font-bold flex items-start">
                15/9 - 18/9
              </td>
              <td>Tiket Panggung Swara Insan dibuka</td>
            </tr>
            <tr>
              <td className="pr-4 text-lg font-bold flex items-start">20/9</td>
              <td>Pengumuman penerima undian tiket Panggung Swara Insan</td>
            </tr>
            <tr>
              <td className="pr-4 text-lg font-bold flex items-start">23/9</td>
              <td>Panggung Swara Insan</td>
            </tr>
          </table>
        </div>
        <TimeCountdown className="pt-10 px-5 sm:px-20 md:px-44" />
        <div className="flex-1 relative w-full">
          <div className="min-h-[80vh]">
            <div className="absolute z-[1] mt-44 translate-x-7 w-full right-0">
              <Image src={bgCatat} alt="bg" className="w-full" />
            </div>
            <motion.div
              animate={{
                filter: ['blur(2px)', 'blur(0px)', 'blur(2px)'],
                scale: [1, 1.1, 1],
                position: 'absolute',
                top: ['50%', '50%'],
                left: ['50%', '50%'],
                width: '100%',
                translateX: ['-50%', '-50%'],
                translateY: ['-50%', '-50%'],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute z-[2] top-[50%] w-full ml-5 translate-y-[-50%]">
              <Image src={backCatat} alt="bg" className="w-[90%]" />
            </motion.div>
            <motion.div
              animate={{
                filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
                scale: [1.1, 1, 1.1],
                position: 'absolute',
                top: ['60%', '60%'],
                left: ['50%', '50%'],
                width: '100%',
                translateX: ['-50%', '-50%'],
                translateY: ['-50%', '-50%'],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute z-[3] top-[60%] ml-5 w-full left-[50%] translate-y-[-50%]">
              <Image src={frontCatat} alt="bg" className="w-full" />
            </motion.div>
          </div>
        </div>
        <div className="px-5 sm:px-20 md:px-44">
          <p className="font-bold text-center">
            Jangan lewatkan tanggalnya! Pencarian student speaker dibuka sejak
            tanggal 1 hingga 6 September 2023
          </p>
        </div>
        <div className="flex w-full flex-col gap-14 px-5 sm:px-20 md:px-44">
          <SpeakerCard variant={1} />
          <SpeakerCard variant={2} />
          <SpeakerCard variant={3} />
        </div>
        <div className="z-10 flex flex-col gap-3 w-full mt-14 px-5 sm:px-20 md:px-44">
          <Button
            as="client-link"
            type="secondary"
            href="/pre-event"
            className="w-full">
            Syarat dan Ketentuan
          </Button>
          <Button
            as="client-link"
            type="primary"
            href="/pre-event"
            className="w-full">
            Jadilah Speaker!
          </Button>
        </div>
        <div className="relative w-full flex justify-center mt-10">
          <div className="relative w-[40%] aspect-[16/8]">
            <Image src={SmallFlower} alt="Small Flower" fill sizes="100vh" />
          </div>
          <div className="absolute w-[40%] sm:w-[30%] -top-32 left-0 aspect-square">
            <Image src={LeftSplash} alt="Splash" fill sizes="100vh" />
          </div>
          <div className="absolute w-[35%] sm:w-[30%] -top-32 right-0 aspect-[1/2]">
            <Image src={RightSplash} alt="Splash" fill sizes="100vh" />
          </div>
        </div>
        <Carousel
          containerClassName="w-full px-5 sm:px-20 md:px-44"
          className="w-1/2 text-white"
          options={{ dragFree: false, align: 'center' }}>
          <div className="relative shrink-0 w-full aspect-square">
            <Image src={FAQCover} alt="FAQ" fill sizes="100vh" />
          </div>
          <div className="relative shrink-0 w-full aspect-square">
            <Image src={FAQ1} alt="FAQ" fill sizes="100vh" />
          </div>
          <div className="relative shrink-0 w-full aspect-square">
            <Image src={FAQ2} alt="FAQ" fill sizes="100vh" />
          </div>
          <div className="relative shrink-0 w-full aspect-square">
            <Image src={FAQ3} alt="FAQ" fill sizes="100vh" />
          </div>
          <div className="relative shrink-0 w-full aspect-square">
            <Image src={FAQ4} alt="FAQ" fill sizes="100vh" />
          </div>
        </Carousel>
      </section>
    </main>
  );
}

export default PreEventMobile;
