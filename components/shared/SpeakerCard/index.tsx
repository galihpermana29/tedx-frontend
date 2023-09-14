import Speaker1 from '@/images/speaker-1.png';
import Speaker2 from '@/images/speaker-2.png';
import Speaker3 from '@/images/speaker-3.png';
import Image, { StaticImageData } from 'next/image';

import api from '@/images/bg-speaker-api.png';
import flower from '@/images/bg-speaker-flowe.png';
import flower2 from '@/images/bg-speaker-flower-1.png';
import wave from '@/images/bg-speaker-wave.png';

import { motion } from 'framer-motion';

type SpeakerCardProps = {
  className?: string;
  variant: 1 | 2 | 3;
  delay: number;
};

type CardContent = {
  image: StaticImageData;
  desc: string;
  nama: string;
};

const content: Array<CardContent> = [
  {
    image: Speaker1,
    desc: 'The Speaker',
    nama: 'Nurkholis Fahroni',
  },
  {
    image: Speaker2,
    desc: 'Another Speaker',
    nama: 'Diva Suukyi Larasati',
  },
  {
    image: Speaker3,
    desc: 'A Different Speaker',
    nama: 'Alvian Wardhana',
  },
];

function SpeakerCard({ className, variant, delay = 1 }: SpeakerCardProps) {
  return (
    <div key={variant} className={`flex flex-col gap-2 ${className}`}>
      <div className="  relative">
        <motion.div className="w-full aspect-square bg-speaker-bg bg-cover bg-no-repeat relative overflow-hidden">
          <motion.div
            animate={{
              position: 'absolute',
              width: '100%',
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="h-full w-full  bg-black-primary z-[2] absolute opacity-80 text-black-primary"></motion.div>

          <motion.div
            animate={{
              position: 'absolute',
              scale: [2, 3, 2],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="absolute top-0 z-[1] left-0">
            <Image src={wave} alt="wave" className=" max-w-[300px] w-full" />
          </motion.div>
          <motion.div
            animate={{
              position: 'absolute',
              scale: [2, 3, 2],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="absolute bottom-0 -left-5">
            <Image
              src={api}
              alt="wave"
              className="z-[1] max-w-[400px] w-full "
            />
          </motion.div>
          <motion.div
            animate={{
              position: 'absolute',
              scale: [2, 3, 2],
              zIndex: [1, 2, 1],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="absolute right-0 -bottom-7">
            <Image
              src={flower}
              alt="wave"
              className="z-[1] max-w-[400px] w-full "
            />
          </motion.div>
          <motion.div
            animate={{
              position: 'absolute',
              scale: [2, 3, 2],
              zIndex: [1, 2, 1],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="absolute right-5 top-0">
            <Image
              src={flower2}
              alt="wave"
              className="z-[1] max-w-[500px] w-full "
            />
          </motion.div>
          <motion.div
            animate={{
              position: 'relative',
              zIndex: [4, 5, 4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: delay,
            }}
            className="w-full h-full flex justify-center items-end z-[4] relative">
            <Image
              src={content[variant - 1].image}
              alt="Speaker"
              className="max-w-[70%] w-full"
            />
          </motion.div>
        </motion.div>
      </div>

      <p className="font-bold text-xl">{content[variant - 1].nama}</p>
      <p className="text-lg">{content[variant - 1].desc}</p>
    </div>
  );
}

export default SpeakerCard;
