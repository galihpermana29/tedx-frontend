'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';
import MemantikMobile from './mobile';
import MemantikDesktop from './desktop';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <MediaQuerySwitcher
          screenWidth={1024}
          mobile={<MemantikMobile />}
          desktop={<MemantikDesktop />}
        />
      </Suspense>
    </>
  );
}
