'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';
import MemantikMobile from './mobile';
import MemantikDesktop from './desktop';

export default function Home() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<MemantikMobile />}
      desktop={<MemantikDesktop />}
    />
  );
}
