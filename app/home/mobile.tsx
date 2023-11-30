'use client';

import Button from '@/components/shared/Button';
import Frame1 from '@/images/frame-1.png';
import Frame2 from '@/images/frame-2.png';
import Frame3 from '@/images/frame-3.png';
import Frame4 from '@/images/frame-4.png';
import Photo from '@/images/home-photo.png';
import X from '@/images/home-x.png';
import Pattern1 from '@/images/memantik-bg.png';
import Pattern2 from '@/images/pattern-2.png';
import Image from 'next/image';

import MainEventSpeakersCarousel from '@/components/shared/MainEventSpeakersCarousel';
import SpeakerCard from '@/components/shared/SpeakerCard';
import {
  textBlurAnimationProps,
  textFadeUpAnimationProps,
} from '@/utils/data/animation';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';

function MemantikMobile() {
  return (
    <main className="bg-wall-texture overflow-hidden pt-[70px]">
      <section className="relative z-0 flex flex-col gap-10 text-white w-full bg-cover">
        <div className="absolute -z-10 w-full aspect-square">
          <Image
            src={Pattern1}
            alt="Pattern 1"
            fill
            sizes="100vh"
            className="object-cover object-center"
          />
        </div>
        <div className="px-5 sm:px-20 md:px-44 pt-10 text-center">
          <h1 className="text-cream rosela text-2xl sm:text-3xl font-bold">
            “Memantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara”
          </h1>
        </div>
        <div className="flex flex-col px-5 gap-5 sm:px-20 md:px-44 items-center">
          <div className="relative w-full scale-[1.2] aspect-[4/3] -rotate-6">
            <Image src={Frame1} alt="Frame" fill sizes="100vh" />
          </div>
          <div className="relative w-full scale-[1.2] aspect-[4/3] rotate-6">
            <Image src={Frame2} alt="Frame" fill sizes="100vh" />
          </div>
          <div className="relative w-full scale-[1.2] aspect-[4/3] -rotate-6">
            <Image src={Frame3} alt="Frame" fill sizes="100vh" />
          </div>
          <div className="relative w-full scale-[1.2] aspect-[4/3] rotate-6">
            <Image src={Frame4} alt="Frame" fill sizes="100vh" />
          </div>
        </div>

        <div className="px-5 sm:px-20 md:px-44 md:px- py-10">
          <div className="relative overflow-hidden w-full aspect-[4/3]">
            <ReactPlayer
              width={'100%'}
              height={'100%'}
              controls={true}
              url={
                'https://res.cloudinary.com/braiwjaya-university/video/upload/v1701333730/osd6qqsk2u7yvhqukz1j.mp4'
              }
            />
          </div>
        </div>

        <div className="relative w-full aspect-square">
          <Image
            src={Pattern2}
            alt="Pattern 2"
            fill
            sizes="100vh"
            className="object-cover"
          />
        </div>

        <div className="px-5 sm:px-20 md:px-44 text-justify">
          <motion.h2
            {...textBlurAnimationProps}
            className="text-7xl font-bold text-cream rosela mb-20 w-1/2">
            Gelora Djiwa
          </motion.h2>
          <motion.p {...textFadeUpAnimationProps}>
            Reaksi fisiologis akan sukacita, keresahan, dan ragam lainnya muncul
            saat seseorang mampu memanifestasikan penerimaan diri. Dalam acara
            ini, masing-masing insan yang memiliki faktor luar biasa mampu
            menggerakkan &quot;Gelora Djiwa&quot; sebagai dorongan kuat untuk
            bertindak sebagai wujud proses untuk merayakan pengalaman kompleks
            yang secara alami dirasakan sebagai manusia hingga mampu mencapai
            penerimaan diri seutuhnya dan sisi eksternal secara apa adanya.
          </motion.p>
        </div>
      </section>
      <div className="w-full h-20 bg-paper-mobile mt-5 -mb-2"></div>
      <section className="flex flex-col gap-10 bg-paper-flat pt-14 pb-28 w-full">
        <div className="px-5 sm:px-20 md:px-44 flex flex-col gap-10">
          <div className="relative w-full ml-3 md:ml-4 aspect-square">
            <Image
              src={X}
              alt="X image"
              fill
              sizes="100vh"
              className="object-center"
            />
          </div>
          <div>
            <motion.h2
              {...textBlurAnimationProps}
              className="font-bold text-2xl mb-3">
              Panggung Swara Insan
            </motion.h2>
            <motion.p
              {...textFadeUpAnimationProps}
              className="font-medium text-justify">
              Di panggung pre-event ini, kamu akan merasakan sensasi berbeda
              dalam eksplorasi ide-ide bersama para pembicara terkurasi.
            </motion.p>
          </div>
          <motion.p
            {...textFadeUpAnimationProps}
            className="italic linux-libertine-slanted font-bold text-center text-xl">
            Kolaborasikan ide dan gagasan yang luar biasa unik darimu!
          </motion.p>
          <div className="flex flex-col gap-5">
            <SpeakerCard variant={1} delay={1} />
            <SpeakerCard variant={2} delay={1} />
            <SpeakerCard variant={3} delay={1} />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              as="client-link"
              type="primary"
              href="/pre-event"
              className="w-full">
              Apa itu Pre-Event?
            </Button>
          </div>
        </div>

        <div className="flex relative text-black-primary flex-col items-center">
          <div className="relative select-none w-full aspect-[16/5]">
            <Image src={'/assets/images/home-notes.png'} alt="notes" fill />
          </div>
          <div className="px-5 sm:px-20 md:px-44">
            <h2 className="rosela text-center text-5xl">
              <span>Memantik Baskara</span>
              <br />
              <span className="text-3xl">
                Tak Membara, Terbakar Tak Bersuara
              </span>
            </h2>
            <p className="text-center mt-14">
              Penantian akan segera berakhir. Di puncak acara
              TEDxUniversitasBrawijaya 2023, kami menghadirkan “Memantik
              Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara”. Beberapa
              insan yang berjuang di tengah ambiguitas atas jati dirinya hingga
              akhirnya memantik sebuah pencerahan maupun melahirkan gagasan baru
              yang berkembang dari serangkaian variabel yang saling terhubung.
              Era dunia saat ini menuju era inovasi dan kolaborasi, di mana ide
              dan sumber daya dapat dibagikan secara global untuk mencapai
              tujuan yang lebih besar. Dengan potensi yang ada, pelibatan alam,
              sesama, dan entitas manusia bersama berusaha untuk membaca,
              memahami, meneliti, dan menghayati fenomena-fenomena dalam upaya
              penerimaan diri seutuhnya. Dalam pencarian kali ini, audiens akan
              dibawa ke dalam perjalanan menarik melalui instalasi interaktif
              yang dipadukan dengan panggung inspiratif yaitu talks, oleh para
              speaker TEDxUniversitasBrawijaya 2023 yang akan menjadikan sebuah
              pengalaman tak terlupakan, merajut satu cerita, dan berjalan
              bersama.
            </p>
          </div>
        </div>

        <div>
          <div className="w-full h-48 relative">
            <div className="absolute -mt-10 w-full aspect-[16/11]">
              <Image src={'/assets/images/home-root.png'} alt="roots" fill />
            </div>
          </div>
          <h2 className="text-5xl text-outline-yellow text-center rosela">
            List Speakers
          </h2>
          <div className="mt-20 text-orange-darker">
            <MainEventSpeakersCarousel />
          </div>
          <div className="flex px-5 sm:px-20 md:px-44 gap-3 mt-10 justify-center">
            <Button
              as="client-link"
              type="primary"
              href="/main-event"
              className="w-full">
              Apa itu Main Event?
            </Button>
          </div>
        </div>

        <div className="relative w-full aspect-[16/4] flex justify-end items-center">
          <Image
            src={'/assets/images/home-cloud-separator.png'}
            alt="Cloud"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full flex justify-center aspect-square mt-10 z-0 overflow-hidden">
          <div className="absolute w-[120%] h-full object-center">
            <Image
              src={Photo}
              alt="Event photo"
              fill
              sizes="100vh"
              className="object-right"
            />
          </div>
        </div>

        <div className="px-5 sm:px-20 md:px-44 flex flex-col gap-10 mt-10">
          <motion.h2
            {...textBlurAnimationProps}
            className="font-extrabold text-5xl italic">
            Secure Your Spot. Grab Your Tickets Here!
          </motion.h2>
          <Button
            as="client-link"
            type="primary"
            href="/ticket-main-event"
            disabled
            className="w-full">
            Grab Yours
          </Button>
        </div>
      </section>
    </main>
  );
}

export default MemantikMobile;
