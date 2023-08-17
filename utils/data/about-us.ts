import { Variants } from 'framer-motion';

type TextContent = {
  title: string;
  desc: string;
};

export const textContent: Array<TextContent> = [
  {
    title: 'TED',
    desc: `TED merupakan sebuah organisasi nirlaba dengan semangat “Ideas Worth Spreading” yang berfokus pada Technology, Entertainment, dan Design. TED pertama kali dibentuk pada tahun 1984 dan menjadi ruang bagi individu-individu dengan semangat yang sama untuk menyebarkan ide-ide brilian di seluruh dunia.`,
  },
  {
    title: 'TEDx',
    desc: `TEDx merupakan events yang mengolaborasikan komunitas lokal untuk berbagi ide dengan konsep yang ada pada TED sehingga memicu diskusi dan koneksi yang mendalam. TEDx dengan label ikonik bersimbol “x” bermakna bahwa events tersebut diselenggarakan secara independen dengan lisensi dari TED.`,
  },
  {
    title: 'TEDxUniversitasBrawijaya',
    desc: `TEDxUniversitasBrawijaya merupakan salah satu dari TEDx event yang diselenggarakan secara independen dengan lisensi TEDx yang diinisiasi komunitas lingkup Universitas Brawijaya.`,
  },
];

export const textVariant: Variants = {
  visible: { filter: `blur(0rem)` },
  hidden: { filter: `blur(0.2rem)` },
};
