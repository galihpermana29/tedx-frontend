'use client';

import { mainEventExperienceList as exp } from '@/utils/data/main-event-experience';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import parse from 'html-react-parser';

function MainEventExperience() {
  const [currentExpIndex, setCurrentExpIndex] = useState<number>(0);

  return (
    <div className="w-full relative bg-zinc-700 z-0 overflow-hidden rounded-xl">
      <div className="w-full absolute h-full aspect-[3/4] max-h-[40rem] lg:max-h-[47rem] -z-10 bg-gradient-to-r from-transparent to-black-primary"></div>

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

      <div className="flex flex-col py-5 px-5 lg:px-10 gap-10 w-full aspect-[2/3] sm:aspect-[3/4] lg:aspect-[16/10] max-h-[40rem] lg:max-h-[47rem]">
        <div className="grow flex items-center md:justify-end">
          <AnimatePresence>
            {exp.map(({ description }, index) => {
              return (
                currentExpIndex === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-2/3 lg:w-[40%] text-base lg:text-lg">
                    {parse(description)}
                  </motion.p>
                )
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap lg:justify-center gap-2">
          {exp.map(({ name }, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentExpIndex(index)}
                className={`py-2 px-4 capitalize text-base lg:text-xl font-bold rounded-full border ${
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
