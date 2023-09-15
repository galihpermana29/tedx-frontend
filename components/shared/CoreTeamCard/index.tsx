'use client';

import { CoreTeam } from '@/utils/interface';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

function CoreTeamCard({
  data,
  division,
  imageWidthClassName,
}: {
  data: CoreTeam;
  division: string;
  imageWidthClassName?: string;
}) {
  const [showDetail, setShowDetail] = useState(false);

  const { fakultas, instagram, linkedIn, nama, image_url } = data;

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => setShowDetail((prev) => !prev)}
        className={`relative aspect-square mb-4 group cursor-pointer bg-flower-square bg-cover overflow-hidden ${
          imageWidthClassName ? imageWidthClassName : 'w-72'
        }`}>
        <AnimatePresence>
          {!showDetail && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full h-full p-5 group-hover:scale-[1.2] transition-all duration-500">
              <div className="relative w-full h-full">
                <Image
                  loader={() => image_url}
                  src={image_url}
                  alt={`${nama} Image`}
                  fill
                  sizes="100vh"
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showDetail && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full p-5">
              <div className="flex p-2 w-full h-full flex-col justify-center gap-5 items-center text-center text-white bg-team-card bg-cover">
                <div>
                  <p>Fakultas</p>
                  <p className="font-semibold">{fakultas}</p>
                </div>
                <div>
                  <p>Instagram</p>
                  <p className="font-semibold">{instagram}</p>
                </div>
                <div>
                  <p>LinkedIn</p>
                  <p className="font-semibold">
                    {linkedIn.length > 0 ? linkedIn : '-'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="font-bold text-xl md:text-2xl text-center">{nama}</p>
      <p>{division}</p>
    </div>
  );
}

export default CoreTeamCard;
