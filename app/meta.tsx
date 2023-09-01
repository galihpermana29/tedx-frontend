'use client';

import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navbar';
import { usePathname } from 'next/navigation';

export const MetaLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const includedPaths = ['/'];
  return (
    <div>
      {!includedPaths.includes(pathName) && <Navigation />}
      {children}
      <Footer />
    </div>
  );
};
