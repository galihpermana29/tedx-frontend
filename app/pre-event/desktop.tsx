'use client';

import Carousel from '@/components/shared/Carousel';
import Image from 'next/image';
import Venue from '@/images/pre-event-venue.png';
import BigFlower from '@/images/pre-event-big-flower.png';
import WidthFlower from '@/images/flowergroup.png';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/shared/Button';
import SpeakerCard from '@/components/shared/SpeakerCard';
import TimeCountdown from '@/components/shared/TimeCountdown';

import SmallFlower from '@/images/pre-event-small-flower.png';
import RightHand from '@/images/righthanded.png';
import LeftHand from '@/images/lefthanded.png';
import FAQCover from '@/images/pre-event-faq-cover.png';
import FAQ1 from '@/images/pre-event-faq-1.png';
import FAQ2 from '@/images/pre-event-faq-2.png';
import FAQ3 from '@/images/pre-event-faq-3.png';
import FAQ4 from '@/images/pre-event-faq-4.png';
import LeftSplash from '@/images/pre-event-splash-left.png';
import RightSplash from '@/images/pre-event-splash-right.png';

import bgCatat from '@/images/bg-catat.png';
import backCatat from '@/images/Back.png';
import frontCatat from '@/images/Fornt.png';

function PreEventDesktop() {
  const extendedRef = useRef<HTMLDivElement | null>(null);
  const extendedRefVid = useRef<HTMLDivElement | null>(null);
  const handRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: extendedRefVid,
    offset: ['start end', 'end end'],
  });
  const { scrollYProgress: scrollFlower } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  });
  const { scrollYProgress: scrollHand } = useScroll({
    target: handRef,
    offset: ['start end', 'end end'],
  });
  const scaleSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 60,
    restDelta: 0.001,
  });

  const y = useTransform(scrollYProgress, [0.7, 1], ['10vh', '20vh']);

  // const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.7, 2.66]);
  const scale = useTransform(
    scaleSpring,
    [0, 0.7, 1],
    ['10vh', '30vh', '120vh']
  );
  const widthFlow = useTransform(scrollFlower, [0.1, 0.7], ['10px', '800px']);
  const widthFlow2 = useTransform(scrollFlower, [0.1, 0.7], ['200px', '600px']);
  const rotateFlow = useTransform(
    scrollFlower,
    [0.1, 0.7],
    ['-10deg', '-180deg']
  );

  const right = useTransform(scrollHand, [0.1, 1], ['400px', '100px']);

  const left = useTransform(scrollHand, [0.1, 1], ['-400px', '-100px']);

  return (
    <div>
      {' '}
      <main className="bg-wall-texture py-20 overflow-hidden">
        <section
          className="pb-20  flex w-full flex-col text-white"
          ref={extendedRefVid}>
          <div className="h-1/5 flex justify-center items-center mt-20 text-center">
            <h1 className="text-5xl min-[300px]:text-6xl text-cream rosela">
              Panggung Swara Insan
            </h1>
          </div>
          <div className="flex flex-col items-center gap-5 mt-10 text-center text-[20px] ">
            <div className="max-w-[1000px]">
              <p>
                Panggung Swara Insan adalah wadah yang mendorong pembicara
                berbakat dari kalangan mahasiswa untuk menemukan keberanian
                mereka dalam menyuarakan ide dan gagasan yang unik dan
                berpengaruh.
              </p>
              <p className="my-[30px]">
                Panggung Swara Insan adalah bagian pra acara
                TEDxUniversitasBrawijaya 2023 yang menampilkan pembicara
                mahasiswa terpilih dengan beragam latar belakang, memiliki satu
                persamaan kuat, yaitu keinginan untuk menyampaikan pesan
                bermakna melalui konsep sesi intim yang menginspirasi.
              </p>
              <p>
                Bergabunglah dalam perjalanan TEDxUniversitasBrawijaya 2023
                untuk merayakan ragam ekspresi batin manusia dan merasakan
                gelora gagasan-gagasan luar biasa dari para pembicara di
                Panggung Swara Insan.
              </p>
            </div>
          </div>
          <div className="relative min-h-[100vh]">
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
        {/* <section className="h-[110vh]">s</section> */}
        <section className="h-[30vh]">s</section>
        <section
          ref={extendedRef}
          className="bg-paper-pre-desktop bg-cover bg-no-repeat flex flex-col gap-[20px] items-center pt-14 pb-[20px] px-[150px]">
          <div className="flex w-full items-center justify-between gap-20 ">
            <div className="relative w-[50%]  min-h-[80vh]">
              <div className="absolute w-full z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
                <motion.div
                  style={{ rotate: rotateFlow, width: widthFlow2 }}
                  className="w-full max-w-[600px]">
                  <Image src={BigFlower} alt="Flower" className=" w-full" />
                </motion.div>
              </div>
              <div className="absolute w-full z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
                <motion.div
                  style={{ width: widthFlow }}
                  className="w-full max-w-[900px]">
                  <Image src={WidthFlower} alt="Flower" className=" w-full" />
                </motion.div>
              </div>
            </div>

            <div className="text-left flex-1 max-w-[500px] min-h-[300px]">
              <h1 className="text-[48px] font-extrabold mb-6">
                Apa yang Kamu Dapatkan?
              </h1>
              <ul className="flex flex-col list-disc list-inside gap-3 text-[24px]">
                <li>Intimate Session</li>
                <li>Compelling Talks</li>
                <li>Special Performance</li>
                <li>Convenient Atmosphere</li>
              </ul>
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
              <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted text-[32px]">
                <div className="grow h-[1px] bg-black-primary"></div>
                <span>Venue</span>
              </div>
            </div>
            <div className="shrink-0 w-full flex flex-col gap-2">
              <div className="relative w-full aspect-video">
                <Image src={Venue} alt="Venue" fill sizes="100vh" />
              </div>
              <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted text-[32px]">
                <div className="grow h-[1px] bg-black-primary"></div>
                <span>Venue</span>
              </div>
            </div>
            <div className="shrink-0 w-full flex flex-col gap-2">
              <div className="relative w-full aspect-video">
                <Image src={Venue} alt="Venue" fill sizes="100vh" />
              </div>
              <div className="flex justify-between items-center gap-2 text-black-primary linux-libertine-slanted text-[32px]">
                <div className="grow h-[1px] bg-black-primary"></div>
                <span>Venue</span>
              </div>
            </div>
          </Carousel>
        </section>
        <div className="relative w-full h-[300px]" ref={handRef}>
          <motion.div
            style={{ x: left }}
            className="absolute w-[50%]  -top-[50vh] aspect-[16/9] translate-x-[-300px]">
            <Image src={LeftHand} alt="Left Hand" fill sizes="100vh" />
          </motion.div>
          <motion.div
            style={{ x: right }}
            className="absolute w-[40%]  -top-[0vh] right-0 translate-x-[300px] aspect-[16/9]">
            <Image src={RightHand} alt="Right Hand" fill sizes="100vh" />
          </motion.div>
        </div>
        <section className="text-white flex flex-col gap-14 items-center pt-32">
          <div className="flex w-full items-center justify-between pl-[100px] gap-[40px]">
            <div className="flex-1">
              <div className="flex flex-col max-w-[800px]">
                <h1 className="rosela text-cream text-[64px] mb-8 ">
                  Catat Tanggalnya Sekarang Juga
                </h1>
                <table>
                  <tr>
                    <td className="whitespace-nowrap pr-4 text-[32px] font-bold flex items-start">
                      15/9 - 18/9
                    </td>
                    <td className="text-[24px]">
                      Tiket Panggung Swara Insan dibuka
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-[32px] font-bold flex items-start">
                      20/9
                    </td>
                    <td className="text-[24px]">
                      Pengumuman penerima undian tiket Panggung Swara Insan
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-[32px] font-bold flex items-start">
                      23/9
                    </td>
                    <td className="text-[24px]">Panggung Swara Insan</td>
                  </tr>
                </table>
              </div>
              <TimeCountdown className="mt-[150px] text-8xl" />
            </div>
            <div className="flex-1 relative">
              <div className="min-h-[80vh]">
                <div className="absolute z-[1] top-[50%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
                  className="absolute z-[2] top-[50%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
                  className="absolute z-[3] top-[60%] w-full left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <Image src={frontCatat} alt="bg" className="w-full" />
                </motion.div>
              </div>
              {/* <div className="relative w-full aspect-[5/4] pb-20">
                <Image src={Art} alt="Art" fill sizes="100vh" />
              </div> */}
            </div>
          </div>
          <div className="px-5 sm:px-20 md:px-44 pt-[200px]">
            <p className="creato-display text-[32px] font-bold text-center">
              Jangan sampai lewatkan! <br /> Pencarian Student Speaker hanya
              dibuka di tanggal 1 - 6 September 2023
            </p>
          </div>
          <div className="flex w-full gap-[40px] px-[100px]">
            <div className="flex-1">
              <SpeakerCard variant={1} />
            </div>
            <div className="flex-1">
              <SpeakerCard variant={2} />
            </div>
            <div className="flex-1">
              <SpeakerCard variant={3} />
            </div>
          </div>
          <div className="z-10 flex gap-3 w-full mt-14 px-5 sm:px-20 md:px-44 justify-center">
            <Button
              as="client-link"
              type="secondary"
              href="/pre-event"
              className="w-max">
              Syarat dan Ketentuan
            </Button>
            <Button
              as="anchor"
              type="primary"
              href="https://docs.google.com/forms/d/1R40gZlYkpwmsMUX-8lPOAu7wNxsXrHiBQhipi3JebJo/edit"
              className="w-max">
              Jadilah Speaker!
            </Button>
          </div>
          <div className="relative w-full flex justify-center mt-10">
            <div className="relative w-[175px] aspect-[16/8]">
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
            containerClassName="w-full px-[100px] mb-[100px]"
            className="w-1/2 text-white"
            options={{ dragFree: false, align: 'center' }}>
            <div className="w-[400px] shrink-0">
              <Image src={FAQCover} alt="FAQ" sizes="70vh" />
            </div>
            <div className="w-[400px] shrink-0">
              <Image src={FAQ1} alt="FAQ" sizes="70vh" />
            </div>
            <div className="w-[400px] shrink-0">
              <Image src={FAQ2} alt="FAQ" sizes="70vh" />
            </div>
            <div className="w-[400px] shrink-0">
              <Image src={FAQ3} alt="FAQ" sizes="70vh" />
            </div>
            <div className="w-[400px] shrink-0">
              <Image src={FAQ4} alt="FAQ" sizes="70vh" />
            </div>
          </Carousel>
        </section>
      </main>
    </div>
  );
}

export default PreEventDesktop;
