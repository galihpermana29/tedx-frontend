import LogoHitam from '@/images/logo-hitam.png';
import Image from 'next/image';
import flower from '@/images/navbar-flower.png';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const LoadingPage = () => {
  const pathName = usePathname();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [pathName]);
  return (
    <motion.div
      className={`justify-center items-center h-screen bg-white flex-col ${
        loading ? 'flex' : 'hidden'
      }`}>
      <div>
        <Image src={LogoHitam} alt="logohitam" />
      </div>
      <div className="border-[3px] border-black-primary w-full h-[60px] max-w-[400px] overflow-hidden">
        <motion.div
          key={pathName}
          initial={{ width: 0 }}
          animate={{ width: '400px' }}
          transition={{ duration: 3 }}
          className="h-[60px] object-cover">
          <Image src={flower} alt="flower" className=" h-[60px] object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
};
