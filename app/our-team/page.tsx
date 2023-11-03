'use client';

import WebsiteAPI from '@/api/website';
import CoreTeamCard from '@/components/shared/CoreTeamCard';
import { LoadingPage } from '@/components/shared/Loading';
import Cloud1 from '@/images/our-team-cloud-1.png';
import Cloud2 from '@/images/our-team-cloud-2.png';
import Flower from '@/images/our-team-flower.png';
import HeroImage from '@/images/our-team-hero.png';
import Divider from '@/images/our-team-section-divider.png';
import { OurTeamI } from '@/utils/interface';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import Lenis from '@studio-freight/lenis';

export default function OurTeam() {
  const [teamData, setTeamData] = useState<OurTeamI>();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await WebsiteAPI.getAllTeam();
        setTeamData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const lenis = new Lenis();

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main>
        <section className="w-full min-h-screen select-none overflow-hidden flex flex-col gap-2 justify-between relative pt-32">
          <Image
            src={HeroImage}
            alt="Hero Image"
            fill
            sizes="100vh"
            className="object-cover"
          />
          <Marquee direction="right" speed={130} className="overflow-hidden">
            <div className="relative h-32 md:h-52 aspect-video">
              <Image src={Cloud1} alt="Cloud" fill sizes="100vh" />
            </div>
          </Marquee>
          <Marquee speed={130} className="overflow-hidden mt-20">
            <div className="relative h-32 md:h-52 aspect-video">
              <Image src={Cloud2} alt="Cloud" fill sizes="100vh" />
            </div>
          </Marquee>

          <div className="relative">
            <motion.div
              animate={{ rotate: [-180, 10, -180] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
              className="h-32 md:h-52 aspect-square absolute z-10 right-2 md:right-10 -top-14 md:-top-28">
              <Image src={Flower} alt="Flower" fill sizes="100vh" />
            </motion.div>
            <Marquee
              autoFill
              speed={170}
              className={`bebas-neue overflow-hidden text-white -mb-10`}>
              <p className="text-[20rem] leading-none">MEET.THE.TEAM.</p>
            </Marquee>
          </div>
        </section>
        <section className="w-full h-[20vh] relative">
          <Image
            src={Divider}
            alt="Art"
            fill
            sizes="100vh"
            className="object-cover"
          />
        </section>
        <section className="bg-tedx text-center flex px-5 md:px-20 flex-col gap-52 items-center pt-32 pb-52">
          {!teamData && <LoadingPage />}
          {teamData &&
            teamData.data.map(({ id, coreteam, volunteer, divisi }) => {
              return (
                <div
                  key={id}
                  className="text-white w-full flex flex-col items-center gap-10">
                  <h2 className="font-bold text-3xl">{divisi}</h2>
                  <div className="grid w-full sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-x-5 gap-y-10">
                    {coreteam.map((coreTeamData, index) => {
                      return (
                        <CoreTeamCard
                          key={index}
                          data={coreTeamData}
                          division={divisi}
                          imageWidthClassName="w-full lg:w-72"
                        />
                      );
                    })}
                  </div>
                  {volunteer.length > 0 && (
                    <>
                      <h3 className="font-bold text-3xl">The Volunteers</h3>
                      <div className="flex flex-wrap justify-center gap-5">
                        {volunteer.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="bg-flower-small px-3 py-2">
                              <div className="bg-white font-bold text-black-primary px-3 py-2">
                                {item}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </section>
      </main>
    </>
  );
}
