'use client';

import { mainEventExperienceList as exp } from '@/utils/data/main-event-experience';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import parse from 'html-react-parser';

function MainEventExperience() {
  const [currentExpIndex, setCurrentExpIndex] = useState<number>(0);

  return (
    <div className="w-full relative z-0 overflow-hidden rounded-xl">
      <div className="w-full absolute h-full aspect-[3/4] max-h-[40rem] -z-10 bg-gradient-to-r from-transparent to-black-primary"></div>

      <AnimatePresence>
        {exp.map(({ image, name }, index) => {
          return (
            currentExpIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full brightness-75 -z-20 h-full">
                <Image
                  src={`/assets/images/main-event-${image}`}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )
          );
        })}
      </AnimatePresence>

      <div className="flex flex-col p-5 gap-10 w-full aspect-[2/3] sm:aspect-[3/4] max-h-[40rem]">
        <div className="grow flex items-center">
          <AnimatePresence>
            {exp.map(({ description }, index) => {
              return (
                currentExpIndex === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    {parse(description)}
                  </motion.p>
                )
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2 bottom-0">
          {exp.map(({ name }, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentExpIndex(index)}
                className={`py-2 px-4 capitalize font-bold rounded-full border ${
                  currentExpIndex === index
                    ? 'bg-orange-primary border-orange-primary'
                    : 'border-white bg-transparent'
                }`}>
                {name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainEventExperience;
