'use client';

import AboutImage from '@/images/about-image.png';
import VideoBG from '@/images/about-us-video-bg.png';
import VideoSplash from '@/images/about-us-video-splash.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const textContent = [
  {
    title: 'TED',
    desc: `TED merupakan sebuah organisasi nirlaba dengan semangat “Ideas Worth Spreading” yang berfokus pada Technology, Entertainment, dan Design. TED pertama kali dibentuk pada tahun 1984 dan menjadi ruang bagi individu-individu dengan semangat yang sama untuk menyebarkan ide-ide brilian di seluruh dunia.`,
  },
  {
    title: 'TEDx',
    desc: `TEDx merupakan events yang mengolaborasikan komunitas lokal untuk berbagi ide dengan konsep yang ada pada TED sehingga memicu diskusi dan koneksi yang mendalam. TEDx dengan label ikonik bersimbol “x” bermakna bahwa events tersebut diselenggarakan secara independen dengan lisensi dari TED.`,
  },
  {
    title: 'TEDxUniversitasBrawijaya',
    desc: `TEDxUniversitasBrawijaya merupakan salah satu dari TEDx event yang diselenggarakan secara independen dengan lisensi TEDx yang diinisiasi komunitas lingkup Universitas Brawijaya.`,
  },
];

const textVariant = {
  visible: { filter: `blur(0rem)` },
  hidden: { filter: `blur(0.2rem)` },
};

function AboutUsMobile() {
  return (
    <main>
      <section className="relative -z-30 flex h-screen w-full flex-col justify-center bg-wall bg-cover text-white">
        <h1 className="mt-[4.75rem] px-5 text-center text-5xl sm:text-6xl">
          Tentang Kami
        </h1>
        <div className="relative -bottom-20 aspect-[2/3] w-full">
          <Image
            src={AboutImage}
            alt="About Image"
            fill
            className="overflow-visible object-cover object-center"
          />
        </div>
      </section>
      <section className="relative -z-20 flex w-full flex-col items-center gap-14 overflow-hidden bg-paper-mobile bg-cover bg-no-repeat px-5 pb-20 pt-32 sm:px-20">
        {/* image */}
        <div className="relative flex w-full sm:w-2/3">
          <div className="relative mr-0 ml-auto aspect-[2/3] w-[90%] s">
            <Image src={VideoBG} alt="Video Background" fill />
          </div>

          <div className="absolute left-0 z-10 h-full w-[90%]  bg-zinc-500"></div>

          <div className="absolute -right-[32rem] -top-48 -z-10 aspect-[16/8.7] w-[80rem] sm:-right-[40rem]">
            <Image
              src={VideoSplash}
              alt="Blue Splash"
              fill
              className="object-fill"
            />
          </div>
        </div>

        {/* text */}
        <div className="flex w-full flex-col gap-14 text-base lg:w-1/2">
          {textContent.map(({ title, desc }, index) => {
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  margin: '0px 0px -30% 0px',
                }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}>
                <motion.h2
                  variants={textVariant}
                  className="mb-3 text-2xl font-bold sm:text-2xl">
                  {title}
                </motion.h2>
                <motion.p variants={textVariant}>{desc}</motion.p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AboutUsMobile;
