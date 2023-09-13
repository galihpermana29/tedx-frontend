import JafarImg from '@/images/jafar.png';
import Image from 'next/image';
export default function Jafar() {
  return (
    <div className="relative">
      <div className="h-screen">
        <Image
          src={JafarImg}
          alt="jafar anjing"
          className="w-screen min-h-screen object-cover"
        />
      </div>
      <div className="creato xs:text-[30px] lg:text-[125px] absolute xs:top-[10%] lg:top-[20%] text-white font-[700] bg-black-primary text-center opacity-80">
        RATE CEBELAPA IMUT AQ?
      </div>
    </div>
  );
}
