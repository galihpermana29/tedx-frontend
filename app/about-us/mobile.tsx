import AboutImage from '@/images/about-image.png';
import LeftSplash from '@/images/about-us-left-splash.png';
import VideoBG from '@/images/about-us-video-bg.png';
import VideoSplash from '@/images/about-us-video-splash.png';
import Image from 'next/image';

function AboutUsMobile() {
  return (
    <main>
      <section className="relative -z-30 flex h-fit w-full flex-col justify-center bg-wall bg-cover text-white">
        <h1 className="mt-[4.75rem] px-5 text-center text-5xl sm:text-6xl">
          Tentang Kami
        </h1>
        <div className="relative -bottom-10 aspect-[16/9] w-full">
          <Image
            src={AboutImage}
            alt="About Image"
            fill
            className="overflow-visible object-cover object-left"
          />
        </div>
      </section>
      <section className="relative -z-20 flex w-full flex-col justify-between gap-14 overflow-hidden bg-paper bg-cover bg-no-repeat px-5 pb-20 pt-32 sm:px-20">
        <div className="relative flex w-full justify-center">
          <div className="relative -mr-10 aspect-[2/3] w-2/3 sm:w-1/2 lg:-mr-0">
            <Image src={VideoBG} alt="Video Background" fill />
            <div className="absolute right-7 z-10 h-full w-full bg-zinc-500"></div>
          </div>

          <div className="absolute -right-[48rem] -top-48 -z-10 aspect-[16/8.7] w-[80rem] sm:-right-[40rem]">
            <Image
              src={VideoSplash}
              alt="Blue Splash"
              fill
              className="object-fill"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-14 text-sm sm:text-base lg:w-1/2">
          <div>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">TED</h2>
            <p>
              TED merupakan sebuah organisasi nirlaba dengan semangat “Ideas
              Worth Spreading” yang berfokus pada Technology, Entertainment, dan
              Design. TED pertama kali dibentuk pada tahun 1984 dan menjadi
              ruang bagi individu-individu dengan semangat yang sama untuk
              menyebarkan ide-ide brilian di seluruh dunia.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">TEDx</h2>
            <p className="font-">
              TEDx merupakan events yang mengolaborasikan komunitas lokal untuk
              berbagi ide dengan konsep yang ada pada TED sehingga memicu
              diskusi dan koneksi yang mendalam. TEDx dengan label ikonik
              bersimbol “x” bermakna bahwa events tersebut diselenggarakan
              secara independen dengan lisensi dari TED.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl">
              TEDxUniversitasBrawijaya
            </h2>
            <p>
              TEDxUniversitasBrawijaya merupakan salah satu dari TEDx event yang
              diselenggarakan secara independen dengan lisensi TEDx yang
              diinisiasi komunitas lingkup Universitas Brawijaya.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 -z-10 h-52 w-52">
          <Image src={LeftSplash} alt="Yellow Splash" fill />
        </div>
      </section>
    </main>
  );
}

export default AboutUsMobile;
