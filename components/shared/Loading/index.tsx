import LogoHitam from '@/images/logo-hitam.png';
import Image from 'next/image';
import flower from '@/images/navbar-flower.png';
import { motion } from 'framer-motion';

export const LoadingPage = () => {
  return (
    <motion.div
      className={`justify-center items-center h-screen flex-col ${'flex'} px-[30px]`}>
      <div>
        <Image src={LogoHitam} alt="logohitam" />
      </div>
      <div className="border-[3px] border-black-primary w-full h-[60px] max-w-[400px] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '400px' }}
          transition={{ duration: 10 }}
          className="h-[60px] object-cover">
          <Image src={flower} alt="flower" className=" h-[60px] object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
};
