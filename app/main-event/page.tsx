'use client';

import Carousel from '@/components/shared/Carousel';
import FAQCard from '@/components/shared/FAQCard';
import MainEventExperience from '@/components/shared/MainEventExperience';
import MainEventSpeakersCarousel from '@/components/shared/MainEventSpeakersCarousel';
import TimeCountdown from '@/components/shared/TimeCountdown';
import { mainEventFAQContent } from '@/utils/data/faq';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function MainEvent() {
  const [textFullColorIndex, setTextFullColorIndex] = useState<number>(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextFullColorIndex((prev) => (prev + 1) % 5);
    }, 500);

    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <main className="bg-main-event bg-cover overflow-hidden text-white pb-20 flex flex-col gap-32">
      <section className="relative py-28 flex flex-col gap-5 overflohidden justify-center items-center w-full aspect-video">
        <div className="absolute w-full aspect-video z-[1]">
          <Image
            className="w-full"
            src={'/assets/images/main-event-roots.png'}
            fill
            alt="Root"
          />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            filter: ['blur(0px)', 'blur(3px)', 'blur(0px)'],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeatType: 'reverse',
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute w-full aspect-[16/7] lg:aspect-[16/6] z-[1]">
          <Image
            className="w-full"
            src={'/assets/images/star-main.png'}
            fill
            alt="Stars"
          />
        </motion.div>
        <div className="absolute scale-[2.3] sm:scale-[1.5] translate-x-10 -translate-y-10 lg:-translate-y-24">
          <Image
            className="w-full "
            src={'/assets/images/main-event-green-cloud.png'}
            width={3000}
            height={4000}
            alt="Cloud"
          />
        </div>
        <div className="relative sm:mt-0 flex justify-center items-center rosela z-[2] text-center text-2xl xs:text-4xl sm:text-6xl lg:text-8xl font-bold">
          Hadir Untukmu
          <div className="absolute w-full aspect-video -z-10">
            <Image
              className="w-full "
              src={'/assets/images/red-text.png'}
              fill
              alt="Red backdrop"
            />
          </div>
        </div>
        <motion.div
          animate={{
            scale: [1.1, 1, 0.9, 1.1],
            rotate: ['20deg', '10deg', '0deg', '20deg'],
          }}
          transition={{
            duration: 3,
            ease: 'backOut',
            times: [0, 0.3, 0.6, 1],
            repeat: Infinity,
          }}
          className="relative w-24 xs:w-32 sm:w-32 md:w-44 lg:w-56 aspect-square">
          <Image
            className="w-full "
            src={'/assets/images/jam-main.png'}
            fill
            alt="Clock"
          />
        </motion.div>
      </section>
      <section className="px-5 sm:px-20 md:px-44 lg:px-20 flex flex-col gap-5 lg:gap-10 z-[1]">
        <div className="w-full flex justify-center">
          <h1 className="text-center w-full rosela text-xl md:text-2xl lg:text-4xl">
            <span>Memantik Baskara</span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-6xl">
              Tersulut Tak Membara, <br /> Terbakar Tak Bersuara
            </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <div className="w-full aspect-video basis-[55%] bg-zinc-700"></div>
          <div className="basis-[45%] flex flex-col gap-2">
            <p>
              Penantian akan segera berakhir. Di puncak acara
              TEDxUniversitasBrawijaya 2023, kami menghadirkan “Memantik
              Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara”. Beberapa
              insan yang berjuang di tengah ambiguitas atas jati dirinya hingga
              akhirnya memantik sebuah pencerahan maupun melahirkan gagasan baru
              yang berkembang dari serangkaian variabel yang saling terhubung.
            </p>
            <p>
              Era dunia saat ini menuju era inovasi dan kolaborasi, di mana ide
              dan sumber daya dapat dibagikan secara global untuk mencapai
              tujuan yang lebih besar. Dengan potensi yang ada, pelibatan alam,
              sesama, dan entitas manusia bersama berusaha untuk membaca,
              memahami, meneliti, dan menghayati fenomena-fenomena dalam upaya
              penerimaan diri seutuhnya.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="w-full lg:w-[40%]">
            Dalam pencarian kali ini, audiens akan dibawa ke dalam perjalanan
            menarik melalui instalasi interaktif yang dipadukan dengan panggung
            inspiratif yaitu talks, oleh para speaker TEDxUniversitasBrawijaya
            2023 yang akan menjadikan sebuah pengalaman tak terlupakan, merajut
            satu cerita, dan berjalan bersama.
          </p>
        </div>
      </section>
      <section className="relative z-0 flex flex-col gap-7 lg:gap-10">
        <div className="absolute -bottom-44 -z-10 w-full aspect-video">
          <Image
            src={'/assets/images/main-event-roots-2.png'}
            alt="Roots"
            fill
          />
        </div>
        <div className="w-full px-5 sm:px-20 md:px-44 flex justify-center">
          <h1 className="rosela w-full text-center text-xl sm:text-3xl lg:text-4xl">
            Jadilah Bagian dari Ekspedisi TEDxUniversitasBrawijaya 2023!
          </h1>
        </div>
        <TimeCountdown
          date={new Date(2023, 11, 2, 23, 59, 0)}
          className="text-center text-6xl sm:text-7xl"
        />
      </section>
      <section className="text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-5 lg:mb-10 text-center rosela">
          Our Speakers
        </h1>
        <MainEventSpeakersCarousel />
      </section>
      <section className="px-5 sm:px-20">
        <MainEventExperience />
      </section>
      <section className="px-5 sm:px-20 flex flex-col gap-2">
        {[...Array(5)].map((_, index) => {
          return (
            <div
              key={index}
              className={`text-center font-black text-2xl sm:text-4xl md:text-5xl lg:text-7xl whitespace-nowrap uppercase ${
                textFullColorIndex >= index ? '' : 'text-outline-white'
              }`}>
              Special Performance
            </div>
          );
        })}
        <div className="flex flex-col md:flex-row mt-10">
          <div className="w-full relative aspect-[3/4] bg-zinc-700 overflow-hidden">
            <Image
              src={'/assets/images/about-us-photo.png'}
              alt="Event info"
              fill
              className="brightness-75 object-cover"
            />
            <div className="absolute w-full bottom-0 p-2 text-sm bg-red-primary bg-opacity-50 text-center">
              <span>THEATRICAL DANCE</span>
              <br />
              <span>BY TEATER KOMUNITAS</span>
            </div>
          </div>
          <div className="w-full relative aspect-[3/4] bg-zinc-700 overflow-hidden">
            <Image
              src={'/assets/images/about-us-photo.png'}
              alt="Event info"
              fill
              className="brightness-75 object-cover"
            />
            <div className="absolute w-full bottom-0 p-2 text-sm bg-blue-primary bg-opacity-50 text-center">
              <span>LIVE PAINTING</span>
              <br />
              <span>BY ???</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 sm:px-20 text-black-primary">
        <div className="w-full bg-paper-main px-4 lg:px-5 py-7 flex flex-col gap-10">
          <h1 className="rosela py-2 border-y text-2xl md:text-4xl lg:text-5xl text-center font-bold border-black-primary">
            VENUE
          </h1>
          <div className="w-full aspect-video bg-zinc-700"></div>
          <div>
            <h2 className="rosela mb-2 font-bold text-center text-xl md:text-3xl lg:text-4xl">
              Tata Cara Penukaran Tiket dan Alur Masuk Audiens
            </h2>
            <ol className="list-decimal ml-4">
              <li>
                Silahkan kunjungi entrance gate dan tunjukan unique barcode yang
                telah kamu dapatkan untuk di-scan oleh panitia yang bertugas;
              </li>
              <li>
                Setelah unique barcode terverifikasi, kamu akan mendapatkan
                wristband dan juga TEDx Kit
              </li>
              <li>
                Panitia yang bertugas akan mengarahkanmu untuk menempati kursi
                yang telah tersedia;
              </li>
              <li>
                Jika tiket kamu digunakan oleh orang lain, orang tersebut harus
                menunjukan bukti berupa foto kartu identitas (nama yang tertera
                pada kartu identitas harus sesuai dengan yang tertera pada
                e-ticket).
              </li>
            </ol>
          </div>
          <hr className="border-black-primary" />
          <div className="flex flex-col md:flex-row gap-5">
            <div className="md:basis-1/2">
              <h2 className="rosela mb-2 font-bold text-center text-xl md:text-3xl lg:text-4xl">
                Do&apos;s
              </h2>
              <ol className="list-decimal ml-4">
                <li>
                  Datang tepat waktu pada sesi open gate yaitu pukul 09.00 -
                  10.00 WIB;
                </li>
                <li>
                  Memiliki tiket (terdaftar) dan memakai wristband selama
                  rangkaian acara berlangsung;
                </li>
                <li>
                  Mengikuti seluruh rangkaian acara sesuai dengan prosedur waktu
                  yang telah ditentukan;
                </li>
                <li>
                  Menjaga ketenangan selama acara berlangsung dan mengikuti
                  arahan dari panitia;
                </li>
                <li>Dipersilakan aktif dalam sesi diskusi (tanya jawab);</li>
                <li>
                  Dipersilakan untuk mengambil cuplikan foto atau video dan
                  mengunggahnya di media sosial tanpa membocorkan substansi dari
                  konteks talks TEDxUniversitasBrawijaya.
                </li>
              </ol>
            </div>
            <div className="md:basis-1/2">
              <h2 className="rosela mb-2 font-bold text-center text-xl md:text-3xl lg:text-4xl">
                Dont&apos;s
              </h2>
              <ol className="list-decimal ml-4">
                <li>
                  DILARANG membawa senjata tajam atau benda berbahaya lainnya
                  dan obat-obatan terlarang;
                </li>
                <li>
                  DILARANG membawa makanan atau minuman dari luar ke dalam venue
                  acara;
                </li>
                <li>
                  DILARANG menggunakan atau mengucapkan ujaran yang mengandung
                  unsur ponografi maupun SARA;
                </li>
                <li>
                  DILARANG melakukan hal-hal yang memicu kegaduhan selama acara
                  berlangsung;
                </li>
                <li>
                  DILARANG melakukan mobilisasi pada saat talks sedang
                  berlangsung;
                </li>
                <li>
                  DILARANG merekam secara penuh seluruh talks
                  TEDxUniversitasBrawijaya.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Carousel
          containerClassName="w-full px-5 sm:px-20 sm:px-44 lg:px-[100px] mb-[100px]"
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
          {mainEventFAQContent.map(({ question, answer }, index) => {
            return <FAQCard key={index} question={question} answer={answer} />;
          })}
        </Carousel>
      </section>
    </main>
  );
}

export default MainEvent;
