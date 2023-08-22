import Image from 'next/image';
import Logo from '@/images/logo.png';
import LogoHitam from '@/images/logo-hitam.png';
import hamburger from '@/images/hamburger.png';
import Button from '../Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import flower from '@/images/navbar-flower.png';
import navbarFoto from '@/images/navbar-image.png';
import xIcon from '@/images/x-icon.png';
import { useState } from 'react';

export const NavbarDesktop = () => {
  const [navbarHidden, setNavbarHidden] = useState(true);
  const MotionButton = motion(Button);
  return (
    <div>
      <div className="absolute left-0 right-0  z-[99] h-[80px] w-full justify-between items-center flex px-[60px] hover:bg-[#1E373E] duration-300 cursor-pointer">
        <div className="flex-1 max-w-[170px]">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center flex-1 max-w-max gap-[30px]">
          <div className="button">
            <MotionButton
              onClick={() => ({})}
              as="button"
              type="primary"
              className="py-[7px]">
              <div> Grab Ticket</div>
            </MotionButton>
          </div>
          <div
            className="flex items-center ml-auto"
            onClick={() => setNavbarHidden(false)}>
            <div className="creato-display text-[20px] text-[#E83F1C] mr-[7px]">
              Menu
            </div>
            <div>
              <Image src={hamburger} alt="icon" />
            </div>
          </div>
        </div>
      </div>

      {/* onopen */}

      <motion.div
        animate={navbarHidden ? {} : { top: '0', bottom: '0', display: 'flex' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`fixed z-[100] flex bg-white h-screen overflow-hidden left-0 right-0  ${
          navbarHidden ? 'hidden' : ' top-[-100vh]'
        }`}>
        <div
          className="absolute top-[5vh] right-[5vh] z-[101] cursor-pointer"
          onClick={() => setNavbarHidden(true)}>
          <Image src={xIcon} alt="logo" />
        </div>
        <div className="left flex-1 flex flex-col ml-[5%] py-[50px] gap-[50px]">
          <div className="max-w-[200px]">
            <Image src={LogoHitam} alt="logo" />
          </div>
          <div className="flex flex-col h-[65%] justify-between">
            <motion.div
              transition={
                navbarHidden ? {} : { duration: 1, ease: 'easeInOut', delay: 0 }
              }
              animate={navbarHidden ? {} : { transform: 'translateX(0vw)' }}
              initial={{ transform: 'translateX(-100vw)' }}>
              <Link
                href={'/home'}
                className="creato-display text-[30px] font-[700] hover:underline ">
                Homepage
              </Link>
            </motion.div>
            <div className="flex flex-col">
              <motion.div
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 0.2 }
                }
                animate={navbarHidden ? {} : { transform: 'translateX(0vw)' }}
                initial={{ transform: 'translateX(-100vw)' }}>
                <div className="creato-display text-[30px] font-[700]">
                  About
                </div>
              </motion.div>
              <motion.div
                onClick={() => setNavbarHidden(true)}
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 2 }
                }
                animate={navbarHidden ? {} : { opacity: 1 }}
                initial={{ opacity: 0 }}>
                <Link
                  href={'/about-us'}
                  className="creato-display text-[20px] font-[500] ml-[20px] hover:underline">
                  About Us
                </Link>
              </motion.div>
              <motion.div
                onClick={() => setNavbarHidden(true)}
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 2.2 }
                }
                animate={navbarHidden ? {} : { opacity: 1 }}
                initial={{ opacity: 0 }}>
                <Link
                  href={'/'}
                  className="creato-display text-[20px] font-[500] ml-[20px] hover:underline">
                  Our Team
                </Link>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <motion.div
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 0.5 }
                }
                animate={navbarHidden ? {} : { transform: 'translateX(0vw)' }}
                initial={{ transform: 'translateX(-100vw)' }}>
                <div className="creato-display text-[30px] font-[600]">
                  Event
                </div>
              </motion.div>
              <motion.div
                onClick={() => setNavbarHidden(true)}
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 2.4 }
                }
                animate={navbarHidden ? {} : { opacity: 1 }}
                initial={{ opacity: 0 }}>
                <Link
                  href={'/'}
                  className="creato-display text-[20px] font-[500] ml-[20px]">
                  Pre Event
                </Link>
              </motion.div>
              <motion.div
                onClick={() => setNavbarHidden(true)}
                transition={
                  navbarHidden
                    ? {}
                    : { duration: 1, ease: 'easeInOut', delay: 2.7 }
                }
                animate={navbarHidden ? {} : { opacity: 1 }}
                initial={{ opacity: 0 }}>
                <Link
                  href={'/'}
                  className="creato-display text-[20px] font-[500] ml-[20px]">
                  Main Event
                </Link>
              </motion.div>
            </div>
            <motion.div
              onClick={() => setNavbarHidden(true)}
              transition={
                navbarHidden
                  ? {}
                  : { duration: 1, ease: 'easeInOut', delay: 0.8 }
              }
              animate={navbarHidden ? {} : { transform: 'translateX(0vw)' }}
              initial={{ transform: 'translateX(-100vw)' }}>
              <Link
                href={'/'}
                className="creato-display text-[30px] font-[700]">
                Event Recap
              </Link>
            </motion.div>
            <motion.div
              onClick={() => setNavbarHidden(true)}
              transition={
                navbarHidden ? {} : { duration: 1, ease: 'easeInOut', delay: 1 }
              }
              animate={navbarHidden ? {} : { transform: 'translateX(0vw)' }}
              initial={{ transform: 'translateX(-100vw)' }}>
              <Link
                href={'/'}
                className="creato-display text-[30px] font-[700]">
                Merch
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="right flex-1 flex flex-col relative ">
          <div className="flex-1 w-full">
            <Image src={navbarFoto} alt="logo" className="w-full" />
          </div>
          <div className="flex-1 w-full absolute bottom-0">
            <Image src={flower} alt="logo" className="w-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
