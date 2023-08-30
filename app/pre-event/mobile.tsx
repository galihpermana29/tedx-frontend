import Button from '@/components/shared/Button';
import SpeakerCard from '@/components/shared/SpeakerCard';
import TimeCountdown from '@/components/shared/TimeCountdown';
import Art from '@/images/pre-event-art.png';
import SmallFlower from '@/images/pre-event-small-flower.png';
import BigFlower from '@/images/pre-event-big-flower.png';
import RightHand from '@/images/pre-event-hand-right.png';
import LeftHand from '@/images/pre-event-hand-left.png';
import Venue from '@/images/pre-event-venue.png';
import FAQCover from '@/images/pre-event-faq-cover.png';
import FAQ1 from '@/images/pre-event-faq-1.png';
import FAQ2 from '@/images/pre-event-faq-2.png';
import FAQ3 from '@/images/pre-event-faq-3.png';
import FAQ4 from '@/images/pre-event-faq-4.png';
import LeftSplash from '@/images/pre-event-splash-left.png';
import RightSplash from '@/images/pre-event-splash-right.png';
import Image from 'next/image';
import Carousel from '@/components/shared/Carousel';

function PreEventMobile() {
  return (
    <main className="bg-wall-texture pb-20 overflow-hidden">
      <section className="pb-20 px-5 sm:px-20 md:px-44 flex w-full flex-col text-white">
        <div className="h-1/5 flex justify-center items-center mt-20 text-center">
          <h1 className="text-5xl min-[300px]:text-6xl text-cream rosela">
            Panggung Swara Insan
          </h1>
        </div>
        <div className="flex flex-col gap-5 mt-10 text-center">
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
        <div className="mt-28 flex justify-center">
          <iframe
            className="w-[75%] sm:w-[70%] aspect-[4/3] -rotate-6"
            src="https://www.youtube.com/embed/nAkCmxc8cwI?si=zra8MAgrXfZDfVYl&amp;controls=0"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </section>
      <section className="bg-paper-flat px-5 sm:px-20 md:px-44 flex flex-col gap-20 items-center pt-14 pb-32">
        <div className="relative w-2/3 aspect-square">
          <Image src={BigFlower} alt="Flower" fill sizes="100vh" />
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
      <div className="relative w-full">
        <div className="absolute w-[50%] sm:w-[40%] -top-24 sm:-top-44 -left-14 aspect-[16/11]">
          <Image src={LeftHand} alt="Left Hand" fill sizes="100vh" />
        </div>
        <div className="absolute w-[40%] sm:w-[35%] -top-3 sm:-top-14 right-0 aspect-[16/11]">
          <Image src={RightHand} alt="Right Hand" fill sizes="100vh" />
        </div>
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
        <div className="relative w-full aspect-[5/4] pb-20 px-5 sm:px-20 md:px-44">
          <Image src={Art} alt="Art" fill sizes="100vh" />
        </div>
        <div className="px-5 sm:px-20 md:px-44">
          <p className="linux-libertine-slanted italic font-bold text-center">
            “Jangan lewatkan tanggalnya! Pencarian student speaker dibuka sejak
            tanggal 1 hingga 5 September 2023”
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
