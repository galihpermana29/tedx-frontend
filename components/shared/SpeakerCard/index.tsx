import Speaker1 from '@/images/speaker-1.png';
import Speaker2 from '@/images/speaker-2.png';
import Speaker3 from '@/images/speaker-3.png';
import Image, { StaticImageData } from 'next/image';

type SpeakerCardProps = {
  className?: string;
  variant: 1 | 2 | 3;
};

type CardContent = {
  image: StaticImageData;
  desc: string;
};

const content: Array<CardContent> = [
  {
    image: Speaker1,
    desc: 'The Speaker',
  },
  {
    image: Speaker2,
    desc: 'A Different Speaker',
  },
  {
    image: Speaker3,
    desc: 'Another Speaker',
  },
];

function SpeakerCard({ className, variant }: SpeakerCardProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="relative w-full aspect-square">
        <Image
          src={content[variant - 1].image}
          alt="Speaker"
          fill
          sizes="100vh"
          placeholder="blur"
        />
      </div>
      <p className="font-bold text-xl">?????</p>
      <p className="text-lg">{content[variant - 1].desc}</p>
    </div>
  );
}

export default SpeakerCard;
