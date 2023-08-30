'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';
import MemantikMobile from './mobile';
import MemantikDesktop from './desktop';

export default function Home() {
  return (
    <div>
      <MediaQuerySwitcher
        screenWidth={1024}
        mobile={<MemantikMobile />}
        desktop={<MemantikDesktop />}
      />
    </div>
  );
}
