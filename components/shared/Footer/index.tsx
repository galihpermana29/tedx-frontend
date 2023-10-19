'use client';
import GmailLogo from '@/icons/gmail.png';
import InstagramLogo from '@/icons/instagram.png';
import TwitterLogo from '@/icons/twitter.png';
import YoutubeLogo from '@/icons/youtube.png';
import FooterLine from '@/images/footer-line.png';
import Logo from '@/images/logo.png';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathName = usePathname();
  const includedPaths = [
    '/home',
    '/about-us',
    '/pre-event',
    '/ticket-pre-event',
    '/our-team',
    '/merch',
    '/semayam-asa',
  ];

  return (
    <footer
      className={`bg-green-fade text-white ${
        !includedPaths.includes(pathName) ? 'hidden' : 'visible'
      }`}>
      <div className="relative w-full aspect-[16/6] sm:aspect-[16/4] lg:aspect-[16/3]">
        <div className="relative w-full h-full z-10">
          <Image
            src={FooterLine}
            alt="Line Art"
            fill
            sizes="100vh"
            className="object-cover -mt-16 lg:-mt-[10%] "
          />
        </div>
      </div>
      <div className="text-center overflow-hidden -mt-10 sm:-mt-12 lg:-mt-28 flex flex-col items-center gap-14">
        <div className="relative px-5 h-[70px] aspect-[16/4]">
          <Image src={Logo} alt="TEDx Logo" fill sizes="100vh" />
        </div>
        <div className=" px-5 flex flex-col gap-5">
          <p className="font-bold text-xl">Mari Terkoneksi:</p>
          <div className="flex gap-5 items-center">
            <a
              href="mailto:tedxuniversitasbrawijaya@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={GmailLogo} alt="Gmail" fill sizes="100vh" />
            </a>
            <a
              href={'https://www.instagram.com/tedxuniversitasbrawijaya'}
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={InstagramLogo} alt="Instagram" fill sizes="100vh" />
            </a>
            <a
              href={'https://youtube.com/@tedxuniversitasbrawijaya2100'}
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={YoutubeLogo} alt="Youtube" fill sizes="100vh" />
            </a>
            <a
              href={'https://twitter.com/tedxbrawijaya'}
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image
                src={TwitterLogo}
                alt="Twitter"
                fill
                sizes="100vh"
                className=" text-red-500"
              />
            </a>
          </div>
        </div>
        <div className="border-t font-medium px-5 py-5 w-full">
          <p>
            © 2023. TEDxUniversitasBrawijaya: An independently organized
            TED-like event under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
