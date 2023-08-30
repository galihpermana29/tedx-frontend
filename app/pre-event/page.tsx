'use client';

import MediaQuerySwitcher from '@/components/shared/Loader';

import PreEventDesktop from './desktop';
import PreEventMobile from './mobile';

export default function PreEvent() {
  return (
    <div>
      <MediaQuerySwitcher
        screenWidth={1024}
        mobile={<PreEventMobile />}
        desktop={<PreEventDesktop />}
      />
    </div>
  );
}
