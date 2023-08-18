import Button from '@/components/shared/Button';
import Frame from '@/images/card-1.png';
import Photo from '@/images/home-photo.png';
import Splash from '@/images/home-splash.png';
import X from '@/images/home-x.png';
import Pattern1 from '@/images/memantik-bg.png';
import Pattern2 from '@/images/pattern-2.png';
import UnknownSpeaker from '@/images/unknown-speaker.png';
import GIF from '@/videos/home-content.gif';
import Image from 'next/image';

function MemantikMobile() {
  return (
    <main className="bg-wall-texture overflow-hidden">
      <section className="relative z-0 flex flex-col gap-10 text-white w-full bg-cover">
        <div className="absolute -z-10 w-full aspect-square">
          <Image
            src={Pattern1}
            alt="Pattern 1"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="px-5 sm:px-20 pt-10 text-center">
          <h1 className="text-cream rosela text-2xl sm:text-3xl font-bold">
            “Mamantik Baskara: Tersulut Tak Membara, Terbakar Tak Bersuara”
          </h1>
        </div>
        <div className="flex flex-col px-10 sm:px-20 items-center gap-10">
          <div className="relative w-full aspect-[4/3] -rotate-6">
            <Image src={Frame} alt="Frame" fill />
          </div>
          <div className="relative w-full aspect-[4/3] rotate-6">
            <Image src={Frame} alt="Frame" fill />
          </div>
          <div className="relative w-full aspect-[4/3] -rotate-6">
            <Image src={Frame} alt="Frame" fill />
          </div>
          <div className="relative w-full aspect-[4/3] rotate-6">
            <Image src={Frame} alt="Frame" fill />
          </div>
        </div>

        <div className="px-5 py-10">
          <div className="relative overflow-hidden w-full aspect-[4/3]">
            <Image src={GIF} alt="gif" fill className="object-cover" />
          </div>
        </div>

        <div className="relative w-full aspect-square">
          <Image src={Pattern2} alt="Pattern 2" fill className="object-cover" />
        </div>

        <div className="px-5 text-justify">
          <h2 className="text-7xl font-bold text-cream rosela mb-20 w-1/2">
            Gelora Djiwa
          </h2>
          <p>
            Reaksi fisiologis akan sukacita, keresahan, dan ragam lainnya muncul
            saat seseorang mampu memanifestasikan penerimaan diri. Dalam acara
            ini, masing-masing insan yang memiliki faktor luar biasa mampu
            menggerakkan &quot;Gelora Djiwa&quot; sebagai dorongan kuat untuk
            bertindak sebagai wujud proses untuk merayakan pengalaman kompleks
            yang secara alami dirasakan sebagai manusia hingga mampu mencapai
            penerimaan diri seutuhnya dan sisi eksternal secara apa adanya.
          </p>
        </div>
      </section>
      <section className="bg-paper flex flex-col gap-10 mt-5 pt-44 pb-28 w-full bg-cover bg-center">
        <div className="px-5 sm:px-20 flex flex-col gap-10">
          <div className="relative w-full ml-3 aspect-square">
            <Image src={X} alt="X image" fill className="object-center" />
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-3">
              Segera Hadir: <br /> Panggung Swara Insan
            </h2>
            <p>
              Di panggung pre-event ini, kamu akan merasakan sensasi berbeda
              dalam eksplorasi ide-ide bersama para pembicara terkurasi.
            </p>
          </div>
          <p className="italic linux-libertine-slanted font-bold text-center text-xl">
            “Mari berikan ide dan gagasan kamu dalam Panggung Swara Insan!”
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="relative w-full aspect-square">
                <Image src={UnknownSpeaker} alt="Speaker" fill />
              </div>
              <p className="font-bold text-xl">?????</p>
              <p className="text-lg">The Speaker</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full aspect-square">
                <Image src={UnknownSpeaker} alt="Speaker" fill />
              </div>
              <p className="font-bold text-xl">?????</p>
              <p className="text-lg">The Speaker</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative w-full aspect-square">
                <Image src={UnknownSpeaker} alt="Speaker" fill />
              </div>
              <p className="font-bold text-xl">?????</p>
              <p className="text-lg">The Speaker</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              as="client-link"
              type="secondary"
              href="/home"
              className="w-full">
              Apa itu Pre-Event?
            </Button>
            <Button
              as="client-link"
              type="primary"
              href="/home"
              className="w-full">
              Jadilah Speaker!
            </Button>
          </div>
        </div>

        <div className="mt-20 z-0">
          <div className="relative w-full aspect-[4/3]">
            <Image src={Photo} alt="Staff photo" fill />
            <div className="absolute -z-10 w-full aspect-[16/15] -top-14">
              <Image src={Splash} alt="Staff photo" fill />
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-20 flex flex-col gap-10 mt-10">
          <h2 className="font-extrabold text-5xl">Tickets Dropping Soon!</h2>
          <Button
            as="client-link"
            type="primary"
            href="/home"
            className="w-full">
            Grab Yours
          </Button>
        </div>
      </section>
    </main>
  );
}

export default MemantikMobile;
