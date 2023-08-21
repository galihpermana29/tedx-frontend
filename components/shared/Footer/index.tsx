import GmailLogo from '@/icons/gmail.png';
import InstagramLogo from '@/icons/instagram.png';
import TwitterLogo from '@/icons/twitter.png';
import YoutubeLogo from '@/icons/youtube.png';
import FooterLine from '@/images/footer-line.png';
import Logo from '@/images/logo.png';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-green-fade text-white">
      <div className="relative w-full aspect-[16/6] sm:aspect-[16/4]">
        <div className="relative w-full h-full z-10">
          <Image
            src={FooterLine}
            alt="Line Art"
            fill
            className="object-cover -mt-10 lg:-mt-20"
          />
        </div>
      </div>
      <div className="text-center overflow-hidden -mt-5 sm:mt-0 flex flex-col items-center gap-14">
        <div className="relative px-5 h-[70px] aspect-[16/4]">
          <Image src={Logo} alt="TEDx Logo" fill />
        </div>
        <div className=" px-5 flex flex-col gap-5">
          <p className="font-bold text-xl">Mari Terkoneksi:</p>
          <div className="flex gap-5">
            <a
              href="mailto:tedxuniversitasbrawijaya@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={GmailLogo} alt="Gmail" fill />
            </a>
            <a
              href={'https://www.instagram.com/tedxuniversitasbrawijaya'}
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={InstagramLogo} alt="Instagram" fill />
            </a>
            <a
              href={'https://youtube.com/@tedxuniversitasbrawijaya2100'}
              target="_blank"
              rel="noreferrer"
              className="relative w-10 aspect-square bg-gray-800 bg-opacity-0 hover:bg-opacity-40">
              <Image src={YoutubeLogo} alt="Youtube" fill />
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
