import Image from 'next/image';
import circ from '@/images/round-merch.png';
import tshirt from '@/images/tshirt.png';
import totebag from '@/images/totebag.png';
import mancis from '@/images/mancis.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import good1 from '@/images/good-1.png';
import good2 from '@/images/good-2.png';
import good3 from '@/images/good-3.png';
import good4 from '@/images/good-4.png';
import good5 from '@/images/good-5.png';
import good6 from '@/images/good-6.png';
import good7 from '@/images/good-7.png';
import {
  goodsContainerFadeUpAnimationProps,
  goodsFadeUpVariant,
} from '@/utils/data/animation';

function MerchHeroDesktop() {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="header flex relative py-[110px]">
      <div className="flex-1 pl-[70px] 2xl:pl-[100px]">
        <h1 className="rosela text-[96px] text-[#F4D2A6] mb-[20px]">
          Teras Impresi
        </h1>
        <p className="creato text-[20px] text-white max-w-[500px] mb-[60px]">
          Merchandise istimewa dari TEDxUniversitasBrawijaya ini cocok dengan
          dirimu dan cara berpikirmu yang luar biasa unik.
          <br />
          <br />
          Pastikan merchandise ini ada di tanganmu dan ekspresikan versi terbaik
          dirimu!
        </p>

        <motion.div
          {...goodsContainerFadeUpAnimationProps}
          className="flex relative max-w-[70%] w-full flex-wrap h-[600px]">
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[10%]">
            <Image alt="good" src={good1} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[15%] left-[10%] z-[2]">
            <Image alt="good" src={good2} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[0%] left-[25%] ">
            <Image alt="good" src={good3} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[19%] left-[35%] z-[4]">
            <Image alt="good" src={good4} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[40%] z-[3]">
            <Image alt="good" src={good5} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute top-[50%] left-[25%] z-[3]">
            <Image alt="good" src={good6} />
          </motion.div>
          <motion.div
            variants={goodsFadeUpVariant}
            className="w-full absolute bottom-0 left-[45%] z-[4]">
            <Image alt="good" src={good7} />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute 2xl:right-[-5%] lg:right-[-12%]">
        <div className="">
          <AnimatePresence>
            {visibleIndex === 0 && (
              <motion.div
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                animate={{
                  translateY: '-50%',
                  top: '50%',
                  left: '-20%',
                }}
                exit={{
                  translateY: '-50%',
                  top: '50%',
                  left: '20%',
                }}
                className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] left-[20%] z-[1]">
                <h1 className="linux-libertine-slanted text-[24px] text-white italic">
                  T-Shirt
                </h1>
                <div className="w-[20px] h-[20px] rounded-full bg-[#A00101]">
                  .
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {visibleIndex === 1 && (
              <motion.div
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                animate={{
                  translateY: '-50%',
                  top: '50%',
                  left: '-20%',
                }}
                exit={{
                  translateY: '-50%',
                  top: '50%',
                  left: '20%',
                }}
                className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] left-[20%] z-[1]">
                <h1 className="linux-libertine-slanted text-[24px] text-white italic">
                  Tote Bag
                </h1>
                <div className="w-[20px] h-[20px] rounded-full bg-[#A00101]">
                  .
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {visibleIndex === 2 && (
              <motion.div
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                animate={{
                  translateY: '-50%',
                  top: '50%',
                  left: '-20%',
                }}
                exit={{
                  translateY: '-50%',
                  top: '50%',
                  left: '20%',
                }}
                className="flex items-center gap-[10px] absolute top-[50%] translate-y-[-50%] left-[20%] z-[1]">
                <h1 className="linux-libertine-slanted text-[24px] text-white italic">
                  Lainnya
                </h1>
                <div className="w-[20px] h-[20px] rounded-full bg-[#A00101]">
                  .
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-full relative z-[1]">
            <Image alt="circl" src={circ} />
          </div>
          <div>
            <AnimatePresence>
              {visibleIndex === 0 && (
                <motion.div
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    y: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] item z-[2]"
                  animate={{
                    translateX: '-50%',
                    translateY: '-50%',
                    top: '50%',
                    left: '50%',
                  }}
                  exit={{
                    translateX: '50%',
                    translateY: '-90%',
                    top: '50%',
                    left: '50%',
                  }}>
                  <Image alt="tshirt" src={tshirt} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {visibleIndex === 1 && (
                <motion.div
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    y: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] item z-[2]"
                  animate={{
                    translateX: '-50%',
                    translateY: '-50%',
                    top: '50%',
                    left: '50%',
                  }}
                  exit={{
                    translateX: '50%',
                    translateY: '-90%',
                    top: '50%',
                    left: '50%',
                  }}>
                  <Image alt="tshirt" src={totebag} />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {visibleIndex === 2 && (
                <motion.div
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    y: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] item z-[2]"
                  animate={{
                    translateX: '-50%',
                    translateY: '-50%',
                    top: '50%',
                    left: '50%',
                  }}
                  exit={{
                    translateX: '50%',
                    translateY: '-90%',
                    top: '50%',
                    left: '50%',
                  }}>
                  <Image alt="tshirt" src={mancis} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchHeroDesktop;
