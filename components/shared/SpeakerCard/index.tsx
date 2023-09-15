import Speaker1 from '@/images/speaker-1.png';
import Speaker2 from '@/images/speaker-2.png';
import Speaker3 from '@/images/speaker-3.png';
import Image, { StaticImageData } from 'next/image';

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
    desc: 'Fakultas Ilmu Budaya - 2019',
    nama: 'Nurkholis Fahroni',
  },
  {
    image: Speaker2,
    desc: 'Fakultas Hukum - 2020',
    nama: 'Diva Suukyi Larasati',
  },
  {
    image: Speaker3,
    desc: 'Fakultas Teknik - 2019',
    nama: 'Alvian Wardhana',
  },
];

function SpeakerCard({ className, variant, delay = 1 }: SpeakerCardProps) {
  return (
    <div key={variant} className={`flex flex-col gap-2 ${className}`}>
      <div className="  relative">
        <motion.div className="w-full aspect-square bg-speaker-card bg-cover bg-no-repeat relative overflow-hidden">
          <motion.div
            animate={{
              position: 'absolute',
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
