'use client';

import AboutImage from '@/images/about-image.png';
import VideoBG from '@/images/about-us-video-bg.png';
import VideoSplash from '@/images/about-us-video-splash.png';
import { textContent } from '@/utils/data/about-us';
import { textBlurVariant } from '@/utils/data/animation';
import { motion } from 'framer-motion';
import Image from 'next/image';

function AboutUsDesktop() {
  return (
    <main className="overflow-hidden">
      <section className="relative -z-30 flex h-screen w-full flex-col bg-wall bg-cover text-white">
        <div className="h-1/5 flex justify-center items-center mt-20 px-5 text-center">
          <h1 className="text-[95px] text-cream rosela">Tentang Kami</h1>
        </div>
        <div className="relative h-4/5">
          <div className="absolute -bottom-20 h-full w-full">
            <Image
              src={AboutImage}
              alt="About Image"
              fill
              className="overflow-visible object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section className="relative -z-20 flex w-full flex-row-reverse items-center gap-[100px] overflow-hidden bg-paper-retak bg-cover bg-no-repeat px-5 py-[20%] sm:px-20">
        {/* image */}
        <div className="relative flex max-w-[40%] sm:w-2/3 flex-1 ">
          <div className="relative mr-0 ml-auto aspect-[2/3] w-[90%] ">
            <Image src={VideoBG} alt="Video Background" fill />
          </div>

          <div className="absolute left-0 z-10 h-full w-[90%] bg-zinc-500"></div>

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
        <div className="flex w-full flex-col gap-14 flex-1">
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
                  variants={textBlurVariant}
                  className="mb-3 text-[40px] font-bold ">
                  {title}
                </motion.h2>
                <motion.p variants={textBlurVariant} className="text-[18px]">
                  {desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AboutUsDesktop;
