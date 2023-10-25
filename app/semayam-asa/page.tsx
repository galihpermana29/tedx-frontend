'use client';

import Button from '@/components/shared/Button';
import Carousel from '@/components/shared/Carousel';
import FAQCard from '@/components/shared/FAQCard';
import { textFadeUpAnimationProps } from '@/utils/data/animation';
import { semayamAsaFAQContent } from '@/utils/data/faq';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

function SemayamAsa() {
  const [visibleCloudIndex, setVisibleCLoudIndex] = useState<number>(0);
  const [moonSequence, setMoonSequence] = useState<number>(0);

  const extendedRefVid = useRef<HTMLDivElement | null>(null);
  const extendedRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: extendedRefVid,
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
    [0, 0.7, 1],
    ['10vh', '30vh', '120vh']
  );

  useEffect(() => {
    const cloudInterval = setInterval(() => {
      setVisibleCLoudIndex((prev) => (prev + 1) % 5);
    }, 2000);

    const moonInterval = setInterval(() => {
      setMoonSequence((prev) => (prev + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(cloudInterval);
      clearInterval(moonInterval);
    };
  }, []);

  return (
    <main className="bg-wall-texture py-20 overflow-hidden">
      <section
        ref={extendedRefVid}
        className="pb-20 px-5 relative flex w-full flex-col text-white">
        <div className="absolute w-full aspect-[16/13] left-0 md:-top-20">
          <Image
            src={'/assets/images/semayam-asa-root.png'}
            alt="Root"
            sizes="100vh"
            fill
          />
        </div>
        <div className="h-1/5 flex justify-center items-center mt-20 text-center">
          <h1 className="text-5xl min-[300px]:text-6xl text-cream rosela">
            Semayam Asa
          </h1>
        </div>
        <motion.div
          {...textFadeUpAnimationProps}
          className="flex text-base flex-col items-center gap-5 mt-10 text-center text-[20px] ">
          <div className="max-w-[1000px]">
            <p>
              TEDxUniversitasBrawijaya kembali hadir dalam proses{' '}
              <span className="font-bold">
                Memantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara
              </span>{' '}
              dalam Semayam Asa dengan{' '}
              <span className="font-bold">
                Kreativitas, Kolaborasi, dan Keterbukaan
              </span>{' '}
              yang menjadi kunci dari tema besar TEDxUniversitasBrawijaya 2023.
            </p>
            <p className="my-[30px]">
              Kreativitas sebagai pertimbangan berbagai ide dan gagasan tanpa
              batasan, sedangkan Kolaborasi sebagai sarana individu untuk saling
              menopang satu sama lain menuju Keterbukaan seseorang dengan
              kesediaannya untuk mendengarkan dengan penuh perhatian, menerima
              berbagai sudut pandang, dan berkomunikasi dengan jujur secara apa
              adanya.
            </p>
            <p>
              Setiap audiens akan memperoleh experience melalui aktivitas dan
              Instalasi interaktif yang TEDxUniversitasBrawijaya 2023 suguhkan.
              Harapannya Semayam Asa ini mampu menjadi jembatan dalam
              mengelaborasikan tema yang dibawakan TEDxUniversitasBrawijaya
              tahun ini yang akan dijelaskan secara komprehensif dalam acara
              utama nantinya.
            </p>
          </div>
        </motion.div>
        <div className="relative min-h-[100vh]">
          <motion.div
            style={{ height: scale, y }}
            className="mt-[30px] flex justify-center h-screen w-full absolute">
            <iframe
              className="aspect-video"
              src="https://www.youtube.com/embed/aYsIYGatsWk?si=h0AtJIXLQ2Gs8fTd&amp;controls=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </motion.div>
        </div>
      </section>
      <section className="h-[30vh]"></section>
      <section ref={extendedRef} className="bg-paper-flat pb-20">
        <div className="flex flex-col gap-10 py-20 px-5 lg:px-20">
          <motion.div className="relative w-full h-56 rounded-xl overflow-hidden border border-black-primary flex items-center justify-evenly px-2">
            <Image
              src={'/assets/images/semayam-asa-moon-wall-pattern.png'}
              alt="Wall Pattern"
              fill
              sizes="100vh"
              className="object-cover"
            />
            <div className={`w-20 aspect-square relative`}>
              <Image
                src={`/assets/images/semayam-asa-moon-1.png`}
                alt="Moon"
                fill
                sizes="100vh"
                className="object-cover"
              />
            </div>
            <div
              className={`${
                moonSequence <= 0 ? 'opacity-0' : 'opacity-100'
              } w-32 aspect-square relative`}>
              <Image
                src={`/assets/images/semayam-asa-moon-2.png`}
                alt="Moon"
                fill
                sizes="100vh"
                className="object-cover"
              />
            </div>
            <div
              className={`${
                moonSequence <= 1 ? 'opacity-0' : 'opacity-100'
              } w-32 aspect-square relative`}>
              <Image
                src={`/assets/images/semayam-asa-moon-3.png`}
                alt="Moon"
                fill
                sizes="100vh"
                className="object-cover"
              />
            </div>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-5 h-72 md:h-56">
            <div className="border border-black-primary bg-white rounded-xl basis-1/2 md:basis-2/3 text-center p-4 flex flex-col md:gap-5 justify-center items-center rosela text-red-primary">
              <span className="text-sm md:text-3xl">
                Ekspresikan Corak Personamu dalam
              </span>
              <span className="font-bold text-4xl md:text-[80px] whitespace-nowrap">
                Semayam Asa!
              </span>
            </div>
            <div className="border relative border-black-primary flex items-center justify-center h-full bg-wall-texture basis-1/2 md:basis-1/3 rounded-xl">
              {[...Array(5)].map((_, index) => {
                return (
                  <>
                    {visibleCloudIndex === index && (
                      <motion.div
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1 },
                        }}
                        className="absolute w-1/2 md:w-3/4 aspect-video">
                        <Image
                          src={`/assets/images/semayam-asa-cloud-${
                            index + 1
                          }.png`}
                          alt={`Cloud ${index + 1}`}
                          fill
                          sizes="100vh"
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <Marquee autoFill direction="right" speed={120}>
            {[...Array(8)].map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-36 relative aspect-[3/4] mx-4 rounded-xl overflow-hidden">
                  <Image
                    src={`/assets/images/semayam-asa-marquee-img-${
                      index + 1
                    }.png`}
                    alt={`Semayam Asa Image ${index + 1}`}
                    fill
                    sizes="100vh"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </Marquee>
          <Marquee autoFill speed={120}>
            <p className="font-bold text-4xl mx-20 rosela text-transparent text-outline">
              Semayam Asa!
            </p>
          </Marquee>
        </div>
        <div className=" px-5 md:px-10 lg:px-20 pb-20 pt-32 flex flex-col-reverse lg:flex-row gap-20 lg:gap-10">
          <div className="basis-2/3 flex flex-col justify-between gap-10">
            <h2 className="rosela text-red-primary text-4xl sm:text-5xl md:text-6xl">
              Catat Tanggalnya <br /> Sekarang Juga!
            </h2>
            <div className="grid grid-cols-10 grid-rows-3 gap-2 items-center w-full sm:w-2/3 md:w-1/2">
              <h3 className="col-span-4 font-bold text-xl">Tempat</h3>
              <p className="col-span-6">Nyore Cafe</p>
              <h3 className="col-span-4 font-bold text-xl">Tanggal</h3>
              <p className="col-span-6">27 - 29 Oktober 2023</p>
              <h3 className="col-span-4 font-bold text-xl">Waktu</h3>
              <p className="col-span-6">13:00 - 22:00</p>
            </div>
            <Button
              as="anchor"
              type="primary"
              href="/ticket-semayam-asa"
              className="lg:w-fit">
              Daftar Sekarang!
            </Button>
          </div>
          <div className="md:basis-1/3 flex justify-center">
            <div className="w-2/3 sm:w-1/2 lg:w-full relative bg-slate-400 aspect-[4/5] max-w-[400px]">
              <Image
                src={`/assets/images/semayam-asa-vertical-img.png`}
                alt="Event Photo"
                fill
                sizes="100vh"
                className="object-cover"
              />
              <div className="absolute w-[120%] -top-[10%] -left-[24%] aspect-[16/5] z-20">
                <Image
                  src={`/assets/images/semayam-asa-cloud.png`}
                  alt="Cloud"
                  fill
                  sizes="100vh"
                  className="object-cover"
                />
              </div>
              <div className="absolute w-[50%] -bottom-8 -right-[10%] aspect-[3/4] z-20">
                <Image
                  src={`/assets/images/semayam-asa-fire.png`}
                  alt="Fire"
                  fill
                  sizes="100vh"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full h-12 -mt-10">
        <Image
          src={'/assets/images/semayam-asa-paper-crack.png'}
          alt="Paper Crack"
          fill
        />
      </div>
      <section className="pt-16 flex flex-col gap-10">
        <div className="relative w-full flex justify-center mt-10">
          <div className="relative w-[175px] aspect-[16/8]">
            <Image
              src={'/assets/images/pre-event-small-flower.png'}
              alt="Small Flower"
              fill
              sizes="100vh"
            />
          </div>
          <div className="absolute w-[35%] sm:w-[30%] top-52 right-0 aspect-[1/2]">
            <Image
              src={'/assets/images/pre-event-splash-right.png'}
              alt="Splash"
              fill
              sizes="100vh"
            />
          </div>
        </div>
        <Carousel
          containerClassName="w-full px-5 md:px-20 lg:px-[100px] mb-[100px]"
          className="w-1/2 text-black-primary cursor-grab"
          options={{ dragFree: false, align: 'center' }}>
          <div className="rounded-xl shrink-0 w-full lg:w-[400px] overflow-hidden relative aspect-square">
            <Image
              src={`/assets/images/pre-event-faq-cover.png`}
              alt="FAQ Cover"
              sizes="70vh"
              fill
              className="object-cover"
            />
          </div>
          {semayamAsaFAQContent.map(({ question, answer }, index) => {
            return <FAQCard key={index} question={question} answer={answer} />;
          })}
        </Carousel>
      </section>
    </main>
  );
}

export default SemayamAsa;
